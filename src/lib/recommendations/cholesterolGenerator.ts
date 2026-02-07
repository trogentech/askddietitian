import { RecommendationRule } from '../recommendationRules';

// Helper function to generate age-appropriate modifier text for cholesterol
export const getCholesterolAgeModifier = (age: string, context: string): string => {
  switch (age) {
    case '18-39':
      if (context === 'intro') return 'in your adult years';
      if (context === 'prevention') return 'Starting heart-healthy habits now provides lifelong benefits';
      if (context === 'family') return 'Early intervention is crucial with family history';
      return '';
    case '40-59':
      if (context === 'intro') return 'in your middle adult years';
      if (context === 'cardiovascular') return 'Cardiovascular risk increases at this age - aggressive management is important';
      if (context === 'pregnancy') return 'which is considered higher-risk given your age';
      return '';
    case '60-above':
      if (context === 'intro') return 'as an older adult';
      if (context === 'benefits') return 'Cholesterol management remains important for heart health and quality of life';
      if (context === 'nutrition') return 'Focus on adequate protein, calcium, and vitamin D alongside heart-healthy eating';
      return '';
    default:
      return '';
  }
};

// Helper to get related conditions text
export const getRelatedConditionsText = (conditions: string[], context: string): string => {
  if (!conditions || conditions.includes('not-sure') || conditions.length === 0) {
    if (context === 'intro' && conditions?.includes('not-sure')) {
      return ' but are unsure about related conditions';
    }
    return '';
  }
  
  const conditionNames: { [key: string]: string } = {
    'overweight-obesity': 'overweight/obesity',
    'diabetes': 'diabetes',
    'family-history': 'family history of early heart disease'
  };
  
  const filtered = conditions.filter(c => c !== 'not-sure');
  if (filtered.length === 0) {
    return conditions.includes('not-sure') && context === 'intro' ? ' but are unsure about related conditions' : '';
  }
  
  const readableConditions = filtered.map(c => conditionNames[c] || c);
  
  if (context === 'intro') {
    return readableConditions.length === 1 
      ? ` with ${readableConditions[0]}`
      : ` with ${readableConditions.slice(0, -1).join(', ')} and ${readableConditions[readableConditions.length - 1]}`;
  }
  
  if (context === 'risk') {
    if (filtered.includes('family-history') && filtered.includes('diabetes')) {
      return 'Your genetic risk combined with diabetes significantly increases cardiovascular risk. ';
    }
    if (filtered.includes('family-history')) {
      return 'Your family history indicates strong genetic risk. ';
    }
    if (filtered.includes('diabetes')) {
      return 'Having both cholesterol and diabetes significantly increases cardiovascular risk. ';
    }
  }
  
  return readableConditions.join(', ');
};

// Generate comprehensive cholesterol recommendation for any scenario
export const generateCholesterolRecommendation = (
  age: string,
  gender: string,
  pregnancy: string,
  confirmed: string,
  relatedConditions: string[]
): RecommendationRule => {
  const isPregnant = pregnancy === 'yes';
  const isConfirmed = confirmed === 'yes';
  const ageModifier = getCholesterolAgeModifier(age, 'intro');
  const hasRelatedConditions = relatedConditions && relatedConditions.length > 0 && !relatedConditions.every(c => c === 'not-sure');
  const relatedConditionsText = getRelatedConditionsText(relatedConditions, 'intro');
  const riskText = getRelatedConditionsText(relatedConditions, 'risk');
  
  const hasOverweight = relatedConditions?.includes('overweight-obesity');
  const hasDiabetes = relatedConditions?.includes('diabetes');
  const hasFamilyHistory = relatedConditions?.includes('family-history');
  const isNotSure = relatedConditions?.includes('not-sure') || !hasRelatedConditions;
  
  // Determine priority
  let priority: 'high' | 'medium' | 'low' = isConfirmed ? 'medium' : 'low';
  if (isPregnant) priority = 'high';
  else if (hasFamilyHistory && isConfirmed) priority = 'medium';
  
  // Generate ID
  const conditionsStr = relatedConditions?.join('-') || 'none';
  const id = `cholesterol-${age}-${gender}-${pregnancy}-${confirmed}-${conditionsStr}`;
  
  let summary = '';
  let recommendations: string[] = [];
  let detailedRecommendations: string[] = [];
  
  // Build summary based on confirmation status
  if (isConfirmed) {
    if (isPregnant) {
      summary = `You have confirmed high cholesterol${relatedConditionsText} and are pregnant ${ageModifier}${age === '40-59' || age === '60-above' ? ', ' + getCholesterolAgeModifier(age, 'pregnancy') : ''}. Cholesterol medications are typically stopped during pregnancy, so dietary management becomes crucial. ${riskText}Focus on a heart-healthy, pregnancy-safe diet${hasOverweight ? ' and manage appropriate pregnancy weight gain without attempting weight loss' : ' that supports your baby\'s development'}.`;
    } else {
      summary = `You have confirmed high cholesterol${relatedConditionsText} ${ageModifier}. ${riskText}${hasOverweight ? 'Weight loss of even 5-10% of your body weight can significantly improve your cholesterol profile. ' : ''}Focus on a heart-healthy diet that emphasizes whole foods, healthy fats, soluble fiber${hasOverweight ? ', and omega-3s while achieving gradual, sustainable weight loss' : ', and omega-3s'}${age === '60-above' ? ' while maintaining nutrition for healthy aging' : ''}.`;
    }
  } else {
    // Not confirmed - screening/prevention
    if (isPregnant) {
      summary = `You selected high cholesterol concern${relatedConditionsText} and are pregnant ${ageModifier}, but haven't been diagnosed. Focus on heart-healthy, pregnancy-safe nutrition as a preventive measure while supporting your baby's development. After pregnancy, get your cholesterol tested to know your status.`;
    } else {
      summary = `You selected high cholesterol concern${relatedConditionsText} ${ageModifier} but haven't been diagnosed with it. ${hasOverweight || hasDiabetes || hasFamilyHistory ? 'Your risk factors make testing important. ' : ''}Get your cholesterol levels tested to know your current status. Meanwhile, focusing on heart-healthy eating${hasOverweight ? ' and weight loss' : ''} can help prevent high cholesterol and improve your overall cardiovascular health.`;
    }
  }
  
  // Build recommendations
  if (isConfirmed) {
    if (isPregnant) {
      recommendations = [
        `Work ${age === '40-59' || age === '60-above' ? 'with maternal-fetal medicine specialists and ' : 'closely with '}your healthcare team (OB-GYN, cardiologist${hasDiabetes ? ', endocrinologist' : ''}, dietitian)`,
        'Follow a heart-healthy diet that\'s safe for pregnancy',
        'Focus on reducing saturated fat and eliminating trans fats',
        'Include soluble fiber and omega-3 fatty acids safe for pregnancy',
        hasOverweight ? 'Manage appropriate pregnancy weight gain without attempting weight loss' : 'Support healthy pregnancy weight gain'
      ];
    } else {
      recommendations = [
        `${hasFamilyHistory ? 'Follow an aggressive' : 'Follow a'} heart-healthy eating plan${hasDiabetes ? ' adapted for diabetes' : ''} (${hasFamilyHistory ? 'Portfolio or ' : ''}Mediterranean diet)${age === '60-above' ? ' appropriate for older adults' : ''}`,
        hasOverweight ? 'Aim for weight loss of 5-10% of body weight (1-2 lbs per week)' : hasFamilyHistory ? 'Achieve and maintain a healthy weight' : 'Maintain your healthy weight through balanced nutrition',
        `${hasFamilyHistory ? 'Strictly limit' : 'Reduce'} saturated fat to <7% of calories and eliminate ${hasFamilyHistory ? 'all' : ''} trans fats`,
        `Include soluble fiber (${hasFamilyHistory ? '10-25g' : '5-10g'} daily)${hasFamilyHistory ? ', omega-3s, and plant sterols/stanols' : ' and omega-3 fatty acids'}`,
        `Take cholesterol medication ${isConfirmed ? 'as prescribed' : 'if prescribed'} and monitor lipid levels${hasFamilyHistory ? ' closely' : ''}${age === '60-above' ? ' with age-appropriate targets' : ''}`
      ];
    }
  } else {
    // Not confirmed recommendations
    recommendations = [
      `Get your cholesterol levels tested (lipid panel)${hasDiabetes ? ' - you should have annual screening with diabetes' : hasFamilyHistory ? ' and discuss family history with your doctor' : ' to know your current status'}`,
      `Focus on ${hasOverweight ? 'weight loss and ' : ''}heart-healthy${isPregnant ? ', pregnancy-safe' : ''} eating for prevention`,
      `${hasOverweight ? 'Choose lean proteins and plant-based protein sources' : 'Follow a preventive heart-healthy eating plan'}`,
      `Include ${isPregnant ? 'pregnancy-safe ' : ''}soluble fiber, omega-3s, and heart-healthy fats`,
      `Stay physically active${isPregnant ? ' with pregnancy-appropriate exercise' : age === '60-above' ? ' with safe, age-appropriate exercises' : ' to maintain healthy cholesterol levels'}`
    ];
  }
  
  // Build detailed recommendations
  if (isConfirmed) {
    if (isPregnant) {
      detailedRecommendations = [
        `Attend all prenatal appointments${age === '40-59' || age === '60-above' ? ' with high-risk specialists' : ''}`,
        'Choose lean proteins: skinless poultry, fish (2-3 servings weekly, low-mercury options), legumes',
        'Limit saturated fat from red meat, full-fat dairy, and fried foods',
        'Avoid trans fats completely (check labels for partially hydrogenated oils)',
        'Include soluble fiber daily: oatmeal, barley, beans, lentils, apples, pears, berries',
        'Eat omega-3 rich foods: salmon, sardines, walnuts, chia seeds, flaxseeds',
        'Choose heart-healthy fats: olive oil, avocados, nuts, seeds',
        'Include plenty of fruits and vegetables for antioxidants',
        'Select whole grains over refined grains',
        'Limit dietary cholesterol (egg yolks, organ meats, high-fat dairy)',
        'Stay hydrated and avoid high-calorie beverages',
        'Include pregnancy-essential nutrients alongside heart-healthy choices',
        ...(hasDiabetes ? ['Monitor blood sugar and follow combined nutrition plan for both conditions'] : []),
        'Monitor cholesterol levels and discuss postpartum medication plans'
      ];
    } else {
      detailedRecommendations = [
        ...(hasDiabetes || hasFamilyHistory ? [`${riskText}Work with your healthcare team for comprehensive management.`] : []),
        `Choose ${hasFamilyHistory ? 'plant-based proteins frequently and eat' : 'lean proteins:'} ${hasFamilyHistory ? 'legumes, tofu, tempeh, and ' : ''}fish (${hasFamilyHistory ? 'at least' : ''} twice weekly), skinless poultry${hasFamilyHistory ? ', with rare red meat' : ', and plant-based options'}`,
        `${hasFamilyHistory ? 'Eliminate' : 'Limit'} trans fats ${hasFamilyHistory ? 'completely ' : ''}and ${hasFamilyHistory ? 'strictly limit' : 'reduce'} saturated fat${hasOverweight ? ' from red meat, full-fat dairy, and fried foods' : ''}`,
        `Use ${hasFamilyHistory ? 'exclusively ' : ''}heart-healthy ${hasFamilyHistory ? 'oils' : 'fats'}: olive oil, ${hasFamilyHistory ? 'canola oil' : 'avocados, nuts, seeds'}`,
        `Include soluble fiber ${hasFamilyHistory ? 'at every meal' : 'daily'}: ${hasFamilyHistory ? 'oats, barley, beans, fruits, vegetables' : 'oatmeal, barley, beans, lentils, apples, berries'}`,
        ...(hasFamilyHistory ? ['Add plant sterols/stanols daily (2g target) from fortified foods'] : []),
        `Eat ${hasFamilyHistory ? 'abundant ' : 'plenty of '}colorful fruits and vegetables ${hasFamilyHistory ? '(aim for 7-9 servings daily)' : 'for nutrients and fiber'}`,
        'Choose whole grains over refined grains',
        ...(hasFamilyHistory ? ['Include nuts and seeds daily for healthy fats and fiber'] : []),
        'Limit dietary cholesterol intake',
        ...(hasOverweight ? [
          'Practice portion control to support weight loss',
          `Fill half your plate with vegetables${age === '60-above' ? ', with adequate protein for muscle maintenance' : ''}`,
          'Stay hydrated with water and avoid high-calorie beverages'
        ] : ['Maintain healthy portion sizes']),
        ...(hasDiabetes ? [
          'Follow combined heart-healthy and diabetes meal plan',
          'Choose low-glycemic carbohydrates and control portions',
          'Monitor blood sugar and cholesterol levels regularly'
        ] : []),
        `${hasOverweight || !isConfirmed ? 'Include' : 'Stay physically active with'} regular ${hasOverweight ? 'physical activity (aerobic and resistance training)' : 'exercise'}${age === '60-above' ? ' appropriate for your fitness level' : ''}`,
        ...(age === '60-above' ? [getCholesterolAgeModifier(age, 'nutrition')] : []),
        `${hasFamilyHistory ? 'Don\'t smoke and limit' : 'Avoid smoking and limit'} alcohol`,
        `Monitor cholesterol ${hasFamilyHistory ? 'every 3-6 months' : 'levels regularly'}${age === '60-above' ? ' with age-appropriate treatment goals' : ''}`,
        ...(hasFamilyHistory ? ['Discuss family screening with relatives and encourage them to adopt healthy habits'] : [])
      ];
    }
  } else {
    // Not confirmed detailed recommendations
    detailedRecommendations = [
      `${hasDiabetes ? 'Schedule regular lipid panels with your diabetes care appointments' : hasFamilyHistory ? 'Schedule a lipid panel and discuss family history with your doctor' : 'Schedule a lipid panel with your healthcare provider'}`,
      ...(hasFamilyHistory ? ['Learn about your family\'s specific heart disease patterns'] : []),
      `Adopt heart-healthy eating habits ${isConfirmed ? 'for treatment' : 'for prevention'}`,
      `${hasOverweight ? 'Choose lean proteins and plant-based protein sources' : 'Include lean proteins, fish, and plant-based options'}`,
      `Limit saturated fat ${hasOverweight ? 'to <10% of calories (aim for <7% if cholesterol is elevated)' : 'and choose heart-healthy fats'}`,
      `${hasFamilyHistory ? 'Avoid' : 'Limit'} trans fats ${hasFamilyHistory ? 'completely' : ''}`,
      `Include soluble fiber daily from oats, beans, fruits, vegetables${hasDiabetes ? ' - benefits both conditions' : ''}`,
      `Eat fatty fish ${hasFamilyHistory ? 'at least' : ''} twice weekly${isPregnant ? ' (pregnancy-safe, low-mercury options)' : ''}`,
      'Use heart-healthy oils: olive oil, canola oil',
      'Eat abundant fruits and vegetables',
      'Choose whole grains over refined grains',
      ...(hasOverweight ? ['Maintain or achieve a healthy weight through balanced eating'] : ['Maintain a healthy weight']),
      `Stay ${isPregnant ? 'active with pregnancy-appropriate exercise' : 'physically active most days'}${age === '60-above' ? ' with safe, age-appropriate activities' : ''}`,
      ...(hasDiabetes ? ['Take diabetes medications as prescribed and manage cardiovascular risk factors'] : []),
      'Avoid smoking and limit alcohol',
      `Get regular cholesterol screenings ${hasFamilyHistory ? '(frequency based on family risk)' : hasDiabetes ? '(annually with diabetes)' : '(every 1-3 years or as recommended)'}${age === '60-above' ? ' based on your age and risk' : ''}`,
      ...(hasFamilyHistory ? ['Encourage family members to get screened and adopt healthy habits'] : []),
      ...(age === '60-above' && !isPregnant ? [getCholesterolAgeModifier(age, 'nutrition')] : [])
    ];
  }
  
  return {
    id,
    conditions: {
      age,
      gender,
      conditions: 'high-cholesterol',
      pregnancy,
      'cholesterol-confirmed': confirmed,
      'cholesterol-related-conditions': relatedConditions
    },
    priority,
    summary,
    recommendations,
    detailedRecommendations
  };
};
