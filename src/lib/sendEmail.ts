
import emailjs from '@emailjs/browser';
import { QuizResult } from './quiz';

export async function sendNewsletterEmail(email: string): Promise<void> {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    { from_name: email }, // 👈 must match your EmailJS template
    {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    }
  );
}

export async function sendDetailedRecommendations(email: string, result: QuizResult): Promise<void> {
  const detailedRecommendations = generateDetailedRecommendations(result);

  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_QUIZ_TEMPLATE_ID!, // You'll need to create a new template for quiz results
    {
      to_email: email,
      subject: `Your Personalized Health Assessment Results - ${result.title}`,
      recommendations: detailedRecommendations,
      summary: result.summary,
      priority: result.priority,
      risk_factors: result.riskFactors?.join(', ') || 'None identified',
      personalized_factors: formatPersonalizedFactors(result.personalizedFactors)
    },
    {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    }
  );
}

function generateDetailedRecommendations(result: QuizResult): string {
  let detailed = `Based on your health assessment, here are your detailed recommendations:\n\n`;

  detailed += `SUMMARY: ${result.summary}\n\n`;

  detailed += `PRIORITY LEVEL: ${result.priority.toUpperCase()}\n\n`;

  if (result.riskFactors && result.riskFactors.length > 0) {
    detailed += `RISK FACTORS IDENTIFIED:\n`;
    result.riskFactors.forEach(factor => {
      detailed += `• ${factor}\n`;
    });
    detailed += '\n';
  }

  detailed += `DETAILED RECOMMENDATIONS:\n`;
  result.recommendations.forEach((rec, index) => {
    detailed += `${index + 1}. ${rec}\n`;
  });

  detailed += '\nADDITIONAL GUIDANCE:\n';
  detailed += '• Consult with a registered dietitian for personalized meal planning\n';
  detailed += '• Work with your healthcare provider to monitor progress\n';
  detailed += '• Consider lifestyle modifications alongside dietary changes\n';
  detailed += '• Track your progress and adjust as needed\n\n';

  detailed += 'Remember: This assessment provides general guidance. Always consult healthcare professionals for personalized medical advice.\n\n';

  detailed += 'Best regards,\nThe AskDietitian Team';

  return detailed;
}

function formatPersonalizedFactors(factors?: any): string {
  if (!factors) return 'Not specified';

  const formatted: string[] = [];

  if (factors.age) formatted.push(`Age: ${factors.age.replace('-', ' - ').replace('above', '+')}`);
  if (factors.gender) formatted.push(`Gender: ${factors.gender}`);
  if (factors.pregnancy) formatted.push(`Pregnancy: ${factors.pregnancy === 'yes' ? 'Currently pregnant' : 'Not pregnant'}`);
  if (factors.weightStatus) formatted.push(`Weight Status: ${factors.weightStatus === 'yes' ? 'Overweight/Obese' : 'Normal weight'}`);
  if (factors.pcosGoal) formatted.push(`PCOS Goal: ${factors.pcosGoal.replace('-', ' ')}`);
  if (factors.pcosWeightStatus) formatted.push(`PCOS Weight: ${factors.pcosWeightStatus.replace('-', ' ')}`);
  if (factors.bloodPressure) formatted.push(`Blood Pressure: ${factors.bloodPressure.replace('-', ' ')}`);
  if (factors.cholesterolProfile) formatted.push(`Cholesterol Profile: ${factors.cholesterolProfile.replace('-', ' ')}`);
  if (factors.cholesterolConditions) formatted.push(`Cholesterol Conditions: ${factors.cholesterolConditions.join(', ')}`);

  return formatted.join(', ');
}
