import { RecommendationRule } from '../recommendationRules';
import { generateBloodPressureRecommendation } from './bloodPressureGenerator';

/**
 * High Blood Pressure Recommendations based on changes4.txt - Smart Template System
 * Covers all 112 scenarios: 3 age groups × 2 genders × 2 pregnancy × 2 medication × 2 weight × 4 other conditions
 * 
 * LOGIC & RATIONALE (from changes4.txt):
 * 
 * Key Factors:
 * 1. Medication Status (Yes/No)
 * 2. Weight Status (Overweight/Obese - Yes/No)
 * 3. Other Conditions (Diabetes, Kidney Disease, High Cholesterol, None)
 * 4. Blood Pressure Level (Pre-hypertension, Stage 1, Stage 2, Not Sure) - for enhanced recommendations
 * 5. Salt Intake (High, Moderate, Low) - for enhanced recommendations
 * 
 * General Principles:
 * - DASH diet (Dietary Approaches to Stop Hypertension)
 * - Sodium reduction (aim for <2,300 mg/day, ideally <1,500 mg/day)
 * - Weight loss if overweight (even 5-10 lbs can lower BP)
 * - Potassium-rich foods (bananas, potatoes, leafy greens)
 * - Limit alcohol and caffeine
 * - Manage comorbid conditions (diabetes, kidney disease, cholesterol)
 * 
 * Pregnancy Considerations:
 * - Higher risk, requires careful monitoring
 * - Safe foods for pregnancy while managing BP
 * - Medication adjustments (some BP meds not safe in pregnancy)
 */

// Generate all 112+ blood pressure recommendation scenarios
const ages = ['18-39', '40-59', '60-above'];
const genders = ['male', 'female'];
const pregnancyStatuses = ['yes', 'no'];
const medicationStatuses = ['yes', 'no'];
const weightStatuses = ['yes', 'no']; // yes = overweight, no = normal weight
const otherConditionsCombinations = [
  ['none'],
  ['diabetes'],
  ['kidney-disease'],
  ['high-cholesterol'],
  ['diabetes', 'kidney-disease'],
  ['diabetes', 'high-cholesterol'],
  ['kidney-disease', 'high-cholesterol'],
  ['diabetes', 'kidney-disease', 'high-cholesterol']
];

export const bloodPressureRecommendations: RecommendationRule[] = [];

// Generate all combinations
for (const age of ages) {
  for (const gender of genders) {
    for (const pregnancy of pregnancyStatuses) {
      // Skip pregnancy scenarios for males
      if (gender === 'male' && pregnancy === 'yes') continue;
      
      // Skip pregnancy scenarios for 60+ (rare/not applicable)
      if (age === '60-above' && pregnancy === 'yes') continue;
      
      for (const medication of medicationStatuses) {
        for (const weight of weightStatuses) {
          for (const otherConditions of otherConditionsCombinations) {
            const recommendation = generateBloodPressureRecommendation(
              age,
              gender,
              pregnancy,
              medication,
              weight,
              otherConditions
            );
            bloodPressureRecommendations.push(recommendation);
          }
        }
      }
    }
  }
}

// Legacy fallback recommendations (no age specified) - for backward compatibility
const legacyRecommendations: RecommendationRule[] = [
  // ========================================
  // PREGNANT + HIGH BP SCENARIOS
  // ========================================
  
  // Pregnant + On Medication + Overweight + No Other Conditions
  {
    id: 'bp-pregnant-med-yes-weight-yes-none',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'yes',
      'blood-pressure-medication': 'yes',
      'blood-pressure-weight': 'yes',
      'blood-pressure-conditions': ['none']
    },
    priority: 'high',
    summary: 'You have high blood pressure, are on medication, pregnant, and overweight. This requires careful management to protect both you and your baby. Focus on pregnancy-safe nutrition that supports blood pressure control without attempting weight loss. Work closely with your healthcare team for medication monitoring and blood pressure management throughout pregnancy.',
    recommendations: [
      'Work with your healthcare team (OB-GYN, cardiologist, dietitian) for coordinated care',
      'Follow a pregnancy-modified DASH diet with sodium reduction (aim for <2,300 mg/day)',
      'Focus on nutrient-dense foods rich in potassium, calcium, and magnesium',
      'Manage appropriate pregnancy weight gain without attempting weight loss',
      'Monitor blood pressure regularly as directed by your healthcare provider'
    ],
    detailedRecommendations: [
      'Attend all prenatal appointments and blood pressure checks',
      'Avoid high-sodium processed foods, canned goods, and restaurant meals',
      'Read nutrition labels carefully to track sodium content',
      'Include potassium-rich foods: bananas, sweet potatoes, spinach, avocados (safe in pregnancy)',
      'Choose calcium-rich foods: low-fat dairy, fortified plant milks, leafy greens',
      'Eat magnesium-rich foods: whole grains, nuts, seeds, legumes',
      'Stay well-hydrated with water throughout the day',
      'Limit caffeine intake to <200mg daily (about 1 cup of coffee)',
      'Avoid alcohol completely during pregnancy',
      'Practice stress management and get adequate rest',
      'Report any warning signs immediately: severe headache, vision changes, upper abdominal pain, sudden swelling'
    ]
  },

  // Pregnant + On Medication + Overweight + Diabetes
  {
    id: 'bp-pregnant-med-yes-weight-yes-diabetes',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'yes',
      'blood-pressure-medication': 'yes',
      'blood-pressure-weight': 'yes'
    },
    priority: 'high',
    summary: 'You have high blood pressure with diabetes, are on medication, pregnant, and overweight. This combination requires intensive nutritional management to control both conditions while supporting healthy pregnancy. Focus on blood pressure and blood sugar control through a specialized meal plan that supports your baby without attempting weight loss during pregnancy.',
    recommendations: [
      'Work with a multidisciplinary healthcare team (OB-GYN, cardiologist, endocrinologist, dietitian)',
      'Follow a combined DASH-diabetes meal plan with sodium and carbohydrate control',
      'Monitor both blood pressure and blood sugar as directed',
      'Focus on nutrient-dense, low-sodium foods that stabilize blood sugar',
      'Manage pregnancy weight gain appropriately for your health status'
    ],
    detailedRecommendations: [
      'Attend frequent monitoring appointments for both BP and blood sugar',
      'Practice carbohydrate counting while limiting sodium intake',
      'Choose complex carbohydrates with low glycemic index and low sodium',
      'Include lean proteins, healthy fats, and plenty of non-starchy vegetables',
      'Eat regular meals and snacks to maintain stable blood sugar',
      'Focus on potassium-rich, diabetes-friendly foods (leafy greens, berries, fish)',
      'Stay hydrated and avoid all sugary and high-sodium beverages',
      'Take all prescribed medications (BP meds, insulin if needed)',
      'Practice stress reduction techniques',
      'Monitor for preeclampsia warning signs and report immediately',
      'Prepare for postpartum care for both conditions'
    ]
  },

  // Pregnant + On Medication + Overweight + Kidney Disease
  {
    id: 'bp-pregnant-med-yes-weight-yes-kidney',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'yes',
      'blood-pressure-medication': 'yes',
      'blood-pressure-weight': 'yes'
    },
    priority: 'high',
    summary: 'You have high blood pressure with kidney disease, are on medication, pregnant, and overweight. This is a high-risk pregnancy requiring specialized care from maternal-fetal medicine. Your nutrition must balance blood pressure control, kidney protection, and pregnancy needs without attempting weight loss.',
    recommendations: [
      'Receive care from maternal-fetal medicine specialists and nephrology team',
      'Follow a kidney-friendly, low-sodium DASH diet modified for pregnancy',
      'Monitor blood pressure, kidney function, and pregnancy health closely',
      'Limit sodium and manage protein, potassium, and phosphorus as directed',
      'Focus on high-quality nutrition within dietary restrictions'
    ],
    detailedRecommendations: [
      'Attend frequent medical monitoring for BP, kidney function, and baby\'s health',
      'Work with renal dietitian for personalized meal planning',
      'Limit sodium strictly (potentially <1,500 mg/day based on kidney function)',
      'Manage protein intake as recommended (kidney disease often requires moderation)',
      'Monitor potassium and phosphorus based on lab values (may need restriction)',
      'Stay within fluid recommendations if restricted',
      'Choose pregnancy-safe, kidney-friendly nutrient sources',
      'Take prescribed medications and prenatal vitamins as directed',
      'Report any symptoms: decreased urination, severe swelling, shortness of breath',
      'Prepare for specialized postpartum kidney and BP management'
    ]
  },

  // Pregnant + On Medication + Normal Weight
  {
    id: 'bp-pregnant-med-yes-weight-no',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'yes',
      'blood-pressure-medication': 'yes',
      'blood-pressure-weight': 'no'
    },
    priority: 'high',
    summary: 'You have high blood pressure, are on medication, and pregnant at a healthy weight. Focus on blood pressure control through low-sodium nutrition and pregnancy-safe foods while supporting healthy pregnancy weight gain. Work closely with your healthcare team to monitor your condition throughout pregnancy.',
    recommendations: [
      'Maintain coordinated care with OB-GYN and cardiologist',
      'Follow a pregnancy-modified DASH diet with sodium reduction',
      'Monitor blood pressure regularly throughout pregnancy',
      'Eat nutrient-dense foods to support healthy pregnancy weight gain',
      'Focus on potassium, calcium, and magnesium-rich foods'
    ],
    detailedRecommendations: [
      'Limit sodium to <2,300 mg/day (or as directed by healthcare provider)',
      'Avoid processed, canned, and restaurant foods high in sodium',
      'Include fresh fruits, vegetables, whole grains, lean proteins, and low-fat dairy',
      'Choose potassium-rich foods: bananas, potatoes, leafy greens, oranges',
      'Get adequate calcium through dairy or fortified alternatives',
      'Stay hydrated with water throughout the day',
      'Limit caffeine and avoid alcohol completely',
      'Take prescribed BP medications and prenatal vitamins',
      'Practice stress management and adequate rest',
      'Watch for preeclampsia warning signs and report immediately'
    ]
  },

  // Pregnant + No Medication + Overweight
  {
    id: 'bp-pregnant-med-no-weight-yes',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'yes',
      'blood-pressure-medication': 'no',
      'blood-pressure-weight': 'yes'
    },
    priority: 'high',
    summary: 'You have high blood pressure during pregnancy, are not on medication, and are overweight. This requires close monitoring as you\'re managing blood pressure through lifestyle alone during pregnancy. Focus on aggressive sodium reduction, DASH diet principles, and appropriate pregnancy weight gain without attempting weight loss.',
    recommendations: [
      'Work closely with your healthcare team for frequent blood pressure monitoring',
      'Follow a strict low-sodium DASH diet',
      'Focus on lifestyle modifications to control blood pressure naturally',
      'Manage appropriate pregnancy weight gain for your situation',
      'Be prepared to start medication if blood pressure becomes uncontrolled'
    ],
    detailedRecommendations: [
      'Strictly limit sodium to <1,500-2,000 mg/day',
      'Eliminate high-sodium processed foods, fast food, and restaurant meals',
      'Cook at home using fresh, whole ingredients',
      'Use herbs and spices instead of salt for flavoring',
      'Include plenty of potassium-rich foods (fruits, vegetables, legumes)',
      'Eat calcium and magnesium-rich foods daily',
      'Stay well-hydrated with water',
      'Avoid caffeine and alcohol',
      'Practice daily stress reduction and get adequate sleep',
      'Monitor blood pressure at home if recommended',
      'Report any elevation in blood pressure or warning signs immediately'
    ]
  },

  // Pregnant + No Medication + Normal Weight
  {
    id: 'bp-pregnant-med-no-weight-no',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'yes',
      'blood-pressure-medication': 'no',
      'blood-pressure-weight': 'no'
    },
    priority: 'high',
    summary: 'You have high blood pressure during pregnancy, are not on medication, and are at a healthy weight. Your blood pressure management focuses on dietary sodium reduction and DASH diet principles while maintaining your healthy weight and supporting pregnancy nutrition.',
    recommendations: [
      'Work with your healthcare team for regular blood pressure monitoring',
      'Follow a low-sodium DASH diet for pregnancy',
      'Focus on potassium, calcium, and magnesium-rich foods',
      'Support healthy pregnancy weight gain (typically 25-35 lbs)',
      'Practice lifestyle modifications to keep blood pressure controlled'
    ],
    detailedRecommendations: [
      'Limit sodium to <2,000 mg/day',
      'Choose fresh, whole foods and avoid processed high-sodium items',
      'Include abundant fruits, vegetables, whole grains, and lean proteins',
      'Eat potassium-rich foods daily: bananas, sweet potatoes, leafy greens',
      'Get adequate calcium through dairy or fortified alternatives',
      'Include magnesium sources: nuts, seeds, whole grains, legumes',
      'Stay hydrated with water',
      'Limit caffeine and avoid alcohol',
      'Practice stress management techniques',
      'Get regular, moderate physical activity as approved by your doctor',
      'Monitor for any signs of worsening blood pressure or preeclampsia'
    ]
  },

  // ========================================
  // NON-PREGNANT + HIGH BP SCENARIOS
  // ========================================
  
  // Not Pregnant + On Medication + Overweight + No Other Conditions
  {
    id: 'bp-not-pregnant-med-yes-weight-yes-none',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'no',
      'blood-pressure-medication': 'yes',
      'blood-pressure-weight': 'yes',
      'blood-pressure-conditions': ['none']
    },
    priority: 'medium',
    summary: 'You have high blood pressure, are on medication, and are overweight. Weight loss of even 5-10 pounds can significantly lower blood pressure, potentially reducing your medication needs. Focus on the DASH diet with sodium reduction and gradual, sustainable weight loss to better control your blood pressure.',
    recommendations: [
      'Follow the DASH (Dietary Approaches to Stop Hypertension) eating plan',
      'Aim for gradual weight loss of 1-2 pounds per week (target 5-10% body weight)',
      'Limit sodium intake to <2,300 mg/day, ideally <1,500 mg/day',
      'Include potassium, calcium, and magnesium-rich foods daily',
      'Monitor blood pressure regularly and work with your healthcare provider on medication adjustments'
    ],
    detailedRecommendations: [
      'Fill half your plate with vegetables and fruits (especially potassium-rich options)',
      'Choose whole grains over refined grains',
      'Include lean proteins: fish (especially fatty fish with omega-3s), poultry, legumes',
      'Limit red meat and choose low-fat dairy products',
      'Reduce sodium by avoiding processed foods, canned goods, and restaurant meals',
      'Read nutrition labels and choose low-sodium options',
      'Use herbs, spices, lemon, and vinegar instead of salt for flavoring',
      'Stay hydrated with water and avoid high-sodium beverages',
      'Limit alcohol to moderate amounts (if any): 1 drink/day for women, 2 for men',
      'Reduce caffeine if it affects your blood pressure',
      'Include physical activity most days (consult your doctor first)',
      'Track your food intake, weight, and blood pressure to monitor progress'
    ]
  },

  // Not Pregnant + On Medication + Overweight + Diabetes
  {
    id: 'bp-not-pregnant-med-yes-weight-yes-diabetes',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'no',
      'blood-pressure-medication': 'yes',
      'blood-pressure-weight': 'yes'
    },
    priority: 'medium',
    summary: 'You have both high blood pressure and diabetes, are on medication, and are overweight. Weight loss will benefit both conditions. Focus on a combined DASH-diabetes meal plan with sodium and carbohydrate control, emphasizing whole foods and portion management for sustainable weight loss and better blood pressure and blood sugar control.',
    recommendations: [
      'Follow a combined DASH-diabetes eating plan with sodium and carbohydrate control',
      'Aim for weight loss of 5-10% of body weight (1-2 lbs per week)',
      'Limit sodium to <2,300 mg/day (ideally <1,500 mg/day)',
      'Choose low glycemic index carbohydrates and control portions',
      'Monitor both blood pressure and blood sugar regularly'
    ],
    detailedRecommendations: [
      'Work with a registered dietitian for personalized meal planning',
      'Use the plate method: 1/2 non-starchy vegetables, 1/4 lean protein, 1/4 complex carbs',
      'Choose low-sodium, diabetes-friendly foods (fresh vegetables, lean proteins, whole grains)',
      'Include potassium-rich, low-glycemic foods (leafy greens, berries, beans)',
      'Limit refined carbohydrates and added sugars',
      'Avoid high-sodium processed foods, canned goods, and fast food',
      'Practice portion control and regular meal timing',
      'Stay hydrated with water (avoid sugary and high-sodium drinks)',
      'Limit alcohol and monitor its effect on blood sugar',
      'Take all prescribed medications as directed',
      'Stay physically active to benefit both conditions',
      'Track food intake, weight, blood pressure, and blood sugar levels'
    ]
  },

  // Not Pregnant + On Medication + Overweight + Kidney Disease
  {
    id: 'bp-not-pregnant-med-yes-weight-yes-kidney',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'no',
      'blood-pressure-medication': 'yes',
      'blood-pressure-weight': 'yes'
    },
    priority: 'high',
    summary: 'You have high blood pressure with kidney disease, are on medication, and are overweight. This requires specialized nutrition to protect your kidneys while managing blood pressure and weight. Work with a renal dietitian for a personalized plan that balances sodium restriction, protein management, and weight loss while monitoring potassium and phosphorus.',
    recommendations: [
      'Work with a renal dietitian for kidney-friendly, low-sodium meal planning',
      'Limit sodium strictly (aim for <1,500 mg/day or as directed)',
      'Manage protein intake as recommended for your kidney function stage',
      'Monitor potassium and phosphorus based on lab values',
      'Aim for gradual weight loss while protecting kidney function'
    ],
    detailedRecommendations: [
      'Follow kidney-stage-appropriate protein recommendations (may need moderation)',
      'Strictly limit sodium from all sources',
      'Monitor potassium intake (may need restriction depending on kidney function)',
      'Limit phosphorus-rich foods if needed (dairy, processed foods, dark colas)',
      'Choose high-quality, kidney-friendly protein sources',
      'Stay within fluid recommendations if you have fluid restrictions',
      'Avoid processed and canned foods high in sodium, potassium, and phosphorus',
      'Read labels carefully for hidden sodium and phosphorus additives',
      'Take prescribed medications and phosphate binders as directed',
      'Monitor kidney function tests, blood pressure, and weight regularly',
      'Work closely with your nephrologist and healthcare team'
    ]
  },

  // Not Pregnant + On Medication + Overweight + High Cholesterol
  {
    id: 'bp-not-pregnant-med-yes-weight-yes-cholesterol',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'no',
      'blood-pressure-medication': 'yes',
      'blood-pressure-weight': 'yes'
    },
    priority: 'medium',
    summary: 'You have both high blood pressure and high cholesterol, are on medication, and are overweight. Weight loss will improve both conditions. Focus on a heart-healthy DASH diet that also lowers cholesterol: emphasize whole grains, fruits, vegetables, lean proteins, and healthy fats while limiting sodium, saturated fat, and trans fats.',
    recommendations: [
      'Follow a heart-healthy DASH diet that addresses both BP and cholesterol',
      'Aim for weight loss of 5-10% of body weight',
      'Limit sodium (<2,300 mg/day) and saturated fat (<7% of calories)',
      'Include soluble fiber and omega-3 fatty acids for cholesterol management',
      'Monitor blood pressure, cholesterol, and weight regularly'
    ],
    detailedRecommendations: [
      'Choose heart-healthy fats: olive oil, avocados, nuts, fatty fish',
      'Limit saturated fat from red meat, full-fat dairy, and fried foods',
      'Avoid trans fats completely (check labels for partially hydrogenated oils)',
      'Include soluble fiber daily: oats, barley, beans, apples, citrus fruits',
      'Eat fatty fish twice weekly (salmon, mackerel, sardines) for omega-3s',
      'Choose lean proteins: skinless poultry, fish, legumes, tofu',
      'Fill half your plate with vegetables and fruits',
      'Select whole grains and avoid refined grains',
      'Strictly limit sodium from processed and restaurant foods',
      'Stay hydrated and limit alcohol',
      'Take prescribed medications (BP and cholesterol) as directed',
      'Include regular physical activity for both conditions'
    ]
  },

  // Not Pregnant + On Medication + Normal Weight + No Other Conditions
  {
    id: 'bp-not-pregnant-med-yes-weight-no-none',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'no',
      'blood-pressure-medication': 'yes',
      'blood-pressure-weight': 'no',
      'blood-pressure-conditions': ['none']
    },
    priority: 'medium',
    summary: 'You have high blood pressure, are on medication, and maintain a healthy weight. Your focus should be on blood pressure control through the DASH diet and sodium reduction while maintaining your healthy weight. Continue your medication and work with your healthcare provider to optimize your blood pressure management.',
    recommendations: [
      'Follow the DASH eating plan to support blood pressure control',
      'Limit sodium to <2,300 mg/day, ideally <1,500 mg/day',
      'Maintain your healthy weight through balanced nutrition',
      'Include potassium, calcium, and magnesium-rich foods daily',
      'Monitor blood pressure regularly and take medications as prescribed'
    ],
    detailedRecommendations: [
      'Eat plenty of fruits and vegetables (especially potassium-rich options)',
      'Choose whole grains, lean proteins, and low-fat dairy',
      'Avoid high-sodium processed foods, canned goods, and restaurant meals',
      'Use herbs, spices, and other salt-free seasonings for flavor',
      'Include potassium-rich foods: bananas, potatoes, leafy greens, oranges, tomatoes',
      'Get adequate calcium from dairy or fortified alternatives',
      'Include magnesium sources: whole grains, nuts, seeds, legumes',
      'Stay hydrated with water',
      'Limit alcohol and caffeine if they affect your blood pressure',
      'Practice stress management techniques',
      'Stay physically active most days of the week',
      'Attend regular check-ups and monitor your blood pressure at home if recommended'
    ]
  },

  // Not Pregnant + No Medication + Overweight + No Other Conditions
  {
    id: 'bp-not-pregnant-med-no-weight-yes-none',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'no',
      'blood-pressure-medication': 'no',
      'blood-pressure-weight': 'yes',
      'blood-pressure-conditions': ['none']
    },
    priority: 'medium',
    summary: 'You have high blood pressure, are not on medication, and are overweight. You have an excellent opportunity to control your blood pressure through lifestyle changes alone. Weight loss and sodium reduction through the DASH diet can significantly lower blood pressure, potentially avoiding or delaying the need for medication.',
    recommendations: [
      'Prioritize weight loss of 5-10% of your body weight (1-2 lbs per week)',
      'Follow the DASH diet with aggressive sodium reduction',
      'Limit sodium to <1,500 mg/day for maximum blood pressure benefit',
      'Increase physical activity to at least 150 minutes per week',
      'Monitor blood pressure regularly and work with your healthcare provider'
    ],
    detailedRecommendations: [
      'Strictly limit sodium by avoiding processed, canned, and restaurant foods',
      'Cook at home using fresh, whole ingredients',
      'Use herbs, spices, citrus, and vinegar instead of salt',
      'Fill half your plate with fruits and vegetables (emphasize potassium-rich options)',
      'Choose whole grains, lean proteins, and low-fat dairy products',
      'Include potassium-rich foods daily to help lower blood pressure',
      'Practice portion control to support weight loss',
      'Stay hydrated with water and avoid sugary beverages',
      'Limit alcohol to moderate amounts or eliminate completely',
      'Reduce caffeine if it raises your blood pressure',
      'Build a consistent exercise routine (cardio and strength training)',
      'Practice stress management and get adequate sleep',
      'Track your food intake, weight, and blood pressure to monitor progress'
    ]
  },

  // Not Pregnant + No Medication + Normal Weight + No Other Conditions
  {
    id: 'bp-not-pregnant-med-no-weight-no-none',
    conditions: {
      conditions: 'high-blood-pressure',
      pregnancy: 'no',
      'blood-pressure-medication': 'no',
      'blood-pressure-weight': 'no',
      'blood-pressure-conditions': ['none']
    },
    priority: 'medium',
    summary: 'You have high blood pressure at a healthy weight and are not on medication. Your blood pressure management focuses on the DASH diet with sodium reduction and other lifestyle modifications. Since you\'re at a healthy weight, your high blood pressure may be related to sodium intake, genetics, stress, or other factors.',
    recommendations: [
      'Follow the DASH eating plan for blood pressure control',
      'Strictly limit sodium to <1,500 mg/day',
      'Maintain your healthy weight through balanced nutrition',
      'Include potassium, calcium, and magnesium-rich foods daily',
      'Monitor blood pressure regularly and stay active'
    ],
    detailedRecommendations: [
      'Eliminate high-sodium foods: processed meats, canned goods, fast food, restaurant meals',
      'Read nutrition labels carefully and choose low-sodium options',
      'Cook at home using fresh ingredients and salt-free seasonings',
      'Emphasize potassium-rich foods to help lower blood pressure naturally',
      'Include plenty of fruits, vegetables, whole grains, and lean proteins',
      'Choose low-fat dairy or fortified alternatives for calcium',
      'Include magnesium-rich nuts, seeds, whole grains, and legumes',
      'Stay well-hydrated with water',
      'Limit alcohol and caffeine',
      'Practice stress reduction techniques daily',
      'Get adequate sleep (7-9 hours nightly)',
      'Stay physically active most days of the week',
      'Monitor blood pressure at home and attend regular check-ups'
    ]
  }
];

// Merge generated and legacy recommendations
bloodPressureRecommendations.push(...legacyRecommendations);

console.log(`✅ Generated ${bloodPressureRecommendations.length} blood pressure recommendation scenarios`);

// Export blood pressure-specific utility functions
export const getBloodPressureRecommendation = (answers: any): RecommendationRule | null => {
  // Find matching recommendation based on answers
  for (const rule of bloodPressureRecommendations) {
    let matches = true;
    for (const [key, value] of Object.entries(rule.conditions)) {
      if (Array.isArray(value)) {
        const answerValue = answers[key];
        if (!Array.isArray(answerValue) || !value.every(v => answerValue.includes(v))) {
          matches = false;
          break;
        }
      } else if (answers[key] !== value) {
        matches = false;
        break;
      }
    }
    if (matches) return rule;
  }
  return null;
};
