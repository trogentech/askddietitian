export interface QuizQuestion {
   id: string;
   question: string;
   type: 'single' | 'multiple';
   options: Array<{
     id: string;
     text: string;
     value: string;
     condition?: {
       field: string;
       value: string;
     };
   }>;
   required?: boolean;
   condition?: {
     field: string;
     value: string | string[];
   } | ((answers: QuizAnswers) => boolean);
 }

export interface QuizStep {
  id: string;
  title: string;
  description?: string;
  questions: QuizQuestion[];
}

export interface QuizData {
  steps: QuizStep[];
  totalSteps: number;
}

export const quizData: QuizData = {
   steps: [
     {
       id: 'general',
       title: 'General Information',
       description: 'Let\'s start with some basic information about you',
       questions: [
         {
           id: 'age',
           question: 'What is your age group?',
           type: 'single',
           required: true,
           options: [
             { id: 'under-18', text: 'Under 18', value: 'under-18' },
             { id: '18-39', text: '18 - 39', value: '18-39' },
             { id: '40-59', text: '40 - 59', value: '40-59' },
             { id: '60-above', text: '60 or above', value: '60-above' }
           ]
         },
         {
           id: 'gender',
           question: 'What is your sex assigned at birth or gender?',
           type: 'single',
           required: true,
           options: [
             { id: 'female', text: 'Female', value: 'female' },
             { id: 'male', text: 'Male', value: 'male' }
           ]
         }
       ]
     },
     {
       id: 'pregnancy',
       title: 'Pregnancy Status',
       description: 'This helps us provide appropriate recommendations',
       questions: [
         {
           id: 'pregnancy',
           question: 'Are you currently pregnant or breastfeeding?',
           type: 'single',
           required: true,
           condition: {
             field: 'gender',
             value: 'female'
           },
           options: [
             { id: 'yes', text: 'Yes', value: 'yes' },
             { id: 'no', text: 'No', value: 'no' }
           ]
         }
       ]
     },
     {
       id: 'health-conditions',
       title: 'Health Conditions',
       description: 'Select any health conditions you have or are concerned about',
       questions: [
         {
           id: 'conditions',
           question: 'Have you been diagnosed with, are currently being treated for, or have been told by a healthcare provider that you are at increased risk for any of the following conditions?',
           type: 'single',
           required: true,
           options: [
             { id: 'diabetes', text: 'Diabetes', value: 'diabetes' },
             { id: 'high-blood-pressure', text: 'High blood pressure (hypertension)', value: 'high-blood-pressure' },
             { id: 'high-cholesterol', text: 'High cholesterol or other lip disorders', value: 'high-cholesterol' },
             { id: 'pcos', text: 'Polycystic ovary syndrome (PCOS)', value: 'pcos' },
             { id: 'cancer', text: 'Cancer (current, previous diagnosis or family history)', value: 'cancer' },
             { id: 'kidney-disease', text: 'Kidney disease', value: 'kidney-disease' },
             { id: 'thyroid-disorders', text: 'Thyroid disorders', value: 'thyroid-disorders' },
             { id: 'heart-disease', text: 'Heart disease or cardiovascular conditions', value: 'heart-disease' },
             { id: 'liver-disease', text: 'Liver disease', value: 'liver-disease' },
             { id: 'eating-disorders', text: 'Eating disorders', value: 'eating-disorders' },
             { id: 'gastrointestinal-conditions', text: 'Gastrointestinal conditions (IBS, IBD, celiac disease, etc.)', value: 'gastrointestinal-conditions' },
             { id: 'food-allergies', text: 'Food allergies or intolerances', value: 'food-allergies' },
             { id: 'metabolic-disorders', text: 'Other metabolic disorders', value: 'metabolic-disorders' },
             { id: 'none-of-the-above', text: 'None of the above', value: 'none-of-the-above' },
             { id: 'prefer-not-to-answer', text: 'Prefer not to answer', value: 'prefer-not-to-answer' }
           ]
         }
       ]
     },
     {
       id: 'diabetes-followup',
       title: 'Diabetes Details',
       description: 'Please provide more information about your diabetes',
       questions: [
         {
           id: 'diabetes-status',
           question: 'Which of the following best describes your situation?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'diabetes'
           },
           options: [
             { id: 'type1', text: 'Type 1 Diabetes (autoimmune, insulin-dependent diabetes)', value: 'type1' },
             { id: 'type2', text: 'Type 2 Diabetes (adult-onset or non-insulin dependent diabetes)', value: 'type2' },
             { id: 'gestational', text: 'gestational diabetes', value: 'gestational', condition: { field: 'gender', value: 'female' } },
             { id: 'prediabetes', text: 'Prediabetes (elevated blood sugar, but not full diabetes)', value: 'prediabetes' },
              { id: 'family-history', text: 'Family history of diabetes (no personal diagnosis)', value: 'family-history' },
             { id: 'not-sure', text: 'Not sure (I haven\'t been diagnosed, but I\'m concerned about blood sugar)', value: 'not-sure' }
           ]
         },
         {
           id: 'weight-status-diabetes',
           question: 'Are you currently overweight or obese?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'diabetes'
           },
           options: [
             { id: 'lose', text: 'Yes', value: 'lose' },
             { id: 'maintain', text: 'No', value: 'maintain' },
           ]
         }
       ]
     },
     {
       id: 'pcos-followup',
       title: 'PCOS Details',
       description: 'Please provide more information about your PCOS',
       questions: [
         {
           id: 'pcos-goal',
           question: 'What is your main health goal related to PCOS?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'pcos'
           },
           options: [
             { id: 'weight-loss', text: 'Weight management: I need to lose weight or manage my weight with PCOS', value: 'weight-loss' },
             { id: 'fertility', text: 'Fertility: I am trying to improve my fertility/trying to conceive', value: 'fertility' },
             {id: "prediabetes/insulin",  text:" Prediabetes/Insulin: I\'m concerned about insulin resistance or prediabetes with PCOS.",value:"prediabetes/insulin" },
             { id: 'symptom-management', text: 'Symptom control: Managing PCOS symptoms (like irregular periods, acne, excessive hair)', value: 'symptom-management' },
             {id: 'not-sure' , text:"Not sure/All of the above", value:"not-sure"}
           ]
         },
         {
           id: 'pcos-weight-status',
           question: 'Are you currently trying to lose, maintain, or gain weight?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'pcos'
           },
           options: [
             { id: 'lose', text: 'Lose weight', value: 'lose' },
             { id: 'maintain', text: 'Maintain current weight', value: 'maintain' },
             { id: 'gain', text: 'Gain weight', value: 'gain' }
           ]
         },
         {
           id: 'pcos-bmi-status',
           question: 'What is your current BMI or weight status?',
           type: 'single',
           required: true,
           condition: {
             field: 'pcos-goal',
             value: 'weight-loss'
           },
           options: [
             { id: 'normal', text: 'Normal weight', value: 'normal' },
             { id: 'overweight', text: 'Overweight (BMI 25-29)', value: 'overweight' },
             { id: 'obese', text: 'Obese (BMI 30 or above)', value: 'obese' },
             { id: 'not-sure', text: 'Not sure', value: 'not-sure' }
           ]
         }
       ]
     },
     {
       id: 'blood-pressure-followup',
       title: 'Blood Pressure Level',
       description: 'Please provide more information about your blood pressure',
       questions: [
         {
           id: 'blood-pressure',
           question: 'How would you describe your blood pressure status?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'high-blood-pressure'
           },
           options: [
             { id: 'pre-hypertension', text: 'Pre-hypertension (borderline high, e.g., systolic 120–139 or diastolic 80–89)', value: 'pre-hypertension' },
             { id: 'stage-1', text: 'Stage 1 hypertension (e.g., systolic ~130–139 or diastolic ~80–89, confirmed high)', value: 'stage-1' },
             { id: 'stage-2', text: 'Stage 2 hypertension (e.g., systolic ≥140 or diastolic ≥90)', value: 'stage-2' },
             { id: 'not-sure', text: 'Not sure, I just know it\'s "high"', value: 'not-sure' }
           ]
         },
         {
           id: 'blood-pressure-medication',
           question: 'Are you currently on blood pressure medication?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'high-blood-pressure'
           },
           options: [
             { id: 'yes', text: 'Yes (on one or more medications)', value: 'yes' },
             { id: 'no', text: 'No (managing without medication)', value: 'no' }
           ]
         },
         {
           id: 'blood-pressure-salt',
           question: 'How would you describe your salt intake or use of salty foods?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'high-blood-pressure'
           },
           options: [
             { id: 'high', text: 'I often eat high-sodium foods or add salt liberally.', value: 'high' },
             { id: 'moderate', text: 'I\'m somewhat careful, but I know I could cut back on salt.', value: 'moderate' },
             { id: 'low', text: 'I already follow a low-sodium diet.', value: 'low' }
           ]
         },
         {
           id: 'blood-pressure-weight',
           question: 'Are you overweight or obese? (BMI or a general sense, e.g., "Has your doctor suggested you lose weight?")',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'high-blood-pressure'
           },
           options: [
             { id: 'yes', text: 'Yes', value: 'yes' },
             { id: 'no', text: 'No', value: 'no' }
           ]
         },
         {
           id: 'blood-pressure-conditions',
           question: 'Do you have any of the following related conditions? (user can select multiple or none)',
           type: 'multiple',
           required: false,
           condition: {
             field: 'conditions',
             value: 'high-blood-pressure'
           },
           options: [
             { id: 'diabetes', text: 'Diabetes', value: 'diabetes' },
             { id: 'kidney-disease', text: 'Kidney disease', value: 'kidney-disease' },
             { id: 'high-cholesterol', text: 'High Cholesterol', value: 'high-cholesterol' },
             { id: 'none', text: 'None of the above', value: 'none' }
           ]
         }
       ]
     },
     {
       id: 'cancer-followup',
       title: 'Cancer Context',
       description: 'Please provide more information about your cancer situation',
       questions: [
         {
           id: 'cancer-context',
           question: 'Which of the following describes you best?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'cancer'
           },
           options: [
             { id: 'current-treatment', text: 'I am currently undergoing cancer treatment. (For any type of cancer; could be chemo, radiation, etc).', value: 'current-treatment' },
             { id: 'completed-treatment', text: 'I have completed cancer treatment (survivor in remission).', value: 'completed-treatment' },
             { id: 'high-risk-family', text: 'I have a high risk or family history of cancer, but no diagnosis myself.', value: 'high-risk-family' },
             { id: 'prevention-interest', text: 'I\'m just generally interested in eating to prevent cancer.', value: 'prevention-interest' }
           ]
         },
         {
           id: 'cancer-treatment-issues',
           question: 'Are you experiencing issues with eating due to treatment side effects?',
           type: 'single',
           required: true,
           condition: {
             field: 'cancer-context',
             value: 'current-treatment'
           },
           options: [
             { id: 'poor-appetite', text: 'Poor appetite/weight loss', value: 'poor-appetite' },
             { id: 'nausea-vomiting', text: 'Nausea or vomiting', value: 'nausea-vomiting' },
             { id: 'sore-mouth', text: 'Sore mouth or throat', value: 'sore-mouth' },
             { id: 'no-major-issues', text: 'No major issues', value: 'no-major-issues' }
           ]
         }
       ]
     },
     {
       id: 'cholesterol-followup',
       title: 'Cholesterol Profile',
       description: 'Please provide more information about your cholesterol',
       questions: [
         {
           id: 'cholesterol-profile',
           question: 'Which of the following have you been told about your cholesterol?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'high-cholesterol'
           },
           options: [
             { id: 'high-ldl', text: 'High LDL (bad cholesterol) or high total cholesterol – (e.g. your doctor said your LDL is high)', value: 'high-ldl' },
             { id: 'low-hdl', text: 'Low HDL (good cholesterol) – (HDL below optimal, which can also be a risk factor)', value: 'low-hdl' },
             { id: 'high-triglycerides', text: 'High triglycerides – (another blood fat that can be risky, often related to diet and weight)', value: 'high-triglycerides' },
             { id: 'multiple-not-sure', text: 'Multiple or not sure – (e.g. "I just know my cholesterol is \'high\', not sure which"; many people with metabolic syndrome have both high triglycerides and low HDL, etc.)', value: 'multiple-not-sure' }
           ]
         },
         {
           id: 'cholesterol-conditions',
           question: 'Do you have any related conditions?',
           type: 'multiple',
           required: false,
           condition: {
             field: 'conditions',
             value: 'high-cholesterol'
           },
           options: [
             { id: 'overweight-obesity', text: 'Overweight/Obesity', value: 'overweight-obesity' },
             { id: 'diabetes', text: 'Diabetes', value: 'diabetes' },
             { id: 'family-history', text: 'Family history of early heart disease', value: 'family-history' },
             { id: 'not-sure', text: 'Not sure', value: 'not-sure' }
           ]
         }
       ]
     },
     {
       id: 'kidney-followup',
       title: 'Kidney Condition Status',
       description: 'Please provide more information about your kidney condition',
       questions: [
         {
           id: 'kidney-condition-status',
           question: 'Which of the following best describes your kidney condition? (select one)',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'kidney-disease'
           },
           options: [
             { id: 'no-known-disease', text: 'No known kidney disease, but I have risk factors (diabetes, high BP, family history)', value: 'no-known-disease' },
             { id: 'ckd-not-dialysis', text: 'Chronic Kidney Disease (CKD), not on dialysis', value: 'ckd-not-dialysis' },
             { id: 'esrd-dialysis', text: 'End-Stage Kidney Disease on Dialysis', value: 'esrd-dialysis' },
             { id: 'kidney-transplant', text: 'I have a Kidney Transplant', value: 'kidney-transplant' },
             { id: 'not-sure', text: 'Not sure (e.g., abnormal labs but no formal diagnosis)', value: 'not-sure' }
           ]
         },
         {
           id: 'kidney-risk-factors',
           question: 'Do you have any of the following risk factors for kidney disease? (select all that apply)',
           type: 'multiple',
           required: false,
           condition: {
             field: 'kidney-condition-status',
             value: 'no-known-disease'
           },
           options: [
             { id: 'diabetes', text: 'Diabetes (Type 1 or Type 2)', value: 'diabetes' },
             { id: 'high-blood-pressure', text: 'High Blood Pressure', value: 'high-blood-pressure' },
             { id: 'heart-disease', text: 'Heart disease (heart failure, coronary disease)', value: 'heart-disease' },
             { id: 'family-history', text: 'Family history of kidney failure (e.g., a parent on dialysis)', value: 'family-history' },
             { id: 'nsaids', text: 'Frequent use of NSAIDs (e.g., ibuprofen, naproxen)', value: 'nsaids' },
             { id: 'kidney-stones', text: 'Recurrent kidney stones', value: 'kidney-stones' },
             { id: 'none', text: 'None of these', value: 'none' }
           ]
         },
         {
           id: 'kidney-ckd-stage',
           question: 'Do you know the stage or severity of your chronic kidney disease?',
           type: 'single',
           required: false,
           condition: {
             field: 'kidney-condition-status',
             value: 'ckd-not-dialysis'
           },
           options: [
             { id: 'ckd-stage-1-2', text: 'CKD Stage 1–2 (Mild)', value: 'ckd-stage-1-2' },
             { id: 'mild-reduced', text: 'Doctor said my kidney function is mildly reduced or just albuminuria.', value: 'mild-reduced' },
             { id: 'ckd-stage-3', text: 'CKD Stage 3 (Moderate)', value: 'ckd-stage-3' },
             { id: 'egfr-30-59', text: 'eGFR ~30–59 ml/min (moderate decrease in kidney function).', value: 'egfr-30-59' }
           ]
         },
         {
           id: 'kidney-dialysis-modality',
           question: 'What type of dialysis are you on?',
           type: 'single',
           required: false,
           condition: {
             field: 'kidney-condition-status',
             value: 'esrd-dialysis'
           },
           options: [
             { id: 'hemodialysis', text: 'Hemodialysis (HD) – in-center or home hemodialysis.', value: 'hemodialysis' },
             { id: 'peritoneal-dialysis', text: 'Peritoneal Dialysis (PD)', value: 'peritoneal-dialysis' },
             { id: 'capd-cycler', text: 'CAPD or nightly cycler at home.', value: 'capd-cycler' },
             { id: 'not-sure', text: 'Not sure.', value: 'not-sure' }
           ]
         },
         {
           id: 'kidney-transplant-status',
           question: 'How long ago was your kidney transplant?',
           type: 'single',
           required: false,
           condition: {
             field: 'kidney-condition-status',
             value: 'kidney-transplant'
           },
           options: [
             { id: 'within-year', text: 'Within the last year', value: 'within-year' },
             { id: '1-5-years', text: '1 - 5 years ago', value: '1-5-years' },
             { id: 'more-than-5', text: 'More than 5 years ago', value: 'more-than-5' },
             { id: 'not-sure', text: 'Not sure', value: 'not-sure' }
           ]
         },
         {
           id: 'kidney-health-maintenance',
           question: 'When was the last time you had your kidney function (e.g., creatine or eGFR) checked with a blood test?',
           type: 'single',
           required: false,
           condition: (answers: QuizAnswers) => {
             // Show if kidney condition is "not-sure"
             if (answers['kidney-condition-status'] === 'not-sure') {
               return true;
             }
             // Show if kidney condition is "no-known-disease" AND any risk factors are selected
             if (answers['kidney-condition-status'] === 'no-known-disease') {
               const riskFactors = answers['kidney-risk-factors'];
               return !!(riskFactors && riskFactors.length > 0 && !riskFactors.includes('none'));
             }
             return false;
           },
           options: [
             { id: 'within-year', text: 'Within the past year', value: 'within-year' },
             { id: '1-3-years', text: '1 - 3 years ago', value: '1-3-years' },
             { id: 'over-3-years', text: 'Over 3 years ago', value: 'over-3-years' },
             { id: 'never', text: 'Never', value: 'never' }
           ]
         },
         {
           id: 'kidney-ckd-management',
           question: 'Which of the following measures are you currently doing for your kidney health? (select all that apply)',
           type: 'multiple',
           required: false,
           condition: {
             field: 'kidney-health-maintenance',
             value: 'never'
           },
           options: [
             { id: 'kidney-friendly-diet', text: 'Following a kidney-friendly diet (e.g. low sodium, moderate protein)', value: 'kidney-friendly-diet' },
             { id: 'limit-protein', text: 'Limiting protein intake (as advised by doctor/dietitian)', value: 'limit-protein' },
             { id: 'avoid-high-potassium', text: 'Avoiding high-potassium foods (bananas, potatoes, etc., due to blood K levels)', value: 'avoid-high-potassium' },
             { id: 'avoid-high-phosphate', text: 'Avoiding high-phosphate foods (cola, processed foods, etc.)', value: 'avoid-high-phosphate' },
             { id: 'taking-medications', text: 'Taking prescribed medications (for BP, diabetes, etc., as directed)', value: 'taking-medications' },
             { id: 'seeing-nephrologist', text: 'Seeing a nephrologist regularly', value: 'seeing-nephrologist' },
             { id: 'none-not-sure', text: 'None / not sure', value: 'none-not-sure' }
           ]
         },
         {
           id: 'kidney-dialysis-diet-compliance',
           question: 'Do you have difficulty with any of the following on your dialysis diet? (select all that apply)',
           type: 'multiple',
           required: false,
           condition: (answers: QuizAnswers) => answers['kidney-health-maintenance'] !== 'never',
           options: [
             { id: 'controlling-fluid', text: 'Controlling fluid intake (finding it hard to stick to fluid limit)', value: 'controlling-fluid' },
             { id: 'eating-enough-protein', text: 'Eating enough protein (low appetite or vegetarian making it hard to get 1.2 g/kg)', value: 'eating-enough-protein' },
             { id: 'limiting-sodium', text: 'Limiting sodium (struggle with avoiding salty foods)', value: 'limiting-sodium' },
             { id: 'limiting-potassium', text: 'Limiting potassium (hard to avoid fruits/veggies high in K)', value: 'limiting-potassium' },
             { id: 'limiting-phosphorus', text: 'Limiting phosphorus (dairy, cola, etc., or remembering binders)', value: 'limiting-phosphorus' },
             { id: 'no-difficulties', text: 'No difficulties', value: 'no-difficulties' }
           ]
         },
         {
           id: 'kidney-symptoms',
           question: 'Are you experiencing any of these symptoms? (select any that apply)',
           type: 'multiple',
           required: false,
           condition: (answers: QuizAnswers) => {
             const ckdManagement = answers['kidney-ckd-management'];
             return !!(ckdManagement && ckdManagement.length > 0 && !ckdManagement.includes('none-not-sure'));
           },
           options: [
             { id: 'fatigue', text: 'Fatigue, low energy', value: 'fatigue' },
             { id: 'swelling', text: 'Swelling in feet/ankles or around eyes (edema)', value: 'swelling' },
             { id: 'urination-changes', text: 'Changes in urination (foamy urine, or very little urine output)', value: 'urination-changes' },
             { id: 'nausea-appetite', text: 'Nausea or loss of appetite', value: 'nausea-appetite' },
             { id: 'itching', text: 'Itching (pruritus)', value: 'itching' },
             { id: 'confusion', text: 'Confusion or difficulty concentrating', value: 'confusion' },
             { id: 'muscle-cramps', text: 'Muscle cramps', value: 'muscle-cramps' },
             { id: 'none-symptoms', text: 'None of these', value: 'none-symptoms' }
           ]
         }
       ]
     },
    //  {
    //    id: 'cancer-followup',
    //    title: 'Cancer Context',
    //    description: 'Please provide more information about your cancer situation',
    //    questions: [
    //      {
    //        id: 'cancer-context',
    //        question: 'Which of the following describes you best?',
    //        type: 'single',
    //        required: true,
    //        condition: {
    //          field: 'conditions',
    //          value: 'cancer'
    //        },
    //        options: [
    //          { id: 'current-treatment', text: 'I am currently undergoing cancer treatment. (For any type of cancer; could be chemo, radiation, etc).', value: 'current-treatment' },
    //          { id: 'completed-treatment', text: 'I have completed cancer treatment (survivor in remission).', value: 'completed-treatment' },
    //          { id: 'high-risk-family', text: 'I have a high risk or family history of cancer, but no diagnosis myself.', value: 'high-risk-family' },
    //          { id: 'prevention-interest', text: 'I\'m just generally interested in eating to prevent cancer.', value: 'prevention-interest' }
    //        ]
    //      },
    //      {
    //        id: 'cancer-treatment-issues',
    //        question: 'Are you experiencing issues with eating due to treatment side effects?',
    //        type: 'single',
    //        required: true,
    //        condition: {
    //          field: 'cancer-context',
    //          value: 'current-treatment'
    //        },
    //        options: [
    //          { id: 'poor-appetite', text: 'Poor appetite/weight loss', value: 'poor-appetite' },
    //          { id: 'nausea-vomiting', text: 'Nausea or vomiting', value: 'nausea-vomiting' },
    //          { id: 'sore-mouth', text: 'Sore mouth or throat', value: 'sore-mouth' },
    //          { id: 'no-major-issues', text: 'No major issues', value: 'no-major-issues' }
    //        ]
    //      }
    //    ]
    //  },
     {
       id: 'general-goals',
       title: 'Health and Wellness Goals',
       description: 'Let\'s understand your primary health and wellness goals',
       questions: [
         {
           id: 'general-goal',
           question: 'What is your primary health and wellness goal at this time? (Please select one)',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'none-of-the-above'
           },
           options: [
             { id: 'weight-loss', text: 'Weight loss', value: 'weight-loss' },
             { id: 'weight-gain', text: 'Weight gain', value: 'weight-gain' },
             { id: 'general-healthy-eating', text: 'General healthy eating guidance', value: 'general-healthy-eating' },
             { id: 'weight-maintenance', text: 'Weight maintenance', value: 'weight-maintenance' }
           ]
         },
         {
           id: 'weight-gain-goal',
           question: 'What best describes your goal for gaining weight?',
           type: 'single',
           required: true,
           condition: {
             field: 'general-goal',
             value: 'weight-gain'
           },
           options: [
             { id: 'underweight-healthier', text: 'I am underweight and want to reach a healthier weight. (Perhaps BMI is low due to genetics or eating issues – needs general weight gain.)', value: 'underweight-healthier' },
             { id: 'lost-due-illness', text: 'I lost weight due to an illness/stress and need to regain it. (Focus on recovery nourishment.)', value: 'lost-due-illness' },
             { id: 'build-muscle', text: 'I want to build muscle and bulk up (for fitness/athletic reasons).', value: 'build-muscle' },
             { id: 'other-few-pounds', text: 'Other/Just want to gain a few pounds. (General case, maybe mild increase.)', value: 'other-few-pounds' }
           ]
         },
         {
           id: 'weight-gain-challenges',
           question: 'What challenges have you faced in gaining weight?',
           type: 'single',
           required: false,
           condition: {
             field: 'general-goal',
             value: 'weight-gain'
           },
           options: [
             { id: 'poor-appetite', text: 'Poor appetite', value: 'poor-appetite' },
             { id: 'get-full-quickly', text: 'Get full quickly', value: 'get-full-quickly' },
             { id: 'very-active-metabolism', text: 'Very active/high metabolism', value: 'very-active-metabolism' },
             { id: 'unsure', text: 'Unsure', value: 'unsure' }
           ]
         },
         {
           id: 'weight-loss-goal',
           question: 'How much weight are you looking to lose?',
           type: 'single',
           required: false,
           condition: {
             field: 'general-goal',
             value: 'weight-loss'
           },
           options: [
             { id: 'little-weight', text: 'Just a little (5–10 lbs / 2–5 kg). (This might be someone close to goal weight wanting to trim down or improve tone.)', value: 'little-weight' },
             { id: 'moderate-weight', text: 'A moderate amount (10–20 lbs / ~5–10 kg).', value: 'moderate-weight' },
             { id: 'significant-weight', text: 'A significant amount (over 20 lbs / over 10 kg).', value: 'significant-weight' },
             { id: 'not-sure-healthier', text: 'Not sure, I just want to get healthier/slimmer.', value: 'not-sure-healthier' }
           ]
         },
         {
           id: 'weight-loss-challenges',
           question: 'Have you tried losing weight before, and if so, what has been your biggest challenge?',
           type: 'single',
           required: false,
           condition: {
             field: 'general-goal',
             value: 'weight-loss'
           },
           options: [
             { id: 'diet-trouble', text: 'Yes, I have trouble with my diet (I love sweets/carbs or eat too much).', value: 'diet-trouble' },
             { id: 'exercise-consistency', text: 'Yes, I have trouble being consistent with exercise.', value: 'exercise-consistency' },
             { id: 'motivation-regain', text: 'Yes, I lose motivation or regain the weight.', value: 'motivation-regain' },
             { id: 'never-tried', text: 'No, I haven\'t seriously tried before.', value: 'never-tried' },
             { id: 'other-medical', text: 'Other (e.g. medical condition that makes it hard).', value: 'other-medical' }
           ]
         }
       ]
     },
     {
       id: 'liver-followup',
       title: 'Liver Condition Details',
       description: 'Please provide more information about your liver condition',
       questions: [
         {
           id: 'liver-condition-type',
           question: 'Which of the following best describes your liver condition or concern? (select one; if multiple apply, choose the primary one)',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'liver-disease'
           },
           options: [
             { id: 'nafld-nash', text: 'Non-alcoholic Fatty Liver (NAFLD/NASH – fat in the liver not due to alcohol)', value: 'nafld-nash' },
             { id: 'chronic-hepatitis-b', text: 'Chronic Hepatitis B (HBV)', value: 'chronic-hepatitis-b' },
             { id: 'chronic-hepatitis-c', text: 'Chronic Hepatitis C (HCV)', value: 'chronic-hepatitis-c' },
             { id: 'cirrhosis', text: 'Cirrhosis (advanced scarring) (any cause)', value: 'cirrhosis' },
             { id: 'alcohol-related', text: 'Alcohol-related Liver Disease (current or past heavy alcohol use)', value: 'alcohol-related' },
             { id: 'other-unsure', text: 'Other or Unsure (e.g., autoimmune hepatitis, PBC/PSC, drug-induced, or unspecified elevated liver enzymes)', value: 'other-unsure' }
           ]
         },
         {
           id: 'liver-metabolic-factors',
           question: 'Do you have any of the following conditions related to metabolic health? (select all that apply)',
           type: 'multiple',
           required: false,
           condition: {
             field: 'liver-condition-type',
             value: 'nafld-nash'
           },
           options: [
             { id: 'overweight-obesity', text: 'Overweight/Obesity (BMI ≥25)', value: 'overweight-obesity' },
             { id: 'type2-diabetes-prediabetes', text: 'Type 2 Diabetes or Prediabetes', value: 'type2-diabetes-prediabetes' },
             { id: 'high-cholesterol-triglycerides', text: 'High cholesterol or triglycerides (dyslipidemia)', value: 'high-cholesterol-triglycerides' },
             { id: 'pcos', text: 'Polycystic Ovary Syndrome (PCOS) (in females)', value: 'pcos' },
             { id: 'hypertension', text: 'Hypertension (high blood pressure)', value: 'hypertension' },
             { id: 'none', text: 'None of the above', value: 'none' }
           ]
         }
       ]
     },
     {
       id: 'goals',
       title: 'Health Goals',
       description: 'Let\'s understand your primary health goals',
       questions: [
         {
           id: 'primary-goal',
           question: 'What is your primary health goal?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'prefer-not-to-answer'
           },
           options: [
             { id: 'weight-loss', text: 'Weight loss', value: 'weight-loss' },
             { id: 'weight-gain', text: 'Weight gain', value: 'weight-gain' },
             { id: 'general-healthy-eating', text: 'General healthy eating guidance', value: 'general-healthy-eating' },
             { id: 'weight-maintenance', text: 'Weight maintenance', value: 'weight-maintenance' }
           ]
         }
       ]
     }
     ],
     totalSteps: 9
 };

export interface QuizAnswers {
    [key: string]: string | string[] | undefined;
    age?: string;
    gender?: string;
    pregnancy?: string;
    conditions?: string;
    'diabetes-status'?: string;
    'weight-status-diabetes'?: string;
    'pcos-goal'?: string;
    'pcos-weight-status'?: string;
    'pcos-bmi-status'?: string;
    'gestational-diabetes-status'?: string;
    'primary-goal'?: string;
    'general-goal'?: string;
    'blood-pressure'?: string;
    'blood-pressure-medication'?: string;
    'blood-pressure-salt'?: string;
    'blood-pressure-weight'?: string;
    'blood-pressure-conditions'?: string[];
    'cholesterol-profile'?: string;
    'cholesterol-conditions'?: string[];
    'cancer-context'?: string;
    'cancer-treatment-issues'?: string;
    'kidney-condition-status'?: string;
    'kidney-risk-factors'?: string[];
    'kidney-ckd-stage'?: string;
    'kidney-dialysis-modality'?: string;
    'kidney-transplant-status'?: string;
    'kidney-health-maintenance'?: string;
    'kidney-ckd-management'?: string[];
    'kidney-dialysis-diet-compliance'?: string[];
    'kidney-symptoms'?: string[];
    'liver-condition-type'?: string;
    'liver-metabolic-factors'?: string[];
    'weight-gain-goal'?: string;
    'weight-gain-challenges'?: string;
    'weight-loss-goal'?: string;
    'weight-loss-challenges'?: string;
 }

export const getFilteredSteps = (answers: QuizAnswers): QuizStep[] => {
     return quizData.steps.filter(step => {
       // Filter out pregnancy step for non-females or under 18
       if (step.id === 'pregnancy') {
         return answers.gender === 'female' && answers.age !== 'under-18';
       }

       // Filter out diabetes followup if diabetes not selected
       if (step.id === 'diabetes-followup') {
         return answers.conditions === 'diabetes';
       }

       // Filter out PCOS followup if PCOS not selected
       if (step.id === 'pcos-followup') {
         return answers.conditions === 'pcos';
       }

       // Filter out blood pressure followup if high blood pressure not selected
       if (step.id === 'blood-pressure-followup') {
         return answers.conditions === 'high-blood-pressure';
       }

       // Filter out kidney followup if kidney disease not selected
       if (step.id === 'kidney-followup') {
         return answers.conditions === 'kidney-disease';
       }

       // Filter out cancer followup if cancer not selected
       if (step.id === 'cancer-followup') {
         return answers.conditions === 'cancer';
       }

       // Filter out cholesterol followup if high cholesterol not selected
       if (step.id === 'cholesterol-followup') {
         return answers.conditions === 'high-cholesterol';
       }

       // Filter out liver followup if liver disease not selected
       if (step.id === 'liver-followup') {
         return answers.conditions === 'liver-disease';
       }

       // Filter out general goals if "none of the above" not selected
       if (step.id === 'general-goals') {
         return answers.conditions === 'none-of-the-above';
       }

       // Filter out goals if "prefer not to answer" not selected
       if (step.id === 'goals') {
         return answers.conditions === 'prefer-not-to-answer';
       }

       return true;
     });
   };

export const getStepById = (stepId: string): QuizStep | undefined => {
  return quizData.steps.find(step => step.id === stepId);
};

export const getNextStep = (currentStepId: string, answers: QuizAnswers): string | null => {
  const filteredSteps = getFilteredSteps(answers);
  const currentIndex = filteredSteps.findIndex(step => step.id === currentStepId);
  if (currentIndex < filteredSteps.length - 1) {
    return filteredSteps[currentIndex + 1].id;
  }
  return null;
};

export const getPreviousStep = (currentStepId: string, answers: QuizAnswers): string | null => {
   const filteredSteps = getFilteredSteps(answers);
   const currentIndex = filteredSteps.findIndex(step => step.id === currentStepId);
   if (currentIndex > 0) {
     return filteredSteps[currentIndex - 1].id;
   }
   return null;
};

export interface QuizResult {
  title: string;
  summary: string;
  recommendations: string[];
  priority: 'high' | 'medium' | 'low';
  diabetesType?: 'prediabetes' | 'type1' | 'type2' | 'gestational' | 'family-history' | 'not-sure';
  bloodPressure?: 'pre-hypertension' | 'stage-1' | 'stage-2' | 'not-sure';
  riskFactors?: string[];
  personalizedFactors?: {
    age?: string;
    gender?: string;
    pregnancy?: string;
    weightStatus?: string;
    pcosGoal?: string;
    pcosWeightStatus?: string;
    pcosBmiStatus?: string;
    bloodPressure?: string;
    bloodPressureMedication?: string;
    bloodPressureSalt?: string;
    bloodPressureWeight?: string;
    bloodPressureConditions?: string[];
    cholesterolProfile?: string;
    cholesterolConditions?: string[];
    cancerContext?: string;
    cancerTreatmentIssues?: string;
  };
}

interface RecommendationRule {
  conditions: {
    age?: string;
    gender?: string;
    pregnancy?: string;
    diabetesStatus?: string;
    weightStatus?: string;
    pcosGoal?: string;
    pcosWeightStatus?: string;
    pcosBmiStatus?: string;
    gestationalDiabetesStatus?: string;
    bloodPressure?: string;
    bloodPressureMedication?: string;
    bloodPressureSalt?: string;
    bloodPressureWeight?: string;
    bloodPressureConditions?: string[];
    cholesterolProfile?: string;
    cholesterolConditions?: string[];
    cancerContext?: string;
    cancerTreatmentIssues?: string;
    conditions?: string;
  };
  result: {
    diabetesType: 'prediabetes' | 'type1' | 'type2' | 'gestational' | 'family-history' | 'not-sure';
    title: string;
    summary: string;
    recommendations: string[];
    priority: 'high' | 'medium' | 'low';
    riskFactors?: string[];
  };
}

const recommendationRules: RecommendationRule[] = [
  // Type 2 Diabetes rules
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'type2',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'type2',
      title: 'Type 2 Diabetes Management with Weight Loss Focus',
      summary: 'Weight management is crucial in type 2 diabetes. Since you are overweight/obese, recommendations will strongly emphasize weight loss as even a 5–7% weight reduction greatly improves blood sugar control.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Monitor carbohydrate intake and choose low glycemic index foods',
        'Include regular physical activity (aim for 150 minutes/week)',
        'Work with healthcare provider to adjust diabetes medications as weight changes',
        'Track blood sugar regularly to understand food impacts',
        'Consider working with a registered dietitian for personalized meal planning'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'type 2 diabetes']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'type2',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'type2',
      title: 'Type 2 Diabetes Management with Weight Maintenance',
      summary: 'Since you are not overweight/obese, the focus shifts to healthy eating and glucose control without a weight-loss component.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity for blood sugar control',
        'Monitor blood sugar levels regularly',
        'Stay hydrated and maintain consistent meal timing',
        'Work with healthcare provider for optimal medication management'
      ],
      priority: 'high',
      riskFactors: ['type 2 diabetes']
    }
  },
  // Type 1 Diabetes rules
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'type1',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'type1',
      title: 'Type 1 Diabetes Management with Weight Loss Focus',
      summary: 'Weight management is important in type 1 diabetes. Since you are overweight/obese, recommendations will emphasize weight loss while maintaining tight blood sugar control.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Count carbohydrates carefully for insulin dosing',
        'Include regular physical activity (aim for 150 minutes/week)',
        'Work closely with healthcare provider to adjust insulin as weight changes',
        'Monitor blood sugar frequently, especially around exercise',
        'Consider working with a registered dietitian experienced in diabetes'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'type 1 diabetes']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'type1',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'type1',
      title: 'Type 1 Diabetes Management with Weight Maintenance',
      summary: 'Since you are not overweight/obese, the focus shifts to healthy eating and glucose control without a weight-loss component.',
      recommendations: [
        'Focus on balanced meals with consistent carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity for blood sugar control',
        'Monitor blood sugar levels regularly and adjust insulin accordingly',
        'Stay hydrated and maintain consistent meal timing',
        'Work with healthcare provider for optimal insulin management'
      ],
      priority: 'high',
      riskFactors: ['type 1 diabetes']
    }
  },
  // Gestational Diabetes
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'gestational',
      gender: 'female'
    },
    result: {
      diabetesType: 'gestational',
      title: 'Gestational Diabetes Management',
      summary: 'Focus on blood sugar control during pregnancy while ensuring adequate nutrition for maternal and fetal health.',
      recommendations: [
        'Monitor blood sugar levels frequently (fasting and post-meal)',
        'Distribute carbohydrates evenly throughout the day',
        'Include protein with each meal to stabilize blood sugar',
        'Choose low glycemic index foods when possible',
        'Stay physically active with pregnancy-appropriate exercise',
        'Work closely with healthcare provider and possibly a dietitian',
        'Note: If the user is a female and indicates in demographics that she is pregnant or planning pregnancy, an additional question about gestational diabetes status might be inserted, since dietary recommendations would need to ensure adequate nutrition for pregnancy while controlling blood sugar.'
      ],
      priority: 'high',
      riskFactors: ['gestational diabetes', 'pregnancy']
    }
  },
  // Prediabetes rules - Under 18
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: 'under-18',
      gender: 'female',
      pregnancy: 'yes',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Young Females During Pregnancy with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes during pregnancy. Since you are overweight/obese, recommendations will strongly emphasize weight loss while ensuring adequate nutrition for pregnancy.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity appropriate for pregnancy',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Ensure adequate folic acid and prenatal vitamin intake',
        'Work with healthcare provider for pregnancy and prediabetes management'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes', 'pregnancy', 'under 18']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: 'under-18',
      gender: 'female',
      pregnancy: 'yes',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Young Females During Pregnancy',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control during pregnancy without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity appropriate for pregnancy',
        'Monitor blood sugar levels regularly',
        'Ensure adequate nutrition for fetal development',
        'Work with healthcare provider for pregnancy monitoring'
      ],
      priority: 'high',
      riskFactors: ['prediabetes', 'pregnancy', 'under 18']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: 'under-18',
      gender: 'female',
      pregnancy: 'no',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Young Females with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes. Since you are overweight/obese, recommendations will strongly emphasize weight loss.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity (aim for 150 minutes/week)',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Consider Mediterranean or DASH diet patterns',
        'Work with healthcare provider for regular monitoring'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes', 'under 18']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: 'under-18',
      gender: 'female',
      pregnancy: 'no',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Young Females',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity for blood sugar control',
        'Monitor blood sugar levels regularly',
        'Stay hydrated and maintain consistent meal timing',
        'Work with healthcare provider for regular screening'
      ],
      priority: 'medium',
      riskFactors: ['prediabetes', 'under 18']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: 'under-18',
      gender: 'male',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Young Males with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes. Since you are overweight/obese, recommendations will strongly emphasize weight loss.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity (aim for 150 minutes/week)',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Consider Mediterranean or DASH diet patterns',
        'Work with healthcare provider for regular monitoring'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes', 'under 18']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: 'under-18',
      gender: 'male',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Young Males',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity for blood sugar control',
        'Monitor blood sugar levels regularly',
        'Stay hydrated and maintain consistent meal timing',
        'Work with healthcare provider for regular screening'
      ],
      priority: 'medium',
      riskFactors: ['prediabetes', 'under 18']
    }
  },
  // Prediabetes rules - 18-39
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '18-39',
      gender: 'female',
      pregnancy: 'yes',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Adult Females During Pregnancy with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes during pregnancy. Since you are overweight/obese, recommendations will strongly emphasize weight loss while ensuring adequate nutrition for pregnancy.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity appropriate for pregnancy',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Ensure adequate folic acid and prenatal vitamin intake',
        'Work with healthcare provider for pregnancy and prediabetes management'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes', 'pregnancy']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '18-39',
      gender: 'female',
      pregnancy: 'yes',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Adult Females During Pregnancy',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control during pregnancy without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity appropriate for pregnancy',
        'Monitor blood sugar levels regularly',
        'Ensure adequate nutrition for fetal development',
        'Work with healthcare provider for pregnancy monitoring'
      ],
      priority: 'high',
      riskFactors: ['prediabetes', 'pregnancy']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '18-39',
      gender: 'female',
      pregnancy: 'no',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Adult Females with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes. Since you are overweight/obese, recommendations will strongly emphasize weight loss.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity (aim for 150 minutes/week)',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Consider Mediterranean or DASH diet patterns',
        'Work with healthcare provider for regular monitoring'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '18-39',
      gender: 'female',
      pregnancy: 'no',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Adult Females',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity for blood sugar control',
        'Monitor blood sugar levels regularly',
        'Stay hydrated and maintain consistent meal timing',
        'Work with healthcare provider for regular screening'
      ],
      priority: 'medium',
      riskFactors: ['prediabetes']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '18-39',
      gender: 'male',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Adult Males with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes. Since you are overweight/obese, recommendations will strongly emphasize weight loss.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity (aim for 150 minutes/week)',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Consider Mediterranean or DASH diet patterns',
        'Work with healthcare provider for regular monitoring'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '18-39',
      gender: 'male',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Adult Males',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity for blood sugar control',
        'Monitor blood sugar levels regularly',
        'Stay hydrated and maintain consistent meal timing',
        'Work with healthcare provider for regular screening'
      ],
      priority: 'medium',
      riskFactors: ['prediabetes']
    }
  },
  // Prediabetes rules - 40-59
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '40-59',
      gender: 'female',
      pregnancy: 'yes',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Middle-Aged Females During Pregnancy with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes during pregnancy. Since you are overweight/obese, recommendations will strongly emphasize weight loss while ensuring adequate nutrition for pregnancy.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity appropriate for pregnancy',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Ensure adequate folic acid and prenatal vitamin intake',
        'Work with healthcare provider for pregnancy and prediabetes management'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes', 'pregnancy']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '40-59',
      gender: 'female',
      pregnancy: 'yes',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Middle-Aged Females During Pregnancy',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control during pregnancy without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity appropriate for pregnancy',
        'Monitor blood sugar levels regularly',
        'Ensure adequate nutrition for fetal development',
        'Work with healthcare provider for pregnancy monitoring'
      ],
      priority: 'high',
      riskFactors: ['prediabetes', 'pregnancy']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '40-59',
      gender: 'female',
      pregnancy: 'no',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Middle-Aged Females with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes. Since you are overweight/obese, recommendations will strongly emphasize weight loss.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity (aim for 150 minutes/week)',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Consider Mediterranean or DASH diet patterns',
        'Work with healthcare provider for regular monitoring'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '40-59',
      gender: 'female',
      pregnancy: 'no',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Middle-Aged Females',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity for blood sugar control',
        'Monitor blood sugar levels regularly',
        'Stay hydrated and maintain consistent meal timing',
        'Work with healthcare provider for regular screening'
      ],
      priority: 'medium',
      riskFactors: ['prediabetes']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '40-59',
      gender: 'male',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Middle-Aged Males with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes. Since you are overweight/obese, recommendations will strongly emphasize weight loss.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity (aim for 150 minutes/week)',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Consider Mediterranean or DASH diet patterns',
        'Work with healthcare provider for regular monitoring'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '40-59',
      gender: 'male',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Middle-Aged Males',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity for blood sugar control',
        'Monitor blood sugar levels regularly',
        'Stay hydrated and maintain consistent meal timing',
        'Work with healthcare provider for regular screening'
      ],
      priority: 'medium',
      riskFactors: ['prediabetes']
    }
  },
  // Prediabetes rules - 60 or above
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '60-above',
      gender: 'female',
      pregnancy: 'yes',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Senior Females During Pregnancy with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes during pregnancy. Since you are overweight/obese, recommendations will strongly emphasize weight loss while ensuring adequate nutrition for pregnancy.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity appropriate for pregnancy',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Ensure adequate folic acid and prenatal vitamin intake',
        'Work with healthcare provider for pregnancy and prediabetes management'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes', 'pregnancy', 'senior']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '60-above',
      gender: 'female',
      pregnancy: 'yes',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Senior Females During Pregnancy',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control during pregnancy without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity appropriate for pregnancy',
        'Monitor blood sugar levels regularly',
        'Ensure adequate nutrition for fetal development',
        'Work with healthcare provider for pregnancy monitoring'
      ],
      priority: 'high',
      riskFactors: ['prediabetes', 'pregnancy', 'senior']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '60-above',
      gender: 'female',
      pregnancy: 'no',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Senior Females with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes. Since you are overweight/obese, recommendations will strongly emphasize weight loss.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity (aim for 150 minutes/week)',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Consider Mediterranean or DASH diet patterns',
        'Work with healthcare provider for regular monitoring'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes', 'senior']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '60-above',
      gender: 'female',
      pregnancy: 'no',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Senior Females',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity for blood sugar control',
        'Monitor blood sugar levels regularly',
        'Stay hydrated and maintain consistent meal timing',
        'Work with healthcare provider for regular screening'
      ],
      priority: 'medium',
      riskFactors: ['prediabetes', 'senior']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '60-above',
      gender: 'male',
      weightStatus: 'lose'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Senior Males with Weight Loss Focus',
      summary: 'Weight management is crucial in prediabetes. Since you are overweight/obese, recommendations will strongly emphasize weight loss.',
      recommendations: [
        'Focus on gradual weight loss through balanced calorie reduction',
        'Choose low glycemic index foods and monitor carbohydrate intake',
        'Include regular physical activity (aim for 150 minutes/week)',
        'Track blood sugar regularly to prevent progression to diabetes',
        'Consider Mediterranean or DASH diet patterns',
        'Work with healthcare provider for regular monitoring'
      ],
      priority: 'high',
      riskFactors: ['overweight/obese', 'prediabetes', 'senior']
    }
  },
  {
    conditions: {
      conditions: 'diabetes',
      diabetesStatus: 'prediabetes',
      age: '60-above',
      gender: 'male',
      weightStatus: 'maintain'
    },
    result: {
      diabetesType: 'prediabetes',
      title: 'Prediabetes Management for Senior Males',
      summary: 'Since you are not overweight/obese, focus on healthy eating and glucose control without weight loss.',
      recommendations: [
        'Focus on balanced meals with appropriate carbohydrate portions',
        'Choose whole grains, lean proteins, and healthy fats',
        'Maintain regular physical activity for blood sugar control',
        'Monitor blood sugar levels regularly',
        'Stay hydrated and maintain consistent meal timing',
        'Work with healthcare provider for regular screening'
      ],
      priority: 'medium',
      riskFactors: ['prediabetes', 'senior']
    }
  }
]

export const analyzeQuizResults = (answers: QuizAnswers): QuizResult => {
     const conditions = answers.conditions;
     const age = answers.age;
     const gender = answers.gender;
     const pregnancy = answers.pregnancy;
     const diabetesStatus = answers['diabetes-status'];
     const weightStatus = answers['weight-status-diabetes'];
     const pcosGoal = answers['pcos-goal'];
     const pcosBmiStatus = answers['pcos-bmi-status'];
     const bloodPressure = answers['blood-pressure'];
     const bloodPressureMedication = answers['blood-pressure-medication'];
     const bloodPressureSalt = answers['blood-pressure-salt'];
     const bloodPressureWeight = answers['blood-pressure-weight'];
     const bloodPressureConditions = answers['blood-pressure-conditions'];
     const cholesterolProfile = answers['cholesterol-profile'];
     const cholesterolConditions = answers['cholesterol-conditions'];
     const cancerContext = answers['cancer-context'];
     const cancerTreatmentIssues = answers['cancer-treatment-issues'];

     // Find matching rule
     for (const rule of recommendationRules) {
       const ruleConditions = rule.conditions;
       let matches = true;

       // Check each condition
       if (ruleConditions.conditions && ruleConditions.conditions !== conditions) matches = false;
       if (ruleConditions.age && ruleConditions.age !== age) matches = false;
       if (ruleConditions.gender && ruleConditions.gender !== gender) matches = false;
       if (ruleConditions.pregnancy && ruleConditions.pregnancy !== pregnancy) matches = false;
       if (ruleConditions.diabetesStatus && ruleConditions.diabetesStatus !== diabetesStatus) matches = false;
       if (ruleConditions.weightStatus && ruleConditions.weightStatus !== weightStatus) matches = false;
       if (ruleConditions.pcosGoal && ruleConditions.pcosGoal !== pcosGoal) matches = false;
       if (ruleConditions.pcosBmiStatus && ruleConditions.pcosBmiStatus !== pcosBmiStatus) matches = false;
       if (ruleConditions.bloodPressure && ruleConditions.bloodPressure !== bloodPressure) matches = false;
       if (ruleConditions.bloodPressureMedication && ruleConditions.bloodPressureMedication !== bloodPressureMedication) matches = false;
       if (ruleConditions.bloodPressureSalt && ruleConditions.bloodPressureSalt !== bloodPressureSalt) matches = false;
       if (ruleConditions.bloodPressureWeight && ruleConditions.bloodPressureWeight !== bloodPressureWeight) matches = false;
       if (ruleConditions.bloodPressureConditions && JSON.stringify(ruleConditions.bloodPressureConditions.sort()) !== JSON.stringify((bloodPressureConditions || []).sort())) matches = false;
       if (ruleConditions.cholesterolProfile && ruleConditions.cholesterolProfile !== cholesterolProfile) matches = false;
       if (ruleConditions.cholesterolConditions && JSON.stringify(ruleConditions.cholesterolConditions.sort()) !== JSON.stringify((cholesterolConditions || []).sort())) matches = false;
       if (ruleConditions.cancerContext && ruleConditions.cancerContext !== cancerContext) matches = false;
       if (ruleConditions.cancerTreatmentIssues && ruleConditions.cancerTreatmentIssues !== cancerTreatmentIssues) matches = false;

       if (matches) {
         return {
           ...rule.result,
           personalizedFactors: {
             age: age,
             gender: gender,
             pregnancy: pregnancy,
             weightStatus: weightStatus,
             pcosGoal: pcosGoal,
             pcosBmiStatus: pcosBmiStatus,
             bloodPressure: bloodPressure,
             bloodPressureMedication: bloodPressureMedication,
             bloodPressureSalt: bloodPressureSalt,
             bloodPressureWeight: bloodPressureWeight,
             bloodPressureConditions: bloodPressureConditions,
             cholesterolProfile: cholesterolProfile,
             cholesterolConditions: cholesterolConditions,
             cancerContext: cancerContext,
             cancerTreatmentIssues: cancerTreatmentIssues
           }
         };
       }
     }

   // Default fallback with age and gender-based customizations
   let title = 'General Health & Wellness';
   let summary = 'Focus on general healthy eating and lifestyle principles for overall wellness.';
   let recommendations = [
     'Eat a variety of colorful fruits and vegetables',
     'Choose whole grains over refined grains',
     'Include lean proteins and healthy fats',
     'Stay physically active most days of the week',
     'Maintain a healthy weight',
     'Get regular health check-ups'
   ];
   let priority: 'high' | 'medium' | 'low' = 'low';

   // Age-based customizations
   if (age === 'under-18') {
     title = 'Youth Health & Wellness';
     summary = 'Focus on nutritional needs for growth and development. Pediatric guidelines should be followed for optimal health.';
     recommendations = [
       'Follow pediatric nutritional guidelines for growth',
       'Ensure adequate intake of calcium and vitamin D for bone development',
       'Include iron-rich foods for cognitive development',
       'Limit sugary drinks and processed foods',
       'Encourage healthy eating habits from a young age',
       'Stay physically active with age-appropriate activities'
     ];
     priority = 'medium';
   } else if (age === '60-above') {
     title = 'Senior Health & Wellness';
     summary = 'Older adults have different nutritional needs. Focus on maintaining health and preventing age-related conditions.';
     recommendations = [
       'Ensure adequate calcium and vitamin D intake for bone health',
       'Monitor for nutritional deficiencies common in older adults',
       'Stay hydrated and maintain regular meal patterns',
       'Include omega-3 rich foods for heart and brain health',
       'Consider protein needs for muscle maintenance',
       'Regular health screenings and consultations with healthcare providers'
     ];
     priority = 'medium';
   }

   // Pregnancy-based customizations
   if (pregnancy === 'yes') {
     title = 'Pregnancy & Breastfeeding Nutrition';
     summary = 'Focus on balanced nutrition for maternal and fetal health. Weight loss interventions are not recommended during pregnancy.';
     recommendations = [
       'Focus on appropriate weight gain for pregnancy stage',
       'Ensure adequate folic acid and prenatal vitamin intake',
       'Include sufficient protein for fetal development',
       'Stay hydrated and monitor for gestational diabetes',
       'Include calcium-rich foods for bone health',
       'Avoid certain foods that may pose risks during pregnancy',
       'Consult with healthcare provider for personalized prenatal nutrition plan'
     ];
     priority = 'high';
   } else {
     // Gender-based customizations (only if not pregnant)
     if (gender === 'female') {
       if (age !== 'under-18' && age !== '60-above') {
         // Adult females
         recommendations.push('Ensure adequate iron intake, especially if menstruating');
         recommendations.push('Consider calcium and vitamin D needs for bone health');
         recommendations.push('Monitor for conditions like PCOS if applicable');
       }
     } else if (gender === 'male') {
       if (age !== 'under-18' && age !== '60-above') {
         // Adult males
         recommendations.push('Ensure adequate zinc and vitamin D intake');
         recommendations.push('Monitor prostate health with age');
         recommendations.push('Focus on heart-healthy eating patterns');
       }
     }
   }

   return {
     diabetesType: 'not-sure',
     title,
     summary,
     recommendations,
     priority,
     personalizedFactors: {
       age: age,
       gender: gender,
       pregnancy: pregnancy
     }
   };
};