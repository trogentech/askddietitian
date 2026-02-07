import { RecommendationRule } from '../recommendationRules';

// Helper function to generate age-appropriate modifier text for PCOS
export const getPCOSAgeModifier = (age: string, context: string): string => {
  switch (age) {
    case '18-39':
      if (context === 'intro') return 'in your reproductive years';
      if (context === 'fertility') return 'This is an optimal time to address fertility concerns';
      if (context === 'prevention') return 'Managing PCOS now can prevent long-term complications';
      return '';
    case '40-59':
      if (context === 'intro') return 'in your 40s or 50s';
      if (context === 'fertility') return 'Fertility management becomes more challenging at this age';
      if (context === 'metabolic') return 'Metabolic health becomes increasingly important as you approach menopause';
      if (context === 'pregnancy') return 'which is considered higher-risk given your age and PCOS';
      return '';
    case '60-above':
      if (context === 'intro') return 'in your older adult years';
      if (context === 'metabolic') return 'Focus on preventing diabetes and cardiovascular complications';
      return '';
    default:
      return '';
  }
};

// Helper to get BMI-specific text
export const getBMIModifier = (bmiStatus: string, context: string): string => {
  switch (bmiStatus) {
    case 'obese':
      if (context === 'weight-loss') return 'Even 5-10% weight loss can dramatically improve PCOS symptoms, insulin sensitivity, and hormone balance';
      if (context === 'target') return 'Focus on gradual, sustainable weight loss';
      return '';
    case 'overweight':
      if (context === 'weight-loss') return 'Even modest weight loss can significantly improve PCOS symptoms and hormone balance';
      if (context === 'target') return 'Target weight loss of 5-10% of body weight';
      return '';
    case 'normal':
      if (context === 'focus') return 'While you\'re at a healthy weight, PCOS can still cause insulin resistance and hormonal imbalances';
      return '';
    default:
      return '';
  }
};

// Generate comprehensive PCOS recommendation for any scenario
export const generatePCOSRecommendation = (
  age: string,
  gender: string,
  pregnancy: string,
  pcosGoal: string,
  bmiStatus: string
): RecommendationRule => {
  const isPregnant = pregnancy === 'yes';
  const ageModifier = getPCOSAgeModifier(age, 'intro');
  
  // Determine priority - all PCOS is medium priority
  const priority: 'high' | 'medium' | 'low' = isPregnant ? 'high' : 'medium';
  
  // Generate ID
  const id = `pcos-${age}-${gender}-${pregnancy}-${pcosGoal}${pcosGoal === 'weight-management' ? '-' + bmiStatus : ''}`;
  
  let summary = '';
  let recommendations: string[] = [];
  let detailedRecommendations: string[] = [];
  
  // Build recommendations based on goal
  switch (pcosGoal) {
    case 'weight-management':
      const weightLossText = getBMIModifier(bmiStatus, 'weight-loss');
      const targetText = getBMIModifier(bmiStatus, 'target');
      const focusText = bmiStatus === 'normal' ? getBMIModifier(bmiStatus, 'focus') : '';
      
      summary = `You have PCOS ${ageModifier} with ${bmiStatus === 'obese' ? 'obesity' : bmiStatus === 'overweight' ? 'overweight status' : 'a normal weight'} and want to focus on weight management. ${weightLossText || focusText} Focus on a low-glycemic, anti-inflammatory diet ${bmiStatus !== 'normal' ? 'with portion control for sustainable weight loss' : 'that manages insulin and supports hormone balance'} while managing insulin resistance.`;
      
      recommendations = [
        bmiStatus !== 'normal' ? `${targetText} for maximum PCOS symptom improvement` : 'Maintain your healthy weight through balanced, low-glycemic eating',
        'Follow a low-glycemic index diet to manage insulin resistance',
        `Focus on whole foods, lean proteins, healthy fats, and fiber-rich carbohydrates${age === '60-above' ? ' with adequate protein for aging' : ''}`,
        bmiStatus !== 'normal' ? 'Practice portion control and regular meal timing to stabilize blood sugar' : 'Focus on blood sugar control and insulin sensitivity',
        `Include anti-inflammatory foods and omega-3 fatty acids${bmiStatus !== 'normal' ? ' while staying physically active' : ''}`
      ];
      
      detailedRecommendations = [
        `Work with a registered dietitian experienced in PCOS${age === '60-above' ? ' and older adult nutrition' : ''}`,
        'Choose low-glycemic carbohydrates: whole grains, legumes, non-starchy vegetables',
        'Include lean proteins at every meal to support satiety and blood sugar control',
        'Add healthy fats: olive oil, avocados, nuts, seeds, fatty fish',
        'Limit refined carbohydrates, white flour products, and added sugars',
        `Eat high-fiber foods (25-30g daily) for blood sugar control${bmiStatus !== 'normal' ? ' and satiety' : ''}`,
        'Include anti-inflammatory foods: fatty fish, leafy greens, berries, turmeric',
        ...(bmiStatus !== 'normal' ? ['Practice portion control using measuring tools or the plate method'] : []),
        'Eat regular meals (don\'t skip breakfast) to maintain stable blood sugar',
        'Stay hydrated with water and avoid sugary beverages',
        'Limit dairy if it worsens symptoms (some women with PCOS are sensitive)',
        `Include ${bmiStatus !== 'normal' ? 'physical activity most days for weight loss and' : 'regular physical activity for'} insulin sensitivity${age === '60-above' ? ' with safe, age-appropriate exercises' : ''}`,
        'Consider inositol supplementation (discuss with your doctor)',
        `Track progress with ${bmiStatus !== 'normal' ? 'measurements, ' : ''}symptoms, and menstrual regularity${age === '40-59' ? ' as you approach menopause' : ''}`,
        ...(age === '60-above' ? ['Focus on preventing diabetes and cardiovascular complications'] : [])
      ];
      break;
      
    case 'fertility':
      summary = `You have PCOS ${ageModifier} and are focused on improving fertility. ${age === '40-59' ? getPCOSAgeModifier(age, 'fertility') + '. ' : ''}PCOS is a leading cause of infertility, but nutrition can significantly improve ovulation and conception chances. Focus on a low-glycemic diet that improves insulin sensitivity, includes fertility-supporting nutrients, and achieves optimal weight${age === '40-59' ? ' - time is an important factor' : ''}.`;
      
      recommendations = [
        'Follow a low-glycemic index diet to improve ovulation regularity',
        'Achieve optimal weight if overweight (even 5-10% loss can restore ovulation)',
        'Include fertility-supporting nutrients: folate, B vitamins, vitamin D, omega-3s, antioxidants',
        `Improve insulin sensitivity through diet and lifestyle${age === '40-59' ? ' - this becomes more critical with age' : ''}`,
        `Work with your healthcare provider on fertility treatments${age === '40-59' ? ' - consider reproductive endocrinologist' : ' if needed'}`
      ];
      
      detailedRecommendations = [
        'Choose low-glycemic carbohydrates to regulate insulin and improve ovulation',
        'Include lean proteins and healthy fats at every meal',
        'Add fertility-supporting foods: leafy greens (folate), fatty fish (omega-3s), berries (antioxidants)',
        'Take a prenatal vitamin with folate (400-800 mcg daily)',
        `Include foods rich in vitamin D or supplement if deficient${age === '40-59' ? ' - especially important at your age' : ''}`,
        'Eat antioxidant-rich foods: colorful fruits, vegetables, nuts, seeds',
        'Limit refined carbohydrates and added sugars that worsen insulin resistance',
        'Include inositol-rich foods or consider myo-inositol supplementation',
        'Achieve healthy weight if overweight (improves fertility significantly)',
        'Avoid trans fats and limit saturated fats',
        'Stay hydrated and limit caffeine to <200mg daily',
        'Avoid alcohol while trying to conceive',
        'Reduce exposure to endocrine disruptors (BPA, certain pesticides)',
        `Manage stress and get adequate sleep${age === '40-59' ? ' - both affect fertility and become more important with age' : ''}`,
        `Track ovulation and work with a reproductive endocrinologist${age === '40-59' ? ' promptly given your age' : ' if needed'}`,
        'Include moderate physical activity (excessive exercise can harm fertility)',
        ...(age === '40-59' ? ['Consider egg quality supplements (CoQ10, discuss with doctor)', 'Be aware of age-related fertility decline and plan accordingly'] : [])
      ];
      break;
      
    case 'symptom-control':
      summary = `You have PCOS ${ageModifier} and want to focus on controlling symptoms like irregular periods, acne, excess hair growth, and mood changes. A low-glycemic, anti-inflammatory diet can significantly reduce PCOS symptoms by improving insulin sensitivity, reducing inflammation, and balancing hormones naturally${age === '40-59' ? ' as you navigate hormonal changes' : ''}.`;
      
      recommendations = [
        'Follow a low-glycemic, anti-inflammatory diet to reduce symptoms',
        'Focus on foods that balance hormones and reduce inflammation',
        `Include omega-3 fatty acids and antioxidants${age === '40-59' ? ' - especially important for hormonal balance' : ''}`,
        'Limit foods that worsen PCOS symptoms (refined carbs, inflammatory foods)',
        `Support lifestyle factors: stress management, sleep, exercise${age === '60-above' ? ' appropriate for your age' : ''}`
      ];
      
      detailedRecommendations = [
        'Choose low-glycemic carbohydrates to stabilize insulin and reduce symptoms',
        'Include anti-inflammatory foods: fatty fish (2-3x weekly), berries, leafy greens, turmeric, ginger',
        'Add omega-3 rich foods: salmon, sardines, walnuts, flaxseeds, chia seeds',
        'Eat cruciferous vegetables to support hormone metabolism: broccoli, cauliflower, Brussels sprouts',
        'Include spearmint tea (may help reduce excess hair growth)',
        'Add cinnamon (may improve insulin sensitivity and menstrual regularity)',
        'Limit dairy if it worsens acne or other symptoms',
        'Avoid refined carbohydrates and added sugars that spike insulin',
        'Reduce inflammatory foods: processed foods, trans fats, excess omega-6 oils',
        'Include fiber-rich foods to support hormone elimination',
        'Stay hydrated and limit sugary beverages',
        `Manage stress through mindfulness, yoga, or other techniques${age === '40-59' ? ' - especially important during perimenopause' : ''}`,
        'Prioritize sleep (7-9 hours) for hormone balance',
        `Include regular physical activity to improve insulin sensitivity${age === '60-above' ? ' with safe exercises' : ''}`,
        'Consider supplements: inositol, vitamin D, omega-3s (discuss with doctor)',
        `Track symptoms to identify food triggers and improvements${age === '40-59' ? ' and monitor menopausal transition' : ''}`,
        ...(age === '40-59' ? ['Work with your doctor on symptom management as you approach menopause'] : []),
        ...(age === '60-above' ? ['Focus on long-term metabolic health and diabetes prevention'] : [])
      ];
      break;
      
    case 'prediabetes-insulin':
      summary = `You have PCOS ${ageModifier} with prediabetes or insulin resistance concerns. PCOS and insulin resistance often go hand-in-hand, significantly increasing diabetes risk${age === '40-59' || age === '60-above' ? ' - especially at your age' : ''}. Focus on a low-glycemic diet that improves insulin sensitivity, stabilizes blood sugar, and prevents progression to Type 2 diabetes while managing PCOS symptoms.`;
      
      recommendations = [
        'Follow a low-glycemic index diet focused on insulin sensitivity',
        'Control carbohydrate portions and pair with protein and healthy fats',
        'Include fiber-rich foods for blood sugar control',
        `Achieve healthy weight if overweight (5-10% loss improves insulin resistance)${age === '60-above' ? ' with gradual approach' : ''}`,
        `Monitor blood sugar and get regular diabetes screenings${age === '40-59' || age === '60-above' ? ' - especially important at your age' : ''}`
      ];
      
      detailedRecommendations = [
        `Work with a registered dietitian for PCOS and prediabetes meal planning${age === '60-above' ? ' appropriate for older adults' : ''}`,
        'Choose low-glycemic carbohydrates: whole grains, legumes, non-starchy vegetables',
        'Control carbohydrate portions (consistent amounts at each meal)',
        'Never eat carbohydrates alone - always pair with protein and healthy fats',
        'Include high-fiber foods (25-30g daily) to slow blood sugar rise',
        'Add cinnamon and apple cider vinegar (may improve insulin sensitivity)',
        'Include lean proteins at every meal for blood sugar stability',
        'Choose healthy fats that don\'t spike blood sugar: olive oil, avocados, nuts, fatty fish',
        'Limit or avoid refined carbohydrates, white flour, and added sugars',
        'Eat regular meals and don\'t skip breakfast',
        'Consider inositol supplementation (shown to improve insulin sensitivity in PCOS)',
        `Stay physically active - both cardio and resistance training improve insulin sensitivity${age === '60-above' ? ' at appropriate intensity' : ''}`,
        'Achieve and maintain healthy weight if overweight',
        `Get adequate sleep (poor sleep worsens insulin resistance)${age === '40-59' ? ' - can be challenging during perimenopause' : ''}`,
        'Manage stress (chronic stress raises cortisol and blood sugar)',
        `Monitor blood sugar if recommended and get regular A1C testing${age === '40-59' || age === '60-above' ? ' - screening frequency may increase with age' : ''}`,
        'Track food intake and blood sugar patterns if monitoring',
        ...(age === '40-59' ? ['Monitor for metabolic changes as you approach menopause'] : []),
        ...(age === '60-above' ? ['Focus on preventing diabetes and cardiovascular disease', 'Ensure adequate protein and nutrients for healthy aging'] : [])
      ];
      break;
      
    case 'not-sure':
    default:
      summary = `You have PCOS ${ageModifier} but are not sure which specific goal to focus on, or want to address all aspects. A comprehensive PCOS nutrition plan addresses weight management, fertility, symptom control, and insulin resistance simultaneously through a low-glycemic, anti-inflammatory diet that supports overall hormonal health${age === '40-59' ? ' as you navigate midlife hormonal changes' : ''}.`;
      
      recommendations = [
        'Follow a comprehensive PCOS nutrition plan addressing all aspects',
        'Focus on low-glycemic, anti-inflammatory eating',
        'Improve insulin sensitivity through diet and lifestyle',
        `Include nutrients supporting hormone balance, fertility, and metabolic health${age === '40-59' ? ' during this life stage' : ''}`,
        `Work with healthcare providers to identify your specific PCOS priorities${age === '40-59' ? ' and manage menopausal transition' : ''}`
      ];
      
      detailedRecommendations = [
        `Work with a registered dietitian experienced in PCOS${age === '60-above' ? ' and older adult nutrition' : ''} for personalized guidance`,
        'Follow low-glycemic eating: choose complex carbs, pair with protein and healthy fats',
        'Include anti-inflammatory foods: fatty fish, berries, leafy greens, turmeric, nuts',
        `Add fertility-supporting nutrients: folate, vitamin D, omega-3s, antioxidants${age === '40-59' ? ' - important if considering pregnancy' : ''}`,
        'Achieve healthy weight if overweight (benefits all PCOS aspects)',
        'Include high-fiber foods for blood sugar control and hormone elimination',
        'Choose lean proteins and healthy fats at every meal',
        'Limit refined carbohydrates, added sugars, and inflammatory foods',
        'Consider dairy reduction if symptoms worsen',
        'Stay hydrated with water',
        `Include regular physical activity (both cardio and strength training)${age === '60-above' ? ' appropriate for your fitness level' : ''}`,
        `Manage stress through mindfulness, yoga, or other stress-reduction techniques${age === '40-59' ? ' - especially important during perimenopause' : ''}`,
        'Prioritize sleep (7-9 hours) for hormonal balance',
        'Consider helpful supplements: inositol, vitamin D, omega-3s (discuss with doctor)',
        `Track symptoms, menstrual patterns, and how foods affect you${age === '40-59' ? ' including menopausal changes' : ''}`,
        'Get regular check-ups and lab work to monitor PCOS markers',
        `Work with your healthcare team to identify and prioritize your specific PCOS concerns${age === '40-59' ? ' as you age' : ''}`,
        ...(age === '40-59' ? ['Discuss how PCOS and menopause may interact', 'Monitor metabolic health closely during this transition'] : []),
        ...(age === '60-above' ? ['Focus on preventing long-term complications: diabetes, heart disease', 'Ensure adequate nutrition for healthy aging'] : [])
      ];
      break;
  }
  
  return {
    id,
    conditions: {
      age,
      gender,
      conditions: 'pcos',
      pregnancy,
      'pcos-goal': pcosGoal,
      ...(pcosGoal === 'weight-management' ? { 'pcos-bmi-status': bmiStatus } : {})
    },
    priority,
    summary,
    recommendations,
    detailedRecommendations
  };
};
