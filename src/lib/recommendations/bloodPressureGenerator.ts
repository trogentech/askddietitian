import { RecommendationRule } from '../recommendationRules';

// Helper function to generate age-appropriate modifier text for blood pressure
export const getBPAgeModifier = (age: string, context: string): string => {
  switch (age) {
    case '18-39':
      if (context === 'intro') return 'in your adult years';
      if (context === 'lifestyle') return 'Establishing heart-healthy habits now can prevent complications';
      if (context === 'exercise') return 'Regular physical activity is especially effective at your age';
      return '';
    case '40-59':
      if (context === 'intro') return 'in your middle adult years';
      if (context === 'lifestyle') return 'Blood pressure management becomes increasingly important at this age';
      if (context === 'cardiovascular') return 'Monitor cardiovascular risk factors closely';
      if (context === 'pregnancy') return 'which is considered higher-risk given your age';
      return '';
    case '60-above':
      if (context === 'intro') return 'as an older adult';
      if (context === 'safety') return 'Be cautious with blood pressure lowering to prevent dizziness and falls';
      if (context === 'medication') return 'Medication adjustments may be needed as you age';
      if (context === 'nutrition') return 'Focus on adequate protein, calcium, and vitamin D';
      return '';
    default:
      return '';
  }
};

// Helper to get other conditions text
export const getOtherConditionsText = (conditions: string[], context: string): string => {
  if (!conditions || conditions.includes('none') || conditions.length === 0) {
    return '';
  }
  
  const conditionList = conditions.filter(c => c !== 'none').join(', ');
  
  if (context === 'intro') {
    return ` with ${conditionList}`;
  }
  if (context === 'management') {
    return `Your combined conditions require integrated management. `;
  }
  
  return conditionList;
};

// Generate comprehensive blood pressure recommendation for any scenario
export const generateBloodPressureRecommendation = (
  age: string,
  gender: string,
  pregnancy: string,
  medication: string,
  weight: string,
  otherConditions: string[]
): RecommendationRule => {
  const isPregnant = pregnancy === 'yes';
  const onMedication = medication === 'yes';
  const isOverweight = weight === 'yes';
  const ageModifier = getBPAgeModifier(age, 'intro');
  const hasOtherConditions = otherConditions && otherConditions.length > 0 && !otherConditions.includes('none');
  const otherConditionsText = hasOtherConditionsText(otherConditions, 'intro');
  
  // Determine priority
  let priority: 'high' | 'medium' | 'low' = 'medium';
  if (isPregnant) priority = 'high';
  else if (hasOtherConditions && otherConditions.includes('kidney-disease')) priority = 'high';
  
  // Generate ID
  const conditionsStr = otherConditions?.join('-') || 'none';
  const id = `bp-${age}-${gender}-${pregnancy}-${medication}-${weight}-${conditionsStr}`;
  
  let summary = '';
  let recommendations: string[] = [];
  let detailedRecommendations: string[] = [];
  
  // Build summary
  if (isPregnant) {
    summary = `You have high blood pressure${otherConditionsText}, are ${onMedication ? 'on medication' : 'not on medication'}, and pregnant ${ageModifier}${isOverweight ? ' while overweight' : ' at a healthy weight'}${age === '40-59' || age === '60-above' ? ', ' + getBPAgeModifier(age, 'pregnancy') : ''}. This requires ${onMedication ? 'careful management' : 'close monitoring as you manage BP through lifestyle alone'} to protect both you and your baby. Focus on ${isOverweight ? 'appropriate pregnancy weight gain without attempting weight loss and ' : ''}pregnancy-safe nutrition with sodium reduction.`;
  } else {
    summary = `You have high blood pressure${otherConditionsText}, are ${onMedication ? 'on medication' : 'not on medication'}, ${ageModifier}${isOverweight ? ' and are overweight. Weight loss of even 5-10 pounds can significantly lower blood pressure' + (onMedication ? ', potentially reducing your medication needs' : '') : ' and at a healthy weight'}. Focus on the DASH diet with ${isOverweight ? 'sodium reduction and gradual, sustainable weight loss' : 'strict sodium reduction'} to ${onMedication ? 'better control' : 'control'} your blood pressure${!onMedication && !isOverweight ? ', potentially avoiding medication' : ''}.`;
  }
  
  // Build recommendations based on scenarios
  if (isPregnant) {
    recommendations = [
      `Work ${age === '40-59' || age === '60-above' ? 'with maternal-fetal medicine specialists and ' : 'closely with '}your healthcare team (OB-GYN${hasOtherConditions ? ', specialists for your other conditions' : ''}, dietitian) for coordinated care`,
      `Follow a pregnancy-modified DASH diet with ${onMedication ? 'sodium reduction (aim for <2,300 mg/day)' : 'strict sodium reduction (aim for <1,500-2,000 mg/day)'}`,
      `Monitor blood pressure ${onMedication ? 'regularly' : 'frequently'}${age === '60-above' ? ' with attention to preventing dizziness' : ''} throughout pregnancy`,
      isOverweight ? 'Focus on appropriate pregnancy weight gain without attempting weight loss' : 'Eat nutrient-dense foods to support healthy pregnancy weight gain',
      'Include potassium, calcium, and magnesium-rich foods daily'
    ];
    
    detailedRecommendations = [
      `Attend ${age === '40-59' || age === '60-above' || hasOtherConditions ? 'frequent' : 'all'} prenatal appointments and blood pressure checks`,
      'Avoid high-sodium processed foods, canned goods, and restaurant meals',
      'Read nutrition labels carefully to track sodium content',
      'Include potassium-rich foods safe in pregnancy: bananas, sweet potatoes, spinach, avocados',
      'Choose calcium-rich foods: low-fat dairy, fortified plant milks, leafy greens',
      'Eat magnesium-rich foods: whole grains, nuts, seeds, legumes',
      'Stay well-hydrated with water throughout the day',
      'Limit caffeine intake to <200mg daily (about 1 cup of coffee)',
      'Avoid alcohol completely during pregnancy',
      `Take prescribed BP medications${hasOtherConditions ? ' and manage other conditions' : ''} as directed`,
      'Practice stress management and get adequate rest',
      'Report warning signs immediately: severe headache, vision changes, upper abdominal pain, sudden swelling',
      ...(age === '60-above' ? ['Monitor for dizziness or lightheadedness when changing positions'] : [])
    ];
  } else {
    // Non-pregnant scenarios
    recommendations = [
      onMedication 
        ? `Follow the DASH (Dietary Approaches to Stop Hypertension) eating plan${hasOtherConditions ? ' adapted for your other conditions' : ''}`
        : `Follow the DASH diet with ${isOverweight ? 'aggressive' : 'strict'} sodium reduction to control BP through lifestyle alone`,
      isOverweight 
        ? `Aim for ${onMedication ? 'gradual' : 'steady'} weight loss of 1-2 pounds per week (target 5-10% body weight)`
        : `Maintain your healthy weight through balanced nutrition`,
      `Limit sodium intake to ${isOverweight && !onMedication ? '<1,500 mg/day for maximum BP benefit' : onMedication ? '<2,300 mg/day, ideally <1,500 mg/day' : '<1,500 mg/day'}`,
      `Include potassium, calcium, and magnesium-rich foods daily${age === '60-above' ? ' with ' + getBPAgeModifier(age, 'nutrition') : ''}`,
      `${isOverweight ? 'Include physical activity' : 'Stay physically active'}${age === '60-above' ? ' with safe, age-appropriate exercises' : ' most days of the week'} and monitor blood pressure regularly`
    ];
    
    detailedRecommendations = [
      ...(hasOtherConditions ? [getOtherConditionsText(otherConditions, 'management') + 'Work with your healthcare team for coordinated care.'] : []),
      `${isOverweight ? 'Fill half your plate with vegetables and fruits (especially potassium-rich options)' : 'Eat plenty of fruits and vegetables (especially potassium-rich options)'}`,
      'Choose whole grains over refined grains',
      `Include lean proteins: fish (especially fatty fish with omega-3s), poultry, legumes${age === '60-above' ? ', with adequate protein for muscle maintenance' : ''}`,
      onMedication ? 'Limit red meat and choose low-fat dairy products' : 'Choose low-fat dairy products',
      `${onMedication || !isOverweight ? 'Avoid' : 'Strictly eliminate'} high-sodium processed foods, canned goods, and restaurant meals`,
      'Read nutrition labels and choose low-sodium options',
      'Use herbs, spices, lemon, and vinegar instead of salt for flavoring',
      'Stay hydrated with water and avoid high-sodium beverages',
      onMedication ? 'Limit alcohol to moderate amounts (if any): 1 drink/day for women, 2 for men' : 'Limit or eliminate alcohol',
      `${age === '60-above' ? 'Reduce caffeine if it affects your blood pressure or causes anxiety' : 'Reduce caffeine if it affects your blood pressure'}`,
      `Include ${isOverweight ? 'both cardio and strength training' : 'regular physical activity'}${age === '60-above' ? ' appropriate for your fitness level' : ''}`,
      ...(isOverweight ? ['Practice portion control to support weight loss', 'Track your food intake, weight, and blood pressure to monitor progress'] : []),
      ...(onMedication ? ['Take all prescribed medications as directed', 'Attend regular check-ups to monitor medication effectiveness'] : ['Monitor blood pressure at home if recommended', 'Attend regular check-ups - medication may be needed if lifestyle changes are insufficient']),
      ...(age === '60-above' ? ['Monitor for dizziness or lightheadedness, especially when standing', getBPAgeModifier(age, 'medication')] : []),
      ...(hasOtherConditions && otherConditions.includes('diabetes') ? ['Follow combined DASH-diabetes meal plan with carbohydrate control'] : []),
      ...(hasOtherConditions && otherConditions.includes('kidney-disease') ? ['Follow kidney-friendly sodium limits and manage potassium/phosphorus per your kidney function', 'Work closely with your nephrologist'] : []),
      ...(hasOtherConditions && otherConditions.includes('high-cholesterol') ? ['Choose heart-healthy fats and limit saturated fat for both BP and cholesterol', 'Include soluble fiber for cholesterol management'] : [])
    ];
  }
  
  return {
    id,
    conditions: {
      age,
      gender,
      conditions: 'high-blood-pressure',
      pregnancy,
      'blood-pressure-medication': medication,
      'blood-pressure-weight': weight,
      'blood-pressure-conditions': otherConditions
    },
    priority,
    summary,
    recommendations,
    detailedRecommendations
  };
};

// Helper function to check if has other conditions
function hasOtherConditionsText(conditions: string[], context: string): string {
  if (!conditions || conditions.includes('none') || conditions.length === 0) {
    return '';
  }
  
  const filtered = conditions.filter(c => c !== 'none');
  if (filtered.length === 0) return '';
  
  const conditionNames: { [key: string]: string } = {
    'diabetes': 'diabetes',
    'kidney-disease': 'kidney disease',
    'high-cholesterol': 'high cholesterol'
  };
  
  const readableConditions = filtered.map(c => conditionNames[c] || c);
  
  if (context === 'intro') {
    return readableConditions.length === 1 
      ? ` with ${readableConditions[0]}`
      : ` with ${readableConditions.slice(0, -1).join(', ')} and ${readableConditions[readableConditions.length - 1]}`;
  }
  
  return readableConditions.join(', ');
}
