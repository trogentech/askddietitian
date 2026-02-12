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

//  new

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
              { id: 'weight-loss', text: 'Weight loss', value: 'weight-loss' },
              { id: 'none-of-the-above', text: 'None of the above or prefer not to answer', value: 'none-of-the-above' }
           ]
         }
       ]
     },
     {
       id: 'weight-loss-step',
       title: 'Weight Loss Details',
       description: 'Please provide more information about your weight loss goals',
       questions: [
         {
           id: 'weight-loss-goal',
           question: 'How much weight are you looking to lose?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'weight-loss'
           },
           options: [
             { id: 'little', text: 'Just a little (5–10 lbs / 2–5 kg). This might be someone close to goal weight wanting to trim down or improve tone.', value: 'little' },
             { id: 'moderate', text: 'A moderate amount (10–20 lbs / ~5–10 kg).', value: 'moderate' },
             { id: 'significant', text: 'A significant amount (over 20 lbs / over 10 kg).', value: 'significant' },
             { id: 'not-sure', text: 'Not sure, I just want to get healthier/slimmer.', value: 'not-sure' }
           ]
         },
         {
           id: 'weight-loss-challenges',
           question: 'Have you tried losing weight before, and if so, what has been your biggest challenge?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'weight-loss'
           },
           options: [
             { id: 'diet-trouble', text: 'Yes, I have trouble with my diet (I love sweets/carbs or eat too much).', value: 'diet-trouble' },
             { id: 'exercise-consistency', text: 'Yes, I have trouble being consistent with exercise.', value: 'exercise-consistency' },
             { id: 'motivation-regain', text: 'Yes, I lose motivation or regain weight.', value: 'motivation-regain' },
             { id: 'never-tried', text: 'No, I haven\'t seriously tried before.', value: 'never-tried' },
             { id: 'other-medical', text: 'Other (e.g. medical condition that makes it hard).', value: 'other-medical' }
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
       id: 'high-cholesterol-followup',
       title: 'High Cholesterol Details',
       description: 'Please provide more information about your cholesterol',
       questions: [
         {
           id: 'cholesterol-confirmed',
           question: 'Have you been told that you have high cholesterol?',
           type: 'single',
           required: true,
           condition: {
             field: 'conditions',
             value: 'high-cholesterol'
           },
           options: [
             { id: 'yes', text: 'Yes', value: 'yes' },
             { id: 'no', text: 'No', value: 'no' }
           ]
         },
         {
           id: 'cholesterol-related-conditions',
           question: 'Do you have any of the following related conditions?',
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
             { id: 'general-healthy-eating', text: 'General healthy eating guidance', value: 'general-healthy-eating' },
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
   totalSteps: 10
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
    'weight-loss-goal'?: string;
    'weight-loss-challenges'?: string;
    'blood-pressure'?: string;
    'blood-pressure-medication'?: string;
    'blood-pressure-salt'?: string;
    'blood-pressure-weight'?: string;
    'blood-pressure-conditions'?: string[];
    'cholesterol-confirmed'?: string;
    'cholesterol-related-conditions'?: string[];
    'general-goal'?: string;
    'primary-goal'?: string;
 }

export const getFilteredSteps = (answers: QuizAnswers): QuizStep[] => {
    return quizData.steps.filter(step => {
      // Filter out pregnancy step for non-females or under 18
      if (step.id === 'pregnancy') {
        return answers.gender === 'female';
      }

      // Filter out diabetes followup if diabetes not selected
      if (step.id === 'diabetes-followup') {
        return answers.conditions === 'diabetes';
      }

      // Filter out PCOS followup if PCOS not selected
      if (step.id === 'pcos-followup') {
        return answers.conditions === 'pcos';
      }

      // Filter out weight loss step if weight loss not selected
      if (step.id === 'weight-loss-step') {
        return answers.conditions === 'weight-loss';
      }

      // Filter out blood pressure followup if high blood pressure not selected
      if (step.id === 'blood-pressure-followup') {
        return answers.conditions === 'high-blood-pressure';
      }

      // Filter out high cholesterol followup if high cholesterol not selected
      if (step.id === 'high-cholesterol-followup') {
        return answers.conditions === 'high-cholesterol';
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
  };
}

export const analyzeQuizResults = (answers: QuizAnswers): QuizResult => {
  // Import recommendation functions
  const { 
    diabetesRecommendations 
  } = require('./recommendations/diabetes');
  const { 
    bloodPressureRecommendations 
  } = require('./recommendations/bloodPressure');
  const { 
    cholesterolRecommendations 
  } = require('./recommendations/cholesterol');
  const { 
    pcosRecommendations 
  } = require('./recommendations/pcos');
  const { 
    weightLossRecommendations 
  } = require('./recommendations/weightLoss');
  const { 
    matchesConditions, 
    determinePriority 
  } = require('./recommendationRules');

  const condition = answers.conditions;
  
  // Try to find matching recommendation based on condition
  let matchedRule = null;
  
  if (condition === 'diabetes') {
    // Search diabetes recommendations
    matchedRule = diabetesRecommendations.find((rule: any) => 
      matchesConditions(answers, rule.conditions)
    );
  } else if (condition === 'high-blood-pressure') {
    // Search blood pressure recommendations
    matchedRule = bloodPressureRecommendations.find((rule: any) => 
      matchesConditions(answers, rule.conditions)
    );
  } else if (condition === 'high-cholesterol') {
    // Search cholesterol recommendations
    matchedRule = cholesterolRecommendations.find((rule: any) => 
      matchesConditions(answers, rule.conditions)
    );
  } else if (condition === 'pcos') {
    // Search PCOS recommendations
    matchedRule = pcosRecommendations.find((rule: any) => 
      matchesConditions(answers, rule.conditions)
    );
  } else if (condition === 'weight-loss') {
    // Search weight loss recommendations
    matchedRule = weightLossRecommendations.find((rule: any) => 
      matchesConditions(answers, rule.conditions)
    );
  }
  
  // If we found a matching rule, use it
  if (matchedRule) {
    const priority = determinePriority(answers);
    
    return {
      title: getConditionTitle(condition),
      summary: matchedRule.summary,
      recommendations: matchedRule.recommendations,
      priority: priority,
      personalizedFactors: {
        age: answers.age,
        gender: answers.gender,
        pregnancy: answers.pregnancy,
        weightStatus: answers['weight-status-diabetes'],
        pcosGoal: answers['pcos-goal'],
        pcosWeightStatus: answers['pcos-weight-status'],
        pcosBmiStatus: answers['pcos-bmi-status'],
        bloodPressure: answers['blood-pressure'],
        bloodPressureMedication: answers['blood-pressure-medication'],
        bloodPressureSalt: answers['blood-pressure-salt'],
        bloodPressureWeight: answers['blood-pressure-weight'],
        bloodPressureConditions: answers['blood-pressure-conditions']
      }
    };
  }
  
  // Fallback for conditions without specific matches or "none-of-the-above"
  return getFallbackRecommendation(answers);
};

// Helper function to get condition title
function getConditionTitle(condition?: string): string {
  switch (condition) {
    case 'diabetes':
      return 'Diabetes Nutrition Plan';
    case 'high-blood-pressure':
      return 'High Blood Pressure Management';
    case 'high-cholesterol':
      return 'Cholesterol Management Plan';
    case 'pcos':
      return 'PCOS Nutrition Plan';
    case 'weight-loss':
      return 'Weight Loss Plan';
    case 'none-of-the-above':
      return 'General Health & Wellness';
    default:
      return 'Personalized Nutrition Plan';
  }
}

// Fallback recommendation for general health or unmatched scenarios
function getFallbackRecommendation(answers: QuizAnswers): QuizResult {
  const age = answers.age;
  const gender = answers.gender;
  const pregnancy = answers.pregnancy;
  const generalGoal = answers['general-goal'];
  const primaryGoal = answers['primary-goal'];

  let title = 'General Health & Wellness';
  let summary = 'Focus on general healthy eating and lifestyle principles for overall wellness.';
  let recommendations = [
    'Eat a variety of colorful fruits and vegetables',
    'Choose whole grains over refined grains',
    'Include lean proteins and healthy fats',
    'Stay physically active most days of week',
    'Maintain a healthy weight',
    'Get regular health check-ups'
  ];
  let priority: 'high' | 'medium' | 'low' = 'low';

  // Age-based customizations
  if (age === '60-above') {
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
      if ( age !== '60-above') {
        recommendations.push('Ensure adequate iron intake, especially if menstruating');
        recommendations.push('Consider calcium and vitamin D needs for bone health');
      }
    } else if (gender === 'male') {
      if (age !== '60-above') {
        recommendations.push('Ensure adequate zinc and vitamin D intake');
        recommendations.push('Focus on heart-healthy eating patterns');
      }
    }
    
    // General goal customizations
    if (generalGoal === 'weight-loss' || primaryGoal === 'weight-loss') {
      title = 'Weight Loss Guidance';
      summary = 'Focus on sustainable weight loss through balanced nutrition and lifestyle changes.';
      recommendations = [
        'Create a moderate calorie deficit through portion control',
        'Focus on whole, nutrient-dense foods',
        'Include lean proteins to preserve muscle and increase satiety',
        'Eat plenty of vegetables and fruits for volume and nutrients',
        'Stay hydrated and limit sugary beverages',
        'Include regular physical activity',
        'Set realistic goals and track progress'
      ];
      priority = 'medium';
    } else if (generalGoal === 'weight-gain' || primaryGoal === 'weight-gain') {
      title = 'Healthy Weight Gain Guidance';
      summary = 'Focus on healthy weight gain through nutrient-dense, calorie-rich foods.';
      recommendations = [
        'Eat frequent, nutrient-dense meals and snacks',
        'Include healthy fats: nuts, avocados, olive oil',
        'Choose calorie-rich whole foods over empty calories',
        'Include adequate protein for muscle building',
        'Consider smoothies and shakes for extra calories',
        'Include strength training to build muscle mass',
        'Consult with healthcare provider if unintentional weight loss occurs'
      ];
      priority = 'medium';
    } else if (generalGoal === 'weight-maintenance' || primaryGoal === 'weight-maintenance') {
      title = 'Weight Maintenance Guidance';
      summary = 'Focus on maintaining your healthy weight through balanced nutrition and consistent habits.';
      recommendations = [
        'Maintain consistent eating patterns',
        'Balance calorie intake with activity level',
        'Continue healthy eating habits',
        'Monitor weight regularly to catch small changes',
        'Stay physically active',
        'Focus on overall health and wellbeing',
        'Make adjustments as needed based on lifestyle changes'
      ];
      priority = 'low';
    }
  }

  return {
    title,
    summary,
    recommendations,
    priority,
    personalizedFactors: {
      age: answers.age,
      gender: answers.gender,
      pregnancy: answers.pregnancy
    }
  };
}