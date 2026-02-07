import { RecommendationRule } from '../recommendationRules';

// Helper function to generate age-appropriate modifier text
export const getAgeModifier = (age: string, context: string): string => {
  switch (age) {
    case '18-39':
      if (context === 'intro') return 'in your adult years';
      if (context === 'monitoring') return 'establish good monitoring habits now';
      if (context === 'complications') return 'preventing complications early in your diabetes journey';
      return '';
    case '40-59':
      if (context === 'intro') return 'in your middle adult years';
      if (context === 'monitoring') return 'pay attention to age-related changes in insulin sensitivity and hormonal shifts';
      if (context === 'complications') return 'preventing complications through excellent blood sugar control';
      if (context === 'pregnancy') return 'requiring specialized care given your age';
      return '';
    case '60-above':
      if (context === 'intro') return 'as an older adult';
      if (context === 'monitoring') return 'focus on preventing hypoglycemia with age-appropriate targets';
      if (context === 'complications') return 'maintaining quality of life and functional independence';
      if (context === 'nutrition') return 'adequate protein, calcium, and vitamin D for healthy aging';
      return '';
    default:
      return '';
  }
};

// Generate comprehensive diabetes recommendation for any scenario
export const generateDiabetesRecommendation = (
  age: string,
  gender: string,
  pregnancy: string,
  diabetesStatus: string,
  weightStatus: string
): RecommendationRule => {
  const isPregnant = pregnancy === 'yes';
  const isOverweight = weightStatus === 'lose';
  const ageModifier = getAgeModifier(age, 'intro');
  const genderText = gender === 'male' ? 'male' : 'woman';
  
  // Determine priority
  let priority: 'high' | 'medium' | 'low' = 'medium';
  if (isPregnant) priority = 'high';
  else if (diabetesStatus === 'type1') priority = 'medium';
  else if (diabetesStatus === 'family-history') priority = 'low';
  
  // Generate ID
  const id = `diabetes-${diabetesStatus}-${age}-${gender}-${pregnancy}-${weightStatus}`;
  
  // Type-specific content
  let summary = '';
  let recommendations: string[] = [];
  let detailedRecommendations: string[] = [];
  
  switch (diabetesStatus) {
    case 'type1':
      if (isPregnant) {
        summary = `You have Type 1 diabetes and are pregnant ${ageModifier}${age === '40-59' || age === '60-above' ? ', which is considered higher-risk' : ''}, requiring specialized nutrition care for both insulin management and healthy pregnancy. ${isOverweight ? 'Focus on managing appropriate pregnancy weight gain without attempting weight loss while' : 'Your focus should be on precise'} carbohydrate counting, frequent blood sugar monitoring, and safe pregnancy nutrition.`;
        recommendations = [
          `Work closely with your healthcare team (endocrinologist, OB-GYN, registered dietitian)${age === '40-59' || age === '60-above' ? ' and maternal-fetal medicine specialist' : ''} for coordinated care`,
          'Practice precise carbohydrate counting and insulin-to-carb ratios adjusted for pregnancy',
          `Monitor blood sugar very frequently with pregnancy-specific target ranges${age === '60-above' ? ' (may be individualized for your age)' : ''}`,
          'Focus on nutrient-dense foods to support baby\'s growth while managing blood sugar',
          isOverweight ? 'Manage appropriate pregnancy weight gain without attempting weight loss' : 'Support healthy pregnancy weight gain (typically 25-35 lbs)'
        ];
        detailedRecommendations = [
          `Attend all prenatal appointments${age === '40-59' || age === '60-above' ? ' with high-risk pregnancy specialists' : ''} and work with certified diabetes educator`,
          'Adjust insulin doses as pregnancy hormones change (especially 2nd and 3rd trimesters)',
          `Include foods rich in folate, iron, calcium, omega-3s, and other pregnancy nutrients${age === '60-above' ? ', with attention to age-appropriate nutritional needs' : ''}`,
          'Plan for 3 meals and 2-3 snacks daily to maintain stable blood sugar',
          'Prepare for postpartum insulin adjustments and breastfeeding nutrition',
          'Keep emergency glucose sources available for hypoglycemia episodes',
          'Practice stress management and adequate sleep for blood sugar stability'
        ];
      } else {
        summary = `You have Type 1 diabetes ${ageModifier}${isOverweight ? ' and want to lose weight' : ' at a healthy weight'}, requiring ${isOverweight ? 'careful balance between insulin management and weight reduction' : 'ongoing insulin management and carbohydrate counting'}. Focus on ${isOverweight ? 'gradual, sustainable weight loss while maintaining' : 'maintaining'} stable blood sugar through ${getAgeModifier(age, 'monitoring')} and coordination with your healthcare team.`;
        recommendations = [
          `Work with a registered dietitian experienced in Type 1 diabetes for personalized meal planning${age === '60-above' ? ' appropriate for older adults' : ''}`,
          `${isOverweight ? 'Practice consistent carbohydrate counting while reducing overall calories' : 'Maintain consistent carbohydrate counting and insulin-to-carb ratios'}`,
          `Monitor blood sugar regularly (before meals, 2 hours after meals, bedtime)${age === '60-above' ? ' with age-appropriate targets' : ''}`,
          isOverweight ? `Focus on gradual weight loss (1-2 lbs per week) while preventing hypoglycemia${age === '60-above' ? ' - especially important at your age' : ''}` : 'Eat balanced meals with complex carbohydrates, lean proteins, and healthy fats',
          `Focus on ${getAgeModifier(age, 'complications')}`
        ];
        detailedRecommendations = [
          `Attend regular appointments with your endocrinologist and diabetes educator${age === '60-above' ? ', discussing age-appropriate management goals' : ''}`,
          isOverweight ? 'Adjust insulin doses with your healthcare provider as weight and eating patterns change' : 'Learn to adjust insulin for different foods, activities, and life situations',
          `Choose low glycemic index foods to minimize blood sugar spikes`,
          `Include non-starchy vegetables, whole grains, lean proteins, and healthy fats daily${age === '60-above' ? ', with ' + getAgeModifier(age, 'nutrition') : ''}`,
          `${isOverweight ? 'Include physical activity with blood sugar monitoring before/during/after exercise' : 'Stay physically active with appropriate blood sugar monitoring'}${age === '60-above' ? ' at safe, age-appropriate intensity' : ''}`,
          `Always carry fast-acting glucose for hypoglycemia episodes${age === '60-above' ? ' - particularly important at your age' : ''}`,
          `Track A1C levels and work toward target range${age === '60-above' ? ' (may be individualized for your age)' : ' (typically <7%)'}`,
          ...(gender === 'female' && age !== '60-above' ? ['Monitor for hormonal changes that may affect blood sugar patterns'] : [])
        ];
      }
      break;
      
    case 'type2':
      if (isPregnant) {
        summary = `You have Type 2 diabetes and are pregnant ${ageModifier}${isOverweight ? ' while overweight' : ' at a healthy weight'}${age === '40-59' || age === '60-above' ? ', which requires specialized care given your age' : ''}, requiring careful nutrition management for both blood sugar control and healthy pregnancy. Focus on balanced eating that stabilizes blood sugar${isOverweight ? ', manages weight gain appropriately without attempting weight loss,' : ''} and supports baby's growth.`;
        recommendations = [
          `Work with your healthcare team (OB-GYN, endocrinologist, dietitian)${age === '40-59' || age === '60-above' ? ' and maternal-fetal medicine' : ''} for coordinated pregnancy and diabetes care`,
          'Focus on blood sugar control through balanced meals with controlled carbohydrates',
          `Monitor blood sugar as recommended (typically before meals and 1-2 hours after)${age === '60-above' ? ' with age-appropriate targets' : ''}`,
          'Eat nutrient-dense foods that support baby\'s development while managing blood sugar',
          isOverweight ? 'Aim for appropriate pregnancy weight gain as recommended by your healthcare provider' : 'Support healthy pregnancy weight gain (typically 25-35 lbs)'
        ];
      } else {
        summary = `You have Type 2 diabetes ${ageModifier}${isOverweight ? ' and are overweight, making weight loss a key priority. Even modest weight loss of 5-7% can significantly improve blood sugar control' : ' at a healthy weight, requiring focused blood sugar management through diet'}. Focus on ${isOverweight ? 'sustainable dietary changes, portion control' : 'maintaining stable blood sugar levels'} and ${getAgeModifier(age, 'monitoring')}.`;
        recommendations = [
          `Work with a registered dietitian for ${isOverweight ? 'weight loss and ' : ''}diabetes-specific meal planning${age === '60-above' ? ' appropriate for older adults' : ''}`,
          isOverweight ? `Aim for gradual weight loss of 1-2 pounds per week (5-7% total body weight)${age === '60-above' ? ' with attention to maintaining adequate nutrition' : ''}` : 'Focus on blood sugar control through consistent carbohydrate intake',
          `Choose low glycemic index foods and ${isOverweight ? 'control portion sizes' : 'pair carbohydrates with protein'}`,
          `Monitor blood sugar regularly to understand how foods affect your levels${age === '60-above' ? ' and prevent hypoglycemia' : ''}`,
          `${isOverweight ? 'Include physical activity most days, starting gradually' : 'Stay physically active to improve insulin sensitivity'}${age === '60-above' ? ' with safe, age-appropriate exercises' : ''}`
        ];
      }
      detailedRecommendations = [
        ...(isPregnant ? [
          'Follow pregnancy-specific blood sugar targets (typically stricter than non-pregnancy)',
          'Distribute carbohydrates evenly throughout the day (3 meals, 2-3 snacks)',
          `Choose complex carbohydrates, lean proteins, healthy fats, and plenty of vegetables`,
          `Include pregnancy-essential nutrients (folate, iron, calcium, DHA omega-3s)${age === '60-above' ? ' with attention to age-appropriate needs' : ''}`,
          'Stay hydrated and limit sugary beverages',
          'Take medications as prescribed (insulin if needed during pregnancy)',
          'Prepare for postpartum diabetes screening and continued management'
        ] : [
          isOverweight ? 'Fill half your plate with non-starchy vegetables, 1/4 with lean protein, 1/4 with complex carbohydrates' : 'Eat consistent amounts of carbohydrates at each meal for stable blood sugar',
          isOverweight ? `Reduce refined carbohydrates and choose whole grains` : 'Choose complex carbohydrates (whole grains, legumes) over refined options',
          isOverweight ? `Practice portion control using measuring tools or the plate method` : 'Fill half your plate with non-starchy vegetables',
          `Stay hydrated with water and avoid sugary beverages`,
          isOverweight ? 'Plan balanced meals and snacks to prevent extreme hunger' : `Include lean proteins and healthy fats at meals`,
          `Take diabetes medications as prescribed${isOverweight ? ' and monitor for adjustments as you lose weight' : ''}`,
          `Track ${isOverweight ? 'food intake, blood sugar levels, and weight' : 'A1C levels and aim for target range (typically <7%)'}${age === '60-above' ? ' with age-appropriate targets' : ''}`,
          ...(isOverweight && age === '60-above' ? [getAgeModifier(age, 'nutrition')] : []),
          ...(gender === 'female' && age !== '60-above' && !isPregnant ? ['Monitor for hormonal changes that may affect blood sugar'] : [])
        ])
      ];
      break;
      
    case 'gestational':
      summary = `You have gestational diabetes ${ageModifier}${isOverweight ? ' and are overweight' : ' at a healthy pre-pregnancy weight'}${age === '40-59' ? ', which requires closer monitoring given your age' : ''}, requiring specialized nutrition care to manage blood sugar while supporting healthy baby development. Focus on balanced eating that controls blood sugar ${isOverweight ? 'and manages weight gain appropriately without attempting weight loss' : 'while gaining appropriate weight for a healthy pregnancy'}.`;
      recommendations = [
        `Work closely with your healthcare team (OB-GYN, dietitian, diabetes educator)${age === '40-59' || age === '60-above' ? ' with specialized pregnancy care' : ''} throughout pregnancy`,
        'Control blood sugar through balanced meals with distributed carbohydrates',
        'Monitor blood sugar as directed (typically fasting and 1-2 hours after meals)',
        'Focus on nutrient-dense foods that support baby while managing blood sugar',
        isOverweight ? 'Aim for appropriate pregnancy weight gain based on your healthcare provider\'s guidance' : 'Support healthy pregnancy weight gain (typically 25-35 lbs)'
      ];
      detailedRecommendations = [
        'Distribute carbohydrates evenly across 3 meals and 2-3 snacks daily',
        'Choose complex carbohydrates with low to moderate glycemic index',
        'Pair carbohydrates with protein and healthy fats to slow blood sugar rise',
        'Include plenty of non-starchy vegetables for nutrients and fiber',
        `Consume adequate protein for baby's growth (typically 70-100g daily)`,
        `Include pregnancy-essential nutrients (folate, iron, calcium, DHA)${age === '40-59' || age === '60-above' ? ' with attention to age-appropriate needs' : ''}`,
        'Stay hydrated and avoid sugary drinks',
        'Take insulin if prescribed by your healthcare provider',
        'Plan for postpartum diabetes screening (6-12 weeks after delivery)'
      ];
      break;
      
    case 'prediabetes':
      summary = `You have prediabetes ${ageModifier}${isOverweight ? ' and are overweight, putting you at significant risk for Type 2 diabetes. The good news: losing just 5-7% of your body weight can reduce your risk by up to 58%' : ' at a healthy weight, indicating risk may be related to genetics, inactivity, or dietary patterns'}. This is your opportunity to prevent or delay diabetes through ${isOverweight ? 'weight loss, healthy eating' : 'balanced nutrition'}, and increased physical activity.`;
      recommendations = [
        isOverweight ? 'Prioritize weight loss of 5-7% of your current body weight as your primary goal' : 'Focus on blood sugar control through consistent, balanced eating',
        `Work with a registered dietitian to create a ${isOverweight ? 'sustainable weight loss' : 'prediabetes-specific nutrition'} plan${age === '60-above' ? ' appropriate for your age' : ''}`,
        `Focus on whole foods${isOverweight ? ', portion control, and reducing refined carbohydrates' : ' and choose low glycemic index foods'}`,
        `Increase physical activity to at least 150 minutes per week${age === '60-above' ? ' with safe, age-appropriate exercises' : ''}`,
        'Monitor your progress and get regular blood sugar screenings'
      ];
      detailedRecommendations = [
        isOverweight ? `Set realistic weight loss goals (1-2 pounds per week)${age === '60-above' ? ' while maintaining adequate nutrition' : ''}` : 'Eat balanced meals with complex carbohydrates, lean proteins, and healthy fats',
        isOverweight ? 'Reduce portion sizes and use the plate method (1/2 vegetables, 1/4 protein, 1/4 carbs)' : 'Choose whole grains, legumes, and fiber-rich foods',
        'Choose complex carbohydrates and limit refined sugars',
        isOverweight ? 'Eliminate or reduce sugary beverages' : 'Include non-starchy vegetables at most meals',
        `Include lean proteins, healthy fats, and plenty of fiber-rich foods`,
        `Stay active with ${isOverweight ? 'a combination of aerobic exercise and strength training' : 'at least 150 minutes of moderate exercise weekly'}${age === '60-above' ? ' appropriate for your fitness level' : ''}`,
        `Get adequate sleep (7-9 hours) as poor sleep increases diabetes risk`,
        'Manage stress through healthy coping strategies',
        `Consider joining a diabetes prevention program for structured support${age === '60-above' ? ' designed for older adults' : ''}`,
        'Schedule follow-up blood sugar tests every 3-6 months to track progress',
        ...(age === '60-above' ? [getAgeModifier(age, 'nutrition')] : [])
      ];
      break;
      
    case 'family-history':
      summary = `You have a family history of diabetes ${ageModifier}${isOverweight ? ' and are overweight, increasing your risk of developing diabetes. Taking action now through weight loss and healthy lifestyle changes can significantly reduce your risk' : ' but maintain a healthy weight. While weight is a major risk factor, genetics also play a role'}. Focus on ${isOverweight ? 'sustainable weight loss' : 'maintaining your healthy lifestyle'}, balanced nutrition, and regular physical activity as preventive measures.`;
      recommendations = [
        isOverweight ? 'Prioritize achieving and maintaining a healthy weight to reduce diabetes risk' : 'Maintain your healthy weight through balanced nutrition and regular activity',
        `Adopt a balanced, whole-foods diet focused on diabetes prevention`,
        `Increase physical activity to at least 150 minutes per week${age === '60-above' ? ' with safe exercises' : ''}`,
        'Get baseline blood sugar screening and monitor regularly',
        'Work with a healthcare provider or dietitian for personalized prevention strategies'
      ];
      detailedRecommendations = [
        isOverweight ? `Set achievable weight loss goals (aim for 5-7% initial weight loss)${age === '60-above' ? ' with gradual, sustainable changes' : ''}` : 'Continue eating a balanced diet with whole grains, lean proteins, vegetables, and healthy fats',
        'Focus on whole, minimally processed foods',
        'Choose complex carbohydrates and limit refined sugars',
        'Fill half your plate with non-starchy vegetables',
        'Include lean proteins and healthy fats at meals',
        isOverweight ? 'Eliminate or reduce sugary beverages' : 'Limit refined carbohydrates and added sugars even at a healthy weight',
        `Build a consistent exercise routine${age === '60-above' ? ' appropriate for your age and fitness level' : ' combining cardio and strength training'}`,
        'Get adequate sleep and manage stress for metabolic health',
        'Learn about diabetes symptoms and risk factors',
        `Schedule regular check-ups and blood sugar screenings (every 1-3 years)${age === '60-above' ? ' or as recommended for your age' : ''}`,
        ...(age === '60-above' ? [getAgeModifier(age, 'nutrition')] : [])
      ];
      break;
      
    case 'not-sure':
      summary = `You're uncertain about your diabetes status ${ageModifier}, which makes it important to first clarify your diagnosis with a healthcare provider. Whether you have diabetes, prediabetes, or are at risk, getting a clear understanding of your blood sugar status will help you receive appropriate nutrition guidance and medical care${age === '60-above' ? ' tailored to your age' : ''}.`;
      recommendations = [
        'Schedule an appointment with your healthcare provider to clarify your diabetes status',
        'Get blood sugar testing (fasting glucose, A1C, or glucose tolerance test)',
        'Bring any previous lab results or medical records to your appointment',
        'Meanwhile, focus on general healthy eating principles that support blood sugar',
        'Once diagnosed, work with a registered dietitian for condition-specific nutrition guidance'
      ];
      detailedRecommendations = [
        'Request blood tests to determine if you have diabetes, prediabetes, or normal blood sugar',
        'Discuss your symptoms, family history, and health concerns with your doctor',
        'While awaiting clarification, follow general healthy eating guidelines',
        'Choose whole, minimally processed foods',
        `Include vegetables, fruits, whole grains, lean proteins, and healthy fats`,
        'Limit refined carbohydrates, added sugars, and sugary beverages',
        'Practice portion control and regular meal timing',
        `Stay physically active most days of the week${age === '60-above' ? ' with safe, age-appropriate activities' : ''}`,
        'Once your status is clarified, seek diabetes education and nutrition counseling',
        `Learn about your specific type of diabetes and appropriate management strategies${age === '60-above' ? ' for your age group' : ''}`,
        ...(age === '60-above' ? [getAgeModifier(age, 'nutrition')] : [])
      ];
      break;
  }
  
  return {
    id,
    conditions: {
      age,
      gender,
      conditions: 'diabetes',
      'diabetes-status': diabetesStatus,
      pregnancy,
      'weight-status-diabetes': weightStatus
    },
    priority,
    summary,
    recommendations,
    detailedRecommendations
  };
};
