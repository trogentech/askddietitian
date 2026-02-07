import { QuizAnswers } from './quiz';

export interface RecommendationRule {
  id: string;
  conditions: {
    age?: string;
    gender?: string;
    pregnancy?: string;
    conditions?: string;
    [key: string]: string | string[] | undefined;
  };
  priority: 'high' | 'medium' | 'low';
  summary: string;
  recommendations: string[];
  detailedRecommendations?: string[];
}

export interface RecommendationResult {
  title: string;
  summary: string;
  recommendations: string[];
  detailedRecommendations?: string[];
  priority: 'high' | 'medium' | 'low';
  riskFactors?: string[];
}

// Helper function to match conditions
export const matchesConditions = (
  answers: QuizAnswers,
  ruleConditions: RecommendationRule['conditions']
): boolean => {
  for (const [key, value] of Object.entries(ruleConditions)) {
    const answerValue = answers[key];
    
    if (value === undefined) continue;
    
    if (Array.isArray(value)) {
      // Rule expects one of multiple values
      if (Array.isArray(answerValue)) {
        // Answer is array, check if any value matches
        if (!value.some(v => answerValue.includes(v))) return false;
      } else {
        // Answer is string, check if it's in the expected values
        if (!value.includes(answerValue as string)) return false;
      }
    } else {
      // Rule expects a specific value
      if (Array.isArray(answerValue)) {
        // Answer is array, check if it contains the value
        if (!answerValue.includes(value)) return false;
      } else {
        // Answer is string, direct comparison
        if (answerValue !== value) return false;
      }
    }
  }
  
  return true;
};

// Helper to determine priority based on conditions
export const determinePriority = (answers: QuizAnswers): 'high' | 'medium' | 'low' => {
  const isPregnant = answers.pregnancy === 'yes';
  const condition = answers.conditions;
  
  // HIGH PRIORITY
  if (isPregnant && condition && condition !== 'none-of-the-above' && condition !== 'prefer-not-to-answer') {
    return 'high';
  }
  
  if (condition === 'diabetes' && answers['diabetes-status'] === 'type1') {
    return 'high';
  }
  
  if (condition === 'high-blood-pressure' && answers['blood-pressure'] === 'stage-2') {
    return 'high';
  }
  
  // Check for multiple risk factors
  const bloodPressureConditions = answers['blood-pressure-conditions'] as string[] || [];
  const hasMultipleRiskFactors = bloodPressureConditions.length > 1 && !bloodPressureConditions.includes('none');
  if (hasMultipleRiskFactors) {
    return 'high';
  }
  
  // MEDIUM PRIORITY
  if (condition === 'diabetes' && answers['diabetes-status'] === 'type2') {
    return 'medium';
  }
  
  if (condition === 'diabetes' && answers['diabetes-status'] === 'prediabetes' && answers['weight-status-diabetes'] === 'lose') {
    return 'medium';
  }
  
  if (condition === 'high-blood-pressure' || condition === 'high-cholesterol' || condition === 'pcos') {
    return 'medium';
  }
  
  // LOW PRIORITY
  return 'low';
};

// Export all recommendation rules
export { diabetesRecommendations } from './recommendations/diabetes';
export { bloodPressureRecommendations } from './recommendations/bloodPressure';
export { cholesterolRecommendations } from './recommendations/cholesterol';
export { pcosRecommendations } from './recommendations/pcos';
export { weightLossRecommendations } from './recommendations/weightLoss';
