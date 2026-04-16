import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { QuizAnswers } from '@/lib/quiz';

interface PdfMapping {
  pdf_identifier: string;
  condition: string;
  sub_condition: string;
  pdf_name: string;
  pdf_url: string;
  priority: string;
  description: string;
}

// Cache for PDF mappings (refresh every 5 minutes)
let pdfMappingsCache: PdfMapping[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Get PDF identifier from quiz answers
 * This maps the quiz responses to a specific PDF
 */
function getPdfIdentifier(answers: QuizAnswers): string {
  const condition = answers.conditions;

  if (!condition) return 'general-healthy';

  switch (condition) {
    case 'diabetes': {
      const diabetesStatus = answers['diabetes-status'];
      return `diabetes-${diabetesStatus || 'not-sure'}`;
    }

    case 'high-blood-pressure': {
      const bpStatus = answers['blood-pressure'];
      return `bp-${bpStatus || 'not-sure'}`;
    }

    case 'pcos': {
      const pcosGoal = answers['pcos-goal'];
      return `pcos-${pcosGoal || 'not-sure'}`;
    }

    case 'weight-loss': {
      const weightGoal = answers['weight-loss-goal'];
      return `weight-loss-${weightGoal || 'not-sure'}`;
    }

    case 'high-cholesterol': {
      const confirmed = answers['cholesterol-confirmed'];
      return `cholesterol-${confirmed || 'not-sure'}`;
    }

    case 'none-of-the-above': {
      const generalGoal = answers['general-goal'];
      return `general-${generalGoal || 'healthy-eating'}`;
    }

    case 'prefer-not-to-answer': {
      const primaryGoal = answers['primary-goal'];
      return `general-${primaryGoal || 'healthy-eating'}`;
    }

    default:
      return 'general-healthy';
  }
}

/**
 * Load PDF mappings from Google Sheets
 */
async function loadPdfMappings(): Promise<PdfMapping[]> {
  // Check cache first
  if (pdfMappingsCache && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return pdfMappingsCache;
  }

  try {
    // Initialize auth
    const serviceAccountEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      console.error('Missing Google Sheets environment variables');
      throw new Error('Google Sheets not configured');
    }

    const doc = new GoogleSpreadsheet(spreadsheetId);
    
    // Use service account authentication
    await doc.useServiceAccountAuth({
      client_email: serviceAccountEmail,
      private_key: privateKey,
    });
    
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0]; // First sheet = PDF Mappings
    const rows = await sheet.getRows();

    const mappings: PdfMapping[] = rows.map((row: GoogleSpreadsheetRow) => ({
      pdf_identifier: row.get('pdf_identifier') as string,
      condition: row.get('condition') as string,
      sub_condition: row.get('sub_condition') as string,
      pdf_name: row.get('pdf_name') as string,
      pdf_url: row.get('pdf_url') as string,
      priority: row.get('priority') as string,
      description: row.get('description') as string,
    }));

    // Update cache
    pdfMappingsCache = mappings;
    cacheTimestamp = Date.now();

    console.log(`Loaded ${mappings.length} PDF mappings from Google Sheets`);
    return mappings;

  } catch (error) {
    console.error('Error loading PDF mappings:', error);
    // Return cache if available, otherwise return empty array
    return pdfMappingsCache || [];
  }
}

/**
 * Find matching PDF from mappings
 */
function findMatchingPdf(mappings: PdfMapping[], pdfIdentifier: string): PdfMapping | null {
  return mappings.find(m => m.pdf_identifier === pdfIdentifier) || null;
}

/**
 * Send email with PDF attachment
 * Uses EmailJS to send the email with the PDF
 */
async function sendEmailWithPdf(
  email: string,
  pdfMapping: PdfMapping,
  quizAnswers: QuizAnswers,
  result: any
): Promise<{ success: boolean; message: string }> {
  const emailjs = await import('@emailjs/browser');

  const templateParams = {
    to_email: email,
    subject: `Your Personalized Health Guide - ${pdfMapping.pdf_name}`,
    customer_name: email.split('@')[0], // Use email prefix as name
    pdf_name: pdfMapping.pdf_name,
    pdf_description: pdfMapping.description,
    priority: pdfMapping.priority,
    condition: pdfMapping.condition,
    // Include quiz summary info
    quiz_condition: quizAnswers.conditions || 'General',
    quiz_summary: result?.summary || '',
    // Add personalized fields
    age_group: quizAnswers.age || 'Not specified',
    gender: quizAnswers.gender || 'Not specified',
  };

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_PDF_TEMPLATE_ID!,
      templateParams,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      }
    );

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
}

/**
 * POST handler for sending PDF
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, quizAnswers, result } = body;

    // Validate required fields
    if (!email || !quizAnswers) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: email and quizAnswers' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get PDF identifier from quiz answers
    const pdfIdentifier = getPdfIdentifier(quizAnswers);
    console.log(`PDF Identifier: ${pdfIdentifier}`);

    // Load PDF mappings from Google Sheets
    const pdfMappings = await loadPdfMappings();

    // Find matching PDF
    const pdfMapping = findMatchingPdf(pdfMappings, pdfIdentifier);

    if (!pdfMapping) {
      console.warn(`No PDF found for identifier: ${pdfIdentifier}`);
      
      // Return success but indicate no specific PDF was found
      // You could send a default PDF here instead
      return NextResponse.json({
        success: false,
        error: `No matching PDF found for: ${pdfIdentifier}`,
        pdfIdentifier,
        suggestion: 'Please ensure all quiz conditions have corresponding entries in Google Sheets',
      });
    }

    console.log(`Found PDF: ${pdfMapping.pdf_name} - ${pdfMapping.pdf_url}`);

    // Send email with PDF
    const emailResult = await sendEmailWithPdf(email, pdfMapping, quizAnswers, result);

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, error: emailResult.message },
        { status: 500 }
      );
    }

    // Log the response (optional - could also save to Google Sheets)
    console.log(`PDF sent: ${pdfMapping.pdf_name} to ${email}`);

    return NextResponse.json({
      success: true,
      message: 'PDF sent successfully',
      pdfIdentifier: pdfMapping.pdf_identifier,
      pdfName: pdfMapping.pdf_name,
      pdfUrl: pdfMapping.pdf_url,
      priority: pdfMapping.priority,
    });

  } catch (error) {
    console.error('Error in /api/send-pdf:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET handler - for testing/health check
 */
export async function GET() {
  try {
    const mappings = await loadPdfMappings();
    return NextResponse.json({
      status: 'ok',
      pdfMappingsCount: mappings.length,
      cached: pdfMappingsCache !== null,
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Failed to load PDF mappings' },
      { status: 500 }
    );
  }
}
