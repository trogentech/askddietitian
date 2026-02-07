import { RecommendationRule } from '../recommendationRules';

// Helper function to generate age-appropriate modifier text for weight loss
export const getWeightLossAgeModifier = (age: string, context: string): string => {
  switch (age) {
    case '18-39':
      if (context === 'intro') return 'as a young adult';
      if (context === 'metabolism') return 'Your metabolism is still relatively strong at this age';
      if (context === 'exercise') return 'Building exercise habits now will serve you lifelong';
      return '';
    case '40-59':
      if (context === 'intro') return 'in your middle adult years';
      if (context === 'metabolism') return 'Metabolism naturally slows with age, but sustainable weight loss is achievable';
      if (context === 'muscle') return 'Preserving muscle mass becomes increasingly important';
      if (context === 'hormones') return 'hormonal changes (perimenopause/menopause) may affect weight';
      return '';
    case '60-above':
      if (context === 'intro') return 'as an older adult';
      if (context === 'approach') return 'Focus on gradual, safe weight loss while maintaining muscle mass and bone health';
      if (context === 'nutrition') return 'Ensure adequate protein, calcium, vitamin D, and other nutrients for healthy aging';
      if (context === 'safety') return 'Safety is paramount - avoid rapid weight loss or extreme restrictions';
      return '';
    default:
      return '';
  }
};

// Helper to get gender-specific text
export const getWeightLossGenderModifier = (gender: string, age: string, context: string): string => {
  if (gender === 'female') {
    if (context === 'hormones' && age === '40-59') {
      return 'Hormonal changes during perimenopause/menopause can affect weight distribution and metabolism. ';
    }
    if (context === 'menstrual' && age === '18-39') {
      return 'Track how your menstrual cycle affects appetite and weight fluctuations. ';
    }
  }
  return '';
};

// Generate comprehensive weight loss recommendation for any scenario
export const generateWeightLossRecommendation = (
  age: string,
  gender: string,
  weightLossGoal: string,
  challenges: string
): RecommendationRule => {
  const ageModifier = getWeightLossAgeModifier(age, 'intro');
  const genderText = gender === 'male' ? 'male' : 'woman';
  const metabolismText = getWeightLossAgeModifier(age, 'metabolism');
  const hormoneText = getWeightLossGenderModifier(gender, age, 'hormones');
  
  // Determine priority based on amount and age
  let priority: 'high' | 'medium' | 'low' = 'low';
  if (weightLossGoal === 'significant') priority = 'medium';
  else if (weightLossGoal === 'moderate') priority = 'low';
  
  // Generate ID
  const id = `weight-loss-${age}-${gender}-${weightLossGoal}-${challenges}`;
  
  let summary = '';
  let recommendations: string[] = [];
  let detailedRecommendations: string[] = [];
  
  // Build goal-specific text
  let goalText = '';
  let targetWeightLoss = '';
  let timeframe = '';
  
  switch (weightLossGoal) {
    case 'just-a-little':
      goalText = 'just a little weight';
      targetWeightLoss = '0.5-1 pound per week';
      timeframe = 'a few months';
      break;
    case 'moderate':
      goalText = 'a moderate amount of weight';
      targetWeightLoss = '1-1.5 pounds per week';
      timeframe = 'several months';
      break;
    case 'significant':
      goalText = 'a significant amount of weight';
      targetWeightLoss = '1-2 pounds per week';
      timeframe = '1-2+ years of consistent effort';
      break;
    case 'not-sure':
      goalText = 'weight';
      targetWeightLoss = '1-2 pounds per week once goals are set';
      timeframe = 'varies based on your goals';
      break;
  }
  
  // Build challenge-specific content
  let challengeContext = '';
  let mainApproach = '';
  
  switch (challenges) {
    case 'diet-trouble':
      challengeContext = `struggled with following diets in the past. ${weightLossGoal === 'significant' ? 'Significant weight loss requires sustained effort, but restrictive diets often fail' : 'The key to success is finding sustainable eating patterns you can maintain long-term, not restrictive diets'}`;
      mainApproach = 'flexible eating approaches over restrictive diets';
      break;
    case 'exercise-consistency':
      challengeContext = `struggled with exercise consistency. ${weightLossGoal === 'significant' ? 'While diet is most important initially, exercise becomes increasingly important for significant weight loss and maintenance' : 'Focus first on dietary changes for weight loss, as diet has a bigger impact than exercise'}`;
      mainApproach = 'building exercise habits through enjoyable activities and scheduling';
      break;
    case 'motivation-regain':
      challengeContext = `struggled with maintaining motivation or have regained weight after losing it. ${weightLossGoal === 'significant' ? 'Significant weight loss is a long journey requiring deep behavioral change' : 'The key is building sustainable habits rather than relying on motivation alone'}`;
      mainApproach = 'systems and habits that don\'t rely on motivation';
      break;
    case 'never-tried':
      challengeContext = `haven't tried weight loss before. ${weightLossGoal === 'significant' ? 'Significant weight loss will take sustained effort over time' : 'Starting fresh is an advantage - you can build healthy habits from the beginning'}`;
      mainApproach = 'sustainable, balanced eating and enjoyable physical activity';
      break;
    default:
      challengeContext = 'want to focus on weight loss';
      mainApproach = 'balanced nutrition and regular physical activity';
  }
  
  // Build summary
  summary = `You want to lose ${goalText} ${ageModifier} but have ${challengeContext}. ${hormoneText}${metabolismText} Focus on ${mainApproach} for ${weightLossGoal === 'significant' ? 'long-term' : 'gradual, lasting'} results${age === '60-above' ? ' while maintaining muscle mass and bone health' : ''}.`;
  
  // Build recommendations based on goal and challenge
  if (weightLossGoal === 'significant') {
    if (challenges === 'diet-trouble') {
      recommendations = [
        `Work with a registered dietitian${age === '60-above' ? ' experienced with older adults' : ''} and potentially a weight loss physician for support`,
        'Focus on sustainable lifestyle changes rather than restrictive diets',
        `Create a moderate calorie deficit (500-1000 cal/day) for ${targetWeightLoss} loss${age === '60-above' ? ' with adequate nutrition' : ''}`,
        'Break the journey into smaller goals (10% body weight at a time)',
        'Include foods you enjoy in appropriate portions to maintain long-term adherence'
      ];
    } else if (challenges === 'exercise-consistency') {
      recommendations = [
        `Prioritize dietary changes first for weight loss (create 500-1000 calorie deficit)${age === '60-above' ? ' with adequate nutrition' : ''}`,
        `Start exercise at your current fitness level and gradually increase${age === '60-above' ? ' with safe, low-impact activities' : ''}`,
        `Work with professionals: registered dietitian, ${age === '60-above' ? 'physical therapist' : 'personal trainer'} if needed`,
        'Build consistency before intensity - start small and increase gradually',
        'Find enjoyable activities appropriate for your current fitness level'
      ];
    } else if (challenges === 'motivation-regain') {
      recommendations = [
        `Work with a multidisciplinary team: dietitian, therapist, physician${age === '60-above' ? ', geriatric specialist' : ''}`,
        'Address psychological factors: emotional eating, trauma, stress, self-image',
        'Build sustainable systems and habits that don\'t rely on motivation alone',
        'Plan for maintenance from day one - only make sustainable changes',
        'Break the journey into smaller goals with maintenance periods between'
      ];
    } else { // never-tried
      recommendations = [
        `Work with healthcare professionals: registered dietitian, physician${age === '60-above' ? ', geriatric specialist' : ''}`,
        `Set realistic expectations: significant weight loss takes ${timeframe}`,
        `Aim for ${targetWeightLoss} through sustainable dietary changes and activity${age === '60-above' ? ' appropriate for your age' : ''}`,
        'Break the journey into smaller, achievable goals',
        'Focus on building lifelong healthy habits from the start'
      ];
    }
  } else if (weightLossGoal === 'moderate') {
    if (challenges === 'diet-trouble') {
      recommendations = [
        'Choose flexible eating approaches over restrictive diets',
        `Create a moderate calorie deficit (500-750 cal/day) for ${targetWeightLoss} loss${age === '60-above' ? ' with adequate nutrition' : ''}`,
        'Include foods you enjoy in appropriate portions to prevent feelings of deprivation',
        'Plan meals and snacks to avoid impulsive eating',
        `Work with a registered dietitian${age === '60-above' ? ' experienced with older adults' : ''} for personalized meal planning`
      ];
    } else if (challenges === 'exercise-consistency') {
      recommendations = [
        'Prioritize dietary changes for weight loss (create 500-750 calorie deficit)',
        `Build consistent exercise habits starting with achievable goals (20-30 min, 3-4x/week)${age === '60-above' ? ' with safe activities' : ''}`,
        'Find activities you genuinely enjoy to improve long-term consistency',
        'Schedule workouts like important appointments',
        `Include both cardio and strength training${age === '60-above' ? ' appropriate for your fitness level' : ''}`
      ];
    } else if (challenges === 'motivation-regain') {
      recommendations = [
        'Build sustainable habits and systems that don\'t rely on motivation',
        'Address underlying issues: emotional eating, stress management, self-compassion',
        'Set process-based goals and celebrate non-scale victories',
        'Plan for maintenance from the start - only make changes you can sustain forever',
        `Consider working with a therapist${age === '60-above' ? ' or counselor' : ''} if emotional factors are significant`
      ];
    } else { // never-tried
      recommendations = [
        `Set realistic expectations: moderate weight loss takes ${timeframe}`,
        `Aim for ${targetWeightLoss} weight loss through diet and exercise${age === '60-above' ? ' appropriate for your age' : ''}`,
        'Learn about nutrition, portion sizes, and balanced meals',
        'Build sustainable eating and exercise habits you can maintain long-term',
        `Work with a registered dietitian${age === '60-above' ? ' experienced with older adults' : ''} for personalized guidance`
      ];
    }
  } else if (weightLossGoal === 'just-a-little') {
    if (challenges === 'diet-trouble') {
      recommendations = [
        'Make small, sustainable changes to your current diet rather than following strict diet plans',
        'Focus on adding healthy foods before removing foods you enjoy',
        'Practice portion control using simple methods (smaller plates, measuring portions)',
        `Aim for modest calorie reduction (250-500 calories/day) for gradual weight loss${age === '60-above' ? ' while maintaining nutrition' : ''}`,
        'Include foods you enjoy in moderation to maintain long-term adherence'
      ];
    } else if (challenges === 'exercise-consistency') {
      recommendations = [
        `Start with small, achievable exercise goals (10-15 minutes daily)${age === '60-above' ? ' with safe activities' : ''} and gradually increase`,
        'Find physical activities you genuinely enjoy to improve consistency',
        'Focus primarily on dietary changes for weight loss (diet has bigger impact)',
        'Schedule exercise like appointments and treat it as non-negotiable time',
        'Build activity into your daily routine (walking, taking stairs, active hobbies)'
      ];
    } else if (challenges === 'motivation-regain') {
      recommendations = [
        'Focus on building habits and systems rather than relying on motivation',
        'Set small, achievable goals with regular celebrations of progress',
        'Identify your "why" - deeper reasons beyond appearance for wanting weight loss',
        'Plan for maintenance from day one - sustainable changes only',
        'Address emotional eating and develop non-food coping strategies'
      ];
    } else { // never-tried
      recommendations = [
        'Start with small, sustainable changes to build healthy habits',
        'Focus on adding nutritious foods and increasing activity rather than strict restrictions',
        `Aim for gradual weight loss of ${targetWeightLoss}${age === '60-above' ? ' with safe approach' : ''}`,
        'Learn about balanced nutrition and portion sizes',
        'Find physical activities you enjoy and can maintain long-term'
      ];
    }
  } else { // not-sure
    recommendations = [
      `Consult with your healthcare provider${age === '60-above' ? ' or geriatric specialist' : ''} to determine appropriate weight goals`,
      'Focus on healthy lifestyle changes regardless of specific weight target',
      'Start with small, sustainable improvements to eating and activity',
      'Consider health markers (blood pressure, blood sugar, cholesterol) as goals beyond weight',
      'Begin tracking current eating and activity patterns to identify areas for improvement'
    ];
  }
  
  // Build detailed recommendations
  detailedRecommendations = [
    ...(weightLossGoal === 'not-sure' ? [
      `Schedule appointment with doctor${age === '60-above' ? ' or geriatric specialist' : ''} to assess healthy weight range`,
      'Discuss health-based goals: improving blood pressure, blood sugar, cholesterol, mobility',
      `Consider body composition, not just weight (muscle vs. fat)${age === '60-above' ? ' - especially important at your age' : ''}`
    ] : [
      ...(weightLossGoal === 'significant' ? [`Set realistic timeline: significant weight loss takes ${timeframe}`] : []),
      ...(challenges === 'diet-trouble' ? [
        'Focus on nutrient-dense, filling foods: lean proteins, vegetables, whole grains, healthy fats',
        'Practice portion control using measuring tools, food scale, or visual guides',
        'Build balanced meals: protein + vegetables + smart carbs + healthy fats',
        'Include treats and favorite foods in moderation (80/20 approach)'
      ] : challenges === 'exercise-consistency' ? [
        `Focus first on nutrition: portion control, balanced meals, calorie deficit${age === '60-above' ? ' with adequate nutrition' : ''}`,
        `Start exercise manageable: ${weightLossGoal === 'significant' ? '20-30' : '10-15'} minutes, ${weightLossGoal === 'significant' ? '3-4' : '3'} days/week, then gradually increase`,
        `Choose enjoyable activities: ${age === '60-above' ? 'walking, swimming, water aerobics, tai chi' : 'group classes, sports, dancing, hiking, swimming'}`
      ] : challenges === 'motivation-regain' ? [
        'Identify your deeper motivations beyond appearance: health, energy, mobility, longevity',
        'Make only sustainable changes - if you can\'t do it forever, find another approach',
        'Focus on systems and habits: meal planning routine, consistent exercise schedule',
        'Set process goals: eat vegetables daily, workout 4x/week, cook dinner 5 nights'
      ] : [
        'Educate yourself about calorie balance, macronutrients, and portion sizes',
        `Calculate your calorie needs and create ${weightLossGoal === 'significant' ? '500-1000' : weightLossGoal === 'moderate' ? '500-750' : '250-500'} calorie deficit${age === '60-above' ? ' ensuring adequate nutrition' : ''}`,
        'Use the plate method: 1/2 vegetables, 1/4 lean protein, 1/4 whole grains'
      ])
    ]),
    `${challenges === 'diet-trouble' ? 'Meal prep on weekends' : 'Plan and prep meals'} to have healthy options readily available`,
    `Eat adequate protein (${age === '60-above' ? '1.0-1.2g' : '0.8-1g'} per lb bodyweight) to preserve muscle${age === '40-59' || age === '60-above' ? ' - especially important at your age' : ''}`,
    `Include ${weightLossGoal === 'just-a-little' ? 'plenty of' : 'abundant'} vegetables and fruits for volume, nutrients, and fiber`,
    'Choose whole grains over refined grains',
    'Use healthy fats in moderation: olive oil, avocados, nuts, fatty fish',
    'Stay hydrated with water throughout the day',
    'Limit sugary beverages, alcohol, and high-calorie drinks',
    ...(challenges !== 'exercise-consistency' ? [
      `Start ${weightLossGoal === 'significant' ? 'physical activity' : 'exercise'} gradually: ${weightLossGoal === 'significant' ? '150-300' : '150'} minutes of moderate activity weekly${age === '60-above' ? ' with safe, low-impact options' : ''}`,
      `Include both ${age === '60-above' ? 'gentle cardio and resistance training' : 'cardio and strength training'} for best results`
    ] : []),
    ...(challenges === 'motivation-regain' ? [
      'Track non-scale victories: energy levels, fitness improvements, mood, how clothes fit',
      'Identify emotional eating triggers and develop alternative coping strategies',
      'Practice self-compassion - perfectionism and all-or-nothing thinking lead to giving up'
    ] : []),
    `${challenges === 'never-tried' || weightLossGoal === 'not-sure' ? 'Track' : 'Continue tracking'} food intake for accountability and learning`,
    `Weigh yourself ${weightLossGoal === 'significant' ? 'weekly' : 'weekly or bi-weekly'} (same day, same time) to monitor progress`,
    ...(weightLossGoal !== 'just-a-little' ? ['Take measurements and progress photos to track beyond the scale'] : []),
    ...(age === '60-above' ? [
      getWeightLossAgeModifier(age, 'nutrition'),
      getWeightLossAgeModifier(age, 'safety'),
      'Monitor for adequate nutrition - avoid rapid weight loss',
      'Discuss weight loss plan with your doctor, especially if you have health conditions'
    ] : []),
    ...(age === '40-59' && gender === 'female' ? [
      getWeightLossGenderModifier(gender, age, 'hormones') + 'Work with your doctor if weight loss is particularly challenging.'
    ] : []),
    `${weightLossGoal === 'significant' ? 'Join support groups or work with professionals for guidance' : 'Consider joining support groups for encouragement'}`,
    'Be patient - sustainable weight loss is gradual',
    'Focus on building lifelong habits, not temporary changes'
  ];
  
  return {
    id,
    conditions: {
      age,
      gender,
      conditions: 'weight-loss',
      'weight-loss-goal': weightLossGoal,
      'weight-loss-challenges': challenges
    },
    priority,
    summary,
    recommendations,
    detailedRecommendations
  };
};
