# PDF Selection & Delivery System Configuration

## Overview

This document describes how the Dietrfy quiz system maps user responses to personalized PDFs that are sent via email after quiz completion.

---

## System Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           USER JOURNEY                                       │
└─────────────────────────────────────────────────────────────────────────────┘

1. User completes quiz on website
        │
        ▼
2. Quiz Results page displays (on-screen recommendations)
        │
        ▼
3. User enters email to receive detailed PDF
        │
        ▼
4. Frontend sends: { email, quizAnswers, result }
        │
        ▼
5. Backend API processes request:
   a) Read Google Sheet for PDF mapping
   quiz answers to PDF identifier
   c b) Match) Get PDF URL/attachment from sheet
        │
        ▼
6. Backend sends email with PDF attachment
        │
        ▼
7. User receives personalized PDF via email

┌─────────────────────────────────────────────────────────────────────────────┐
│                           TECHNICAL FLOW                                     │
└─────────────────────────────────────────────────────────────────────────────┘

┌──────────┐     ┌──────────────┐     ┌─────────────┐     ┌──────────────┐
│ Frontend │────▶│  API Route   │────▶│   Google    │────▶│  Email with │
│ (Quiz)   │     │  /api/send   │     │   Sheets    │     │    PDF      │
└──────────┘     └──────────────┘     └─────────────┘     └──────────────┘
                        │                    │
                        │                    ▼
                        │            ┌─────────────┐
                        │            │  PDF Files  │
                        │            │  (Storage)  │
                        │            └─────────────┘
                        ▼
                 ┌──────────────┐
                 │   EmailJS    │
                 │  (Service)   │
                 └──────────────┘
```

---

## Quiz Answer Structure

The quiz collects the following data that determines which PDF to send:

### Base Fields (Always Present)
```typescript
interface QuizAnswers {
  age?: string;           // "18-39" | "40-59" | "60-above"
  gender?: string;        // "male" | "female"
  pregnancy?: string;    // "yes" | "no" (only for females)
  conditions?: string;    // Primary condition selected
}
```

### Condition-Specific Fields
```typescript
// When conditions = "diabetes"
diabetes-status?: string;        // "type1" | "type2" | "gestational" | "prediabetes" | "family-history" | "not-sure"
weight-status-diabetes?: string; // "lose" | "maintain"

// When conditions = "high-blood-pressure"
blood-pressure?: string;              // "pre-hypertension" | "stage-1" | "stage-2" | "not-sure"
blood-pressure-medication?: string;  // "yes" | "no"
blood-pressure-salt?: string;        // "high" | "moderate" | "low"
blood-pressure-weight?: string;      // "yes" | "no"
blood-pressure-conditions?: string[]; // ["diabetes", "kidney-disease", "high-cholesterol"]

// When conditions = "pcos"
pcos-goal?: string;         // "weight-loss" | "fertility" | "prediabetes/insulin" | "symptom-management" | "not-sure"
pcos-weight-status?: string; // "lose" | "maintain" | "gain"
pcos-bmi-status?: string;    // "normal" | "overweight" | "obese" | "not-sure"

// When conditions = "weight-loss"
weight-loss-goal?: string;       // "little" | "moderate" | "significant" | "not-sure"
weight-loss-challenges?: string; // "diet-trouble" | "exercise-consistency" | "motivation-regain" | "never-tried" | "other-medical"

// When conditions = "high-cholesterol"
cholesterol-confirmed?: string;           // "yes" | "no"
cholesterol-related-conditions?: string[]; // ["overweight-obesity", "diabetes", "family-history"]

// When conditions = "none-of-the-above"
general-goal?: string; // "weight-loss" | "general-healthy-eating"

// When conditions = "prefer-not-to-answer"
primary-goal?: string; // "weight-loss" | "weight-gain" | "general-healthy-eating" | "weight-maintenance"
```

---

## PDF Identifier Mapping Logic

### How to Derive the PDF Identifier

```typescript
function getPdfIdentifier(answers: QuizAnswers): string {
  const condition = answers.conditions;

  // Handle each condition type
  switch (condition) {
    case 'diabetes':
      return `diabetes-${answers['diabetes-status']}`;

    case 'high-blood-pressure':
      return `bp-${answers['blood-pressure']}`;

    case 'pcos':
      return `pcos-${answers['pcos-goal']}`;

    case 'weight-loss':
      return `weight-loss-${answers['weight-loss-goal']}`;

    case 'high-cholesterol':
      return `cholesterol-${answers['cholesterol-confirmed']}`;

    case 'none-of-the-above':
      return `general-${answers['general-goal']}`;

    case 'prefer-not-to-answer':
      return `general-${answers['primary-goal']}`;

    default:
      return 'general-healthy';
  }
}
```

---

## Google Sheets Structure

### Sheet 1: PDF Mappings

Create a Google Sheet with these columns (Row 1 = Headers):

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| **pdf_identifier** | **condition** | **sub_condition** | **pdf_name** | **pdf_url** | **priority** | **description** |
| diabetes-type1 | diabetes | type1 | Diabetes Type 1 Guide | https://.../diabetes-type1.pdf | high | Complete guide for Type 1 diabetes management |
| diabetes-type2 | diabetes | type2 | Diabetes Type 2 Guide | https://.../diabetes-type2.pdf | medium | Complete guide for Type 2 diabetes management |
| diabetes-gestational | diabetes | gestational | Gestational Diabetes Guide | https://.../diabetes-gestational.pdf | high | Safe pregnancy nutrition for blood sugar control |
| diabetes-prediabetes | diabetes | prediabetes | Prediabetes Prevention | https://.../diabetes-prediabetes.pdf | medium | Prevent progression with lifestyle changes |
| diabetes-family-history | diabetes | family-history | Diabetes Prevention | https://.../diabetes-family-history.pdf | low | Family history risk reduction guide |
| diabetes-not-sure | diabetes | not-sure | Blood Sugar Health | https://.../diabetes-not-sure.pdf | low | General blood sugar health guide |
| bp-pre-hypertension | high-blood-pressure | pre-hypertension | Pre-Hypertension Guide | https://.../bp-pre.pdf | low | Lifestyle changes for borderline high BP |
| bp-stage-1 | high-blood-pressure | stage-1 | Stage 1 Hypertension | https://.../bp-stage1.pdf | medium | Managing Stage 1 hypertension |
| bp-stage-2 | high-blood-pressure | stage-2 | Stage 2 Hypertension | https://.../bp-stage2.pdf | high | Urgent management of severe hypertension |
| bp-not-sure | high-blood-pressure | not-sure | Blood Pressure Health | https://.../bp-not-sure.pdf | medium | Understanding and managing blood pressure |
| pcos-weight-loss | pcos | weight-loss | PCOS Weight Management | https://.../pcos-weight.pdf | medium | Weight loss strategies with PCOS |
| pcos-fertility | pcos | fertility | PCOS Fertility Guide | https://.../pcos-fertility.pdf | high | Improving fertility with PCOS |
| pcos-prediabetes/insulin | pcos | prediabetes/insulin | PCOS Insulin Resistance | https://.../pcos-insulin.pdf | medium | Managing insulin resistance |
| pcos-symptom-management | pcos | symptom-management | PCOS Symptoms Guide | https://.../pcos-symptoms.pdf | medium | Managing PCOS symptoms naturally |
| pcos-not-sure | pcos | not-sure | PCOS Complete Guide | https://.../pcos-general.pdf | medium | General PCOS information |
| weight-loss-little | weight-loss | little | Gentle Weight Loss | https://.../weight-little.pdf | low | Gradual weight loss for near goal weight |
| weight-loss-moderate | weight-loss | moderate | Effective Weight Loss | https://.../weight-moderate.pdf | medium | Losing 10-20 lbs successfully |
| weight-loss-significant | weight-loss | significant | Significant Weight Loss | https://.../weight-significant.pdf | high | Roadmap for major weight loss |
| weight-loss-not-sure | weight-loss | not-sure | Healthy Weight Journey | https://.../weight-unsure.pdf | low | Getting started with weight management |
| cholesterol-yes | high-cholesterol | yes | High Cholesterol Guide | https://.../cholesterol-high.pdf | medium | Managing high cholesterol through diet |
| cholesterol-no | high-cholesterol | no | Cholesterol Health | https://.../cholesterol-healthy.pdf | low | Maintaining healthy cholesterol levels |
| general-weight-loss | none-of-the-above | weight-loss | Weight Loss Starter | https://.../general-weight-loss.pdf | low | Beginner's weight loss guide |
| general-healthy-eating | none-of-the-above | general-healthy-eating | Healthy Eating Guide | https://.../general-healthy.pdf | low | Balanced nutrition basics |
| general-weight-gain | prefer-not-to-answer | weight-gain | Healthy Weight Gain | https://.../general-gain.pdf | low | Healthy ways to gain weight |
| general-weight-maintenance | prefer-not-to-answer | weight-maintenance | Maintenance Guide | https://.../general-maintain.pdf | low | Maintaining your healthy weight |

### Sheet 2: Quiz Responses (Optional - for tracking)

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| **timestamp** | **email** | **condition** | **sub_condition** | **pdf_sent** | **priority** | **age** | **gender** |
| 2024-01-15 10:30 | john@example.com | diabetes | type2 | diabetes-type2.pdf | medium | 40-59 | male |

---

## API Implementation

### Endpoint: POST /api/send-pdf

**Request:**
```json
{
  "email": "user@example.com",
  "quizAnswers": {
    "age": "40-59",
    "gender": "female",
    "conditions": "diabetes",
    "diabetes-status": "type2",
    "weight-status-diabetes": "lose"
  },
  "result": {
    "title": "Type 2 Diabetes Management",
    "summary": "...",
    "priority": "medium"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "PDF sent successfully",
  "pdfIdentifier": "diabetes-type2",
  "pdfName": "Diabetes Type 2 Guide"
}
```

---

## Required Environment Variables

```env
# Google Sheets API
GOOGLE_SHEETS_PRIVATE_KEY=your-private-key
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id

# Email Service (EmailJS)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-pdf-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
```

---

## Implementation Checklist

- [ ] Create Google Sheet with PDF mappings
- [ ] Upload all PDF files to accessible storage (Google Drive, AWS S3, etc.)
- [ ] Set up Google Sheets API credentials
- [ ] Create API route `/api/send-pdf`
- [ ] Update frontend `QuizResults.tsx` to call new API
- [ ] Test end-to-end flow
- [ ] Add PDF tracking to Google Sheet (optional)

---

## Fallback Behavior

If no matching PDF is found in Google Sheets:
1. Log the unmatched combination for review
2. Send a default "General Health Guide" PDF
3. Notify admin of unmatched pattern

---

## Notes

- PDF URLs in Google Sheets should be publicly accessible or use signed URLs
- Consider caching Google Sheets data to reduce API calls
- The priority field from quiz results can also be stored and used for follow-up actions
