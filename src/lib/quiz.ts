export interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple';
  options: Array<{
    id: string;
    text: string;
    value: string;
  }>;
  required?: boolean;
  condition?: {
    field: string;
    value: string;
  };
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
          question: 'Which health conditions apply to you? (Select all that apply)',
          type: 'multiple',
          required: false,
          options: [
            { id: 'diabetes', text: 'Diabetes', value: 'diabetes' },
            { id: 'pcos', text: 'Polycystic ovary syndrome', value: 'pcos' },
            { id: 'high-bp', text: 'High Blood Pressure', value: 'high-bp' },
            { id: 'thyroid-disorders', text: 'Thyroid Disorders', value: 'thyroid-disorders' },
{ id: 'heart-disease', text: 'Heart disease or cardiovascular conditions', value: 'heart-disease' },

 { id: 'eating-disorders', text: 'Eating Disorders', value: 'eating-disorders' },
  { id: 'gastrointesinal-conditions', text: 'Gastrointesinal conditions (IBS, IBD, celiac disease, ect.)', value: 'gastrointesinal-conditions' },
  { id: 'food-allergies', text: 'Food allergies or intolerances', value: 'food-allergies' },

{ id: 'metabolic-disorders', text: 'Other metabolic disorders', value: 'metabolic-disorders' },


            { id: 'high-cholesterol', text: 'High Cholesterol', value: 'high-cholesterol' },
            { id: 'cancer', text: 'Cancer (current, previous diagnosis or family history)', value: 'cancer' },
            { id: 'kidney-disease', text: 'Kidney Disease', value: 'kidney-disease' },
            { id: 'liver-disease', text: 'Liver Disease', value: 'liver-disease' },
            { id: 'none-of-the-above', text: 'None of the above', value: 'none-of-the-above' },
            { id: 'prefer-not-to-answer', text: 'Prefer not to answer', value: 'prefer-not-to-answer' }
          ]
        }
      ]
    },
    {
      id: 'diabetes-status',
      title: 'Diabetes Status',
      description: 'Help us understand your diabetes situation for personalized recommendations',
      questions: [
        {
          id: 'diabetes-status',
          question: 'Which of the following best describes your situation?',
          type: 'single',
          required: true,
          options: [
            { id: 'prediabetes', text: 'Prediabetes (elevated blood sugar, but not full diabetes)', value: 'prediabetes' },
            { id: 'type-2-diabetes', text: 'Type 2 Diabetes (adult-onset or non-insulin dependent diabetes)', value: 'type-2-diabetes' },
            { id: 'type-1-diabetes', text: 'Type 1 Diabetes (autoimmune, insulin-dependent diabetes)', value: 'type-1-diabetes' },
            { id: 'family-history', text: 'Family history of diabetes, but no diagnosis myself', value: 'family-history' },
            { id: 'not-sure', text: 'Not sure (I haven\'t been diagnosed, but I\'m concerned about blood sugar)', value: 'not-sure' }
          ]
        }
      ]
    },
    {
      id: 'weight-status-diabetes',
      title: 'Weight Status (for diabetes)',
      description: 'This helps us provide appropriate weight management recommendations',
      questions: [
        {
          id: 'weight-status-diabetes',
          question: 'Are you currently overweight or obese?',
          type: 'single',
          required: true,
          condition: {
            field: 'diabetes-status',
            value: 'prediabetes|type-2-diabetes|type-1-diabetes|family-history|not-sure'
          },
          options: [
            { id: 'yes', text: 'Yes', value: 'yes' },
            { id: 'no', text: 'No', value: 'no' }
          ]
        }
      ]
    },
    {
      id: 'wellness-goals',
      title: 'Health and Wellness Goals',
      description: 'Help us understand your primary objectives',
      questions: [
        {
          id: 'primary-goal',
          question: 'What is your primary health and wellness goal at this time? (Please select one)',
          type: 'single',
          required: true,
          condition: {
            field: 'conditions',
            value: 'none-of-the-above|prefer-not-to-answer'
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
  totalSteps: 7
};

export interface QuizAnswers {
  [key: string]: string | string[] | undefined;
  age?: string;
  gender?: string;
  pregnancy?: string;
  conditions?: string[];
  'diabetes-status'?: string;
  'weight-status-diabetes'?: string;
  'primary-goal'?: string;
  'weight-gain'?: string;
  'weight-loss'?: string;
}

export const getFilteredSteps = (answers: QuizAnswers): QuizStep[] => {
   return quizData.steps.filter(step => {
     // Filter out pregnancy step for non-females or under 18
     if (step.id === 'pregnancy') {
       return answers.gender === 'female' && answers.age !== 'under-18';
     }

     // Filter wellness-goals step - only show if user selected "none-of-the-above" or "prefer-not-to-answer"
     if (step.id === 'wellness-goals') {
       const conditions = answers.conditions || [];
       return conditions.includes('none-of-the-above') || conditions.includes('prefer-not-to-answer');
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
}

export const analyzeQuizResults = (answers: QuizAnswers): QuizResult => {
  const diabetesStatus = answers['diabetes-status'];
  const weightStatus = answers['weight-status-diabetes'];
  const conditions = answers.conditions || [];
  const age = answers.age;
  const gender = answers.gender;
  const pregnancy = answers.pregnancy;

  // Primary analysis based on diabetes status
  if (diabetesStatus === 'prediabetes') {
    return {
      title: 'Prediabetes Management',
      summary: 'You have prediabetes, which means your blood sugar levels are higher than normal but not high enough to be diagnosed as type 2 diabetes. This is an important opportunity to prevent or delay the onset of type 2 diabetes through lifestyle changes.',
      recommendations: [
        'Focus on weight loss of 5-7% of body weight if overweight',
        'Adopt a Mediterranean-style diet rich in vegetables, fruits, whole grains, and healthy fats',
        'Aim for at least 150 minutes of moderate-intensity exercise per week',
        'Monitor blood sugar regularly and work with healthcare provider',
        'Limit processed foods and sugary beverages',
        'Consider working with a registered dietitian for personalized meal planning'
      ],
      priority: 'high'
    };
  }

  if (diabetesStatus === 'type-2-diabetes') {
    const isOverweight = weightStatus === 'yes';
    return {
      title: 'Type 2 Diabetes Management',
      summary: `You have type 2 diabetes. ${isOverweight ? 'Since you are overweight, weight management will be a key focus along with blood sugar control.' : 'Your focus will be on blood sugar control through diet, exercise, and proper medication management.'}`,
      recommendations: [
        ...(isOverweight ? ['Aim for 5-7% weight loss through calorie-controlled meal planning'] : []),
        'Monitor carbohydrate intake and choose low glycemic index foods',
        'Eat consistent meals and snacks to maintain stable blood sugar',
        'Include protein and healthy fats with each meal',
        'Work closely with healthcare team for medication management',
        'Regular physical activity (30 minutes most days)',
        'Consider diabetes education classes for carb counting'
      ],
      priority: 'high'
    };
  }

  if (diabetesStatus === 'type-1-diabetes') {
    return {
      title: 'Type 1 Diabetes Management',
      summary: 'You have type 1 diabetes, which requires insulin management and careful attention to carbohydrate intake and blood sugar monitoring.',
      recommendations: [
        'Learn carbohydrate counting for insulin dose matching',
        'Monitor blood sugar regularly (before meals and bedtime)',
        'Consistent meal timing to match insulin action',
        'Have fast-acting carbohydrates available for hypoglycemia treatment',
        'Work with healthcare team to adjust insulin doses based on activity and food',
        'Consider continuous glucose monitoring if available'
      ],
      priority: 'high'
    };
  }

  if (diabetesStatus === 'family-history') {
    return {
      title: 'Diabetes Prevention Focus',
      summary: 'You have a family history of diabetes, which increases your risk. This is an excellent time to focus on prevention through healthy lifestyle choices.',
      recommendations: [
        'Maintain a healthy weight through balanced diet and regular exercise',
        'Choose whole foods over processed foods',
        'Limit sugary drinks and excessive sweets',
        'Aim for 7-9 hours of sleep per night',
        'Manage stress through relaxation techniques',
        'Consider regular check-ups with healthcare provider for risk monitoring'
      ],
      priority: 'medium'
    };
  }

  if (diabetesStatus === 'not-sure') {
    return {
      title: 'Diabetes Risk Assessment Recommended',
      summary: 'You have concerns about blood sugar but haven\'t been diagnosed. We recommend consulting with a healthcare provider for proper assessment and monitoring.',
      recommendations: [
        'Schedule a check-up with healthcare provider for blood sugar testing',
        'Monitor for symptoms like increased thirst, frequent urination, or fatigue',
        'Focus on general healthy eating principles',
        'Maintain regular physical activity',
        'Keep a healthy weight through balanced lifestyle'
      ],
      priority: 'medium'
    };
  }

  // Default case for users without specific diabetes concerns
  return {
    title: 'General Health & Wellness',
    summary: 'Based on your responses, you don\'t have specific diabetes concerns at this time. Focus on general healthy eating and lifestyle principles.',
    recommendations: [
      'Eat a variety of colorful fruits and vegetables',
      'Choose whole grains over refined grains',
      'Include lean proteins and healthy fats',
      'Stay physically active most days of the week',
      'Maintain a healthy weight',
      'Get regular health check-ups'
    ],
    priority: 'low'
  };
};