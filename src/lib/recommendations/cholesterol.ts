import { RecommendationRule } from '../recommendationRules';
import { generateCholesterolRecommendation } from './cholesterolGenerator';

/**
 * High Cholesterol Recommendations based on changes5.txt - Smart Template System
 * Covers all 128 scenarios: 3 age groups × 2 genders × 2 pregnancy × 2 confirmed × 4 related conditions
 * 
 * LOGIC & RATIONALE (from changes5.txt):
 * 
 * Key Factors:
 * 1. Cholesterol Confirmation (Yes/No - have you been told you have high cholesterol)
 * 2. Related Conditions (Overweight/Obesity, Diabetes, Family history of early heart disease, Not sure)
 * 
 * General Principles:
 * - Reduce saturated fat (<7% of total calories)
 * - Eliminate trans fats completely
 * - Increase soluble fiber (oats, barley, beans, apples, pears)
 * - Include omega-3 fatty acids (fatty fish, flaxseeds, walnuts)
 * - Choose plant sterols/stanols (fortified foods)
 * - Emphasize heart-healthy fats (olive oil, avocados, nuts)
 * - Weight loss if overweight (improves lipid profile)
 * - Manage comorbid conditions (diabetes, obesity)
 * 
 * Pregnancy Considerations:
 * - Cholesterol medication typically stopped during pregnancy
 * - Focus on heart-healthy diet safe for pregnancy
 * - Balance cholesterol management with pregnancy nutrition needs
 */

// Generate all 128+ cholesterol recommendation scenarios
const ages = ['18-39', '40-59', '60-above'];
const genders = ['male', 'female'];
const pregnancyStatuses = ['yes', 'no'];
const confirmedStatuses = ['yes', 'no'];
const relatedConditionsCombinations = [
  [], // No related conditions specified
  ['overweight-obesity'],
  ['diabetes'],
  ['family-history'],
  ['not-sure'],
  ['overweight-obesity', 'diabetes'],
  ['overweight-obesity', 'family-history'],
  ['diabetes', 'family-history'],
  ['overweight-obesity', 'diabetes', 'family-history']
];

export const cholesterolRecommendations: RecommendationRule[] = [];

// Generate all combinations
for (const age of ages) {
  for (const gender of genders) {
    for (const pregnancy of pregnancyStatuses) {
      // Skip pregnancy scenarios for males
      if (gender === 'male' && pregnancy === 'yes') continue;
      
      // Skip pregnancy scenarios for 60+ (rare/not applicable)
      if (age === '60-above' && pregnancy === 'yes') continue;
      
      for (const confirmed of confirmedStatuses) {
        for (const relatedConditions of relatedConditionsCombinations) {
          const recommendation = generateCholesterolRecommendation(
            age,
            gender,
            pregnancy,
            confirmed,
            relatedConditions
          );
          cholesterolRecommendations.push(recommendation);
        }
      }
    }
  }
}

// Legacy fallback recommendations (no age specified) - for backward compatibility
const legacyRecommendations: RecommendationRule[] = [
  // ========================================
  // CONFIRMED HIGH CHOLESTEROL
  // ========================================
  
  // Confirmed + Pregnant + Overweight/Obesity
  {
    id: 'cholesterol-confirmed-pregnant-overweight',
    conditions: {
      conditions: 'high-cholesterol',
      pregnancy: 'yes',
      'cholesterol-confirmed': 'yes',
      'cholesterol-related-conditions': ['overweight-obesity']
    },
    priority: 'high',
    summary: 'You have confirmed high cholesterol, are pregnant, and overweight. Cholesterol medications are typically stopped during pregnancy, so dietary management becomes crucial. Focus on a heart-healthy, pregnancy-safe diet that manages cholesterol while supporting your baby\'s development. Manage appropriate pregnancy weight gain without attempting weight loss.',
    recommendations: [
      'Work with your healthcare team (OB-GYN, cardiologist, dietitian) for coordinated care',
      'Follow a heart-healthy diet that\'s safe for pregnancy',
      'Focus on reducing saturated fat and eliminating trans fats',
      'Include soluble fiber and omega-3 fatty acids safe for pregnancy',
      'Manage appropriate pregnancy weight gain for your situation'
    ],
    detailedRecommendations: [
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
      'Monitor cholesterol levels and discuss postpartum medication plans'
    ]
  },

  // Confirmed + Pregnant + Diabetes
  {
    id: 'cholesterol-confirmed-pregnant-diabetes',
    conditions: {
      conditions: 'high-cholesterol',
      pregnancy: 'yes',
      'cholesterol-confirmed': 'yes',
      'cholesterol-related-conditions': ['diabetes']
    },
    priority: 'high',
    summary: 'You have confirmed high cholesterol with diabetes and are pregnant. This requires careful nutrition management for all three conditions. Focus on a heart-healthy, diabetes-appropriate, pregnancy-safe meal plan that manages cholesterol and blood sugar while supporting your baby\'s growth.',
    recommendations: [
      'Work with a multidisciplinary team (OB-GYN, endocrinologist, cardiologist, dietitian)',
      'Follow a combined heart-healthy and diabetes meal plan for pregnancy',
      'Manage both cholesterol and blood sugar through dietary choices',
      'Include heart-healthy, low-glycemic foods safe for pregnancy',
      'Monitor both conditions closely throughout pregnancy'
    ],
    detailedRecommendations: [
      'Choose lean proteins with minimal saturated fat',
      'Select low-glycemic, high-fiber carbohydrates (whole grains, legumes)',
      'Limit saturated fat and avoid trans fats',
      'Include soluble fiber to benefit both cholesterol and blood sugar',
      'Eat omega-3 rich fish twice weekly (pregnancy-safe, low-mercury options)',
      'Pair carbohydrates with protein and healthy fats to stabilize blood sugar',
      'Include non-starchy vegetables abundantly',
      'Avoid added sugars and high-fat, high-sugar foods',
      'Choose heart-healthy fats in appropriate portions',
      'Monitor blood sugar as directed and track cholesterol levels',
      'Take prescribed medications (insulin if needed; cholesterol meds typically stopped)',
      'Prepare for postpartum management of both conditions'
    ]
  },

  // Confirmed + Pregnant + Family History
  {
    id: 'cholesterol-confirmed-pregnant-family-history',
    conditions: {
      conditions: 'high-cholesterol',
      pregnancy: 'yes',
      'cholesterol-confirmed': 'yes',
      'cholesterol-related-conditions': ['family-history']
    },
    priority: 'high',
    summary: 'You have confirmed high cholesterol with a family history of early heart disease and are pregnant. Your genetic risk combined with current high cholesterol requires aggressive dietary management during pregnancy. Focus on heart-healthy nutrition that\'s safe for pregnancy while supporting your baby\'s development.',
    recommendations: [
      'Work closely with your healthcare team given your genetic risk',
      'Follow an aggressive heart-healthy diet safe for pregnancy',
      'Focus on reducing saturated fat and increasing protective nutrients',
      'Include omega-3 fatty acids and soluble fiber daily',
      'Discuss postpartum cholesterol management and family risk factors'
    ],
    detailedRecommendations: [
      'Strictly limit saturated fat (<7% of calories)',
      'Eliminate trans fats completely',
      'Choose lean proteins and plant-based proteins frequently',
      'Include soluble fiber at every meal (oats, beans, fruits, vegetables)',
      'Eat fatty fish twice weekly for omega-3s (pregnancy-safe options)',
      'Use heart-healthy oils: olive oil, canola oil',
      'Include nuts and seeds for healthy fats and fiber',
      'Eat abundant colorful fruits and vegetables for antioxidants',
      'Choose whole grains exclusively',
      'Limit dietary cholesterol intake',
      'Stay active with pregnancy-appropriate exercise',
      'Monitor cholesterol levels and plan for postpartum medication if needed',
      'Educate yourself about family heart disease risk and prevention'
    ]
  },

  // Confirmed + Not Pregnant + Overweight/Obesity
  {
    id: 'cholesterol-confirmed-not-pregnant-overweight',
    conditions: {
      conditions: 'high-cholesterol',
      pregnancy: 'no',
      'cholesterol-confirmed': 'yes',
      'cholesterol-related-conditions': ['overweight-obesity']
    },
    priority: 'medium',
    summary: 'You have confirmed high cholesterol and are overweight. Weight loss of even 5-10% of your body weight can significantly improve your cholesterol profile. Focus on a heart-healthy diet that emphasizes whole foods, healthy fats, soluble fiber, and omega-3s while achieving gradual, sustainable weight loss.',
    recommendations: [
      'Aim for weight loss of 5-10% of body weight (1-2 lbs per week)',
      'Follow a heart-healthy eating plan (Mediterranean or Portfolio diet)',
      'Reduce saturated fat to <7% of calories and eliminate trans fats',
      'Include soluble fiber (5-10g daily) and omega-3 fatty acids',
      'Take cholesterol medication as prescribed and monitor lipid levels'
    ],
    detailedRecommendations: [
      'Choose lean proteins: fish, skinless poultry, legumes, tofu',
      'Limit red meat and choose lean cuts only occasionally',
      'Use heart-healthy fats: olive oil, avocados, nuts, seeds (in controlled portions)',
      'Eliminate trans fats and limit saturated fat (full-fat dairy, fatty meats, fried foods)',
      'Include soluble fiber daily: oatmeal, barley, beans, lentils, apples, berries',
      'Eat fatty fish twice weekly: salmon, mackerel, sardines, trout',
      'Add plant sterols/stanols (fortified margarine, orange juice) for additional LDL reduction',
      'Fill half your plate with vegetables and fruits',
      'Choose whole grains over refined grains',
      'Practice portion control to support weight loss',
      'Limit added sugars and refined carbohydrates',
      'Stay hydrated with water and avoid high-calorie beverages',
      'Include regular physical activity (aerobic and resistance training)',
      'Monitor cholesterol levels every 3-6 months to track progress'
    ]
  },

  // Confirmed + Not Pregnant + Diabetes
  {
    id: 'cholesterol-confirmed-not-pregnant-diabetes',
    conditions: {
      conditions: 'high-cholesterol',
      pregnancy: 'no',
      'cholesterol-confirmed': 'yes',
      'cholesterol-related-conditions': ['diabetes']
    },
    priority: 'medium',
    summary: 'You have confirmed high cholesterol with diabetes. This combination significantly increases cardiovascular risk. Focus on a meal plan that manages both conditions: low-glycemic, high-fiber, heart-healthy foods with controlled carbohydrates and minimal saturated fat. Weight loss is beneficial if you\'re overweight.',
    recommendations: [
      'Follow a combined heart-healthy and diabetes meal plan',
      'Choose low-glycemic, high-fiber carbohydrates',
      'Limit saturated fat (<7% of calories) and eliminate trans fats',
      'Include soluble fiber and omega-3 fatty acids for both conditions',
      'Monitor cholesterol and blood sugar regularly; take medications as prescribed'
    ],
    detailedRecommendations: [
      'Select lean proteins with minimal saturated fat',
      'Choose complex, low-glycemic carbohydrates: whole grains, legumes, non-starchy vegetables',
      'Include soluble fiber to benefit both cholesterol and blood sugar control',
      'Eat fatty fish twice weekly for heart-healthy omega-3s',
      'Use heart-healthy fats in appropriate portions (olive oil, avocados, nuts)',
      'Limit red meat, full-fat dairy, and fried foods',
      'Avoid trans fats and minimize saturated fat',
      'Practice carbohydrate counting or portion control for blood sugar management',
      'Pair carbohydrates with protein and healthy fats',
      'Avoid added sugars and refined carbohydrates',
      'Stay physically active to benefit both conditions',
      'Take all prescribed medications (diabetes and cholesterol)',
      'Monitor A1C and lipid panels regularly',
      'Work with a registered dietitian for personalized meal planning'
    ]
  },

  // Confirmed + Not Pregnant + Family History
  {
    id: 'cholesterol-confirmed-not-pregnant-family-history',
    conditions: {
      conditions: 'high-cholesterol',
      pregnancy: 'no',
      'cholesterol-confirmed': 'yes',
      'cholesterol-related-conditions': ['family-history']
    },
    priority: 'medium',
    summary: 'You have confirmed high cholesterol with a family history of early heart disease, indicating strong genetic risk. Aggressive lifestyle and dietary management is crucial. Focus on a heart-healthy diet with very low saturated fat, abundant soluble fiber, omega-3s, and plant sterols. Medication is likely important given your genetic risk.',
    recommendations: [
      'Follow an aggressive heart-healthy diet (Portfolio or Mediterranean diet)',
      'Strictly limit saturated fat to <7% of calories and eliminate all trans fats',
      'Include soluble fiber (10-25g daily), omega-3s, and plant sterols/stanols',
      'Achieve and maintain a healthy weight',
      'Take cholesterol medication as prescribed and monitor lipid levels closely'
    ],
    detailedRecommendations: [
      'Choose plant-based proteins frequently: legumes, tofu, tempeh',
      'Eat fatty fish at least twice weekly for omega-3s',
      'Select lean poultry and limit red meat to rare occasions',
      'Eliminate trans fats and strictly limit saturated fats',
      'Use exclusively heart-healthy oils: olive oil, canola oil',
      'Include soluble fiber at every meal: oats, barley, beans, fruits, vegetables',
      'Add plant sterols/stanols daily (2g target) from fortified foods',
      'Eat abundant colorful fruits and vegetables (aim for 7-9 servings daily)',
      'Choose whole grains exclusively',
      'Include nuts and seeds daily for healthy fats and fiber',
      'Limit dietary cholesterol intake',
      'Avoid processed and fried foods',
      'Stay physically active most days (150+ minutes weekly)',
      'Don\'t smoke and limit alcohol',
      'Monitor cholesterol every 3-6 months and discuss family screening with relatives'
    ]
  },

  // Confirmed + Not Pregnant + Not Sure about Related Conditions
  {
    id: 'cholesterol-confirmed-not-pregnant-not-sure',
    conditions: {
      conditions: 'high-cholesterol',
      pregnancy: 'no',
      'cholesterol-confirmed': 'yes',
      'cholesterol-related-conditions': ['not-sure']
    },
    priority: 'medium',
    summary: 'You have confirmed high cholesterol but are unsure about related conditions. Focus on a comprehensive heart-healthy diet while working with your healthcare provider to assess other risk factors (obesity, diabetes, family history). This will help personalize your treatment plan and determine if additional interventions are needed.',
    recommendations: [
      'Follow a heart-healthy eating plan for cholesterol management',
      'Work with your healthcare provider to assess other cardiovascular risk factors',
      'Reduce saturated fat and eliminate trans fats',
      'Include soluble fiber, omega-3s, and heart-healthy fats',
      'Take cholesterol medication as prescribed and monitor lipid levels'
    ],
    detailedRecommendations: [
      'Schedule a comprehensive cardiovascular risk assessment with your doctor',
      'Discuss family history, diabetes screening, and weight assessment',
      'Choose lean proteins: fish, poultry, legumes, plant-based options',
      'Limit saturated fat from red meat, full-fat dairy, and tropical oils',
      'Eliminate trans fats completely',
      'Include soluble fiber daily: oats, beans, apples, berries',
      'Eat fatty fish twice weekly for omega-3 fatty acids',
      'Use heart-healthy fats: olive oil, avocados, nuts, seeds',
      'Fill half your plate with fruits and vegetables',
      'Choose whole grains over refined grains',
      'Maintain a healthy weight through balanced nutrition',
      'Stay physically active most days',
      'Limit alcohol and avoid smoking',
      'Monitor cholesterol levels and adjust treatment as needed'
    ]
  },

  // Confirmed + Not Pregnant + No Related Conditions
  {
    id: 'cholesterol-confirmed-not-pregnant-none',
    conditions: {
      conditions: 'high-cholesterol',
      pregnancy: 'no',
      'cholesterol-confirmed': 'yes'
    },
    priority: 'medium',
    summary: 'You have confirmed high cholesterol without other identified risk factors like obesity, diabetes, or family history. Your cholesterol may be related to diet, genetics, or other factors. Focus on a heart-healthy diet with reduced saturated fat, increased soluble fiber, and omega-3s. Medication may be needed depending on your cholesterol levels.',
    recommendations: [
      'Follow a heart-healthy eating plan for cholesterol management',
      'Reduce saturated fat to <7% of calories and eliminate trans fats',
      'Include soluble fiber (5-10g daily) and omega-3 fatty acids',
      'Maintain a healthy weight through balanced nutrition',
      'Take cholesterol medication if prescribed and monitor lipid levels'
    ],
    detailedRecommendations: [
      'Choose lean proteins: fish, skinless poultry, legumes, tofu',
      'Limit red meat and select lean cuts when consuming',
      'Use heart-healthy fats: olive oil, canola oil, avocados, nuts, seeds',
      'Eliminate trans fats and limit saturated fat sources',
      'Include soluble fiber daily: oatmeal, barley, beans, lentils, apples, pears',
      'Eat fatty fish twice weekly: salmon, mackerel, sardines',
      'Consider plant sterol/stanol-fortified foods for additional LDL reduction',
      'Eat plenty of fruits and vegetables (aim for 5-9 servings daily)',
      'Choose whole grains over refined grains',
      'Limit dietary cholesterol intake',
      'Stay physically active with regular aerobic and strength training',
      'Maintain a healthy weight',
      'Limit alcohol and avoid smoking',
      'Monitor cholesterol levels every 3-6 months to assess diet effectiveness'
    ]
  },

  // ========================================
  // NOT CONFIRMED / SCREENING
  // ========================================
  
  // Not Confirmed + Overweight/Obesity (Screening/Prevention)
  {
    id: 'cholesterol-not-confirmed-overweight',
    conditions: {
      conditions: 'high-cholesterol',
      'cholesterol-confirmed': 'no',
      'cholesterol-related-conditions': ['overweight-obesity']
    },
    priority: 'low',
    summary: 'You selected high cholesterol but haven\'t been diagnosed with it. If you\'re overweight and concerned about cholesterol, it\'s important to get tested. Meanwhile, focusing on heart-healthy eating and weight loss can help prevent high cholesterol and improve your overall cardiovascular health.',
    recommendations: [
      'Get your cholesterol levels tested (lipid panel) to know your current status',
      'Focus on weight loss if overweight (5-10% of body weight)',
      'Follow a heart-healthy, preventive eating plan',
      'Include soluble fiber, omega-3s, and heart-healthy fats',
      'Stay physically active to maintain healthy cholesterol levels'
    ],
    detailedRecommendations: [
      'Schedule a lipid panel with your healthcare provider',
      'Adopt heart-healthy eating habits for prevention',
      'Choose lean proteins and plant-based protein sources',
      'Limit saturated fat and avoid trans fats',
      'Include soluble fiber from oats, beans, fruits, and vegetables',
      'Eat fatty fish twice weekly or take omega-3 supplements',
      'Use olive oil and other heart-healthy fats',
      'Maintain or achieve a healthy weight through balanced eating',
      'Fill half your plate with vegetables and fruits',
      'Choose whole grains and limit refined carbohydrates',
      'Stay physically active most days of the week',
      'Avoid smoking and limit alcohol',
      'Get regular cholesterol screenings based on your age and risk factors',
      'Learn about your family history of heart disease and cholesterol'
    ]
  },

  // Not Confirmed + Diabetes (Screening/Prevention)
  {
    id: 'cholesterol-not-confirmed-diabetes',
    conditions: {
      conditions: 'high-cholesterol',
      'cholesterol-confirmed': 'no',
      'cholesterol-related-conditions': ['diabetes']
    },
    priority: 'medium',
    summary: 'You have diabetes and are concerned about cholesterol but haven\'t been diagnosed with high cholesterol. People with diabetes are at higher risk for cholesterol problems. Get your cholesterol tested regularly and follow a heart-healthy, diabetes-appropriate diet to prevent cardiovascular complications.',
    recommendations: [
      'Get regular cholesterol screenings (annually or as recommended for diabetes)',
      'Follow a combined heart-healthy and diabetes meal plan',
      'Choose low-glycemic, high-fiber, heart-healthy foods',
      'Include omega-3 fatty acids and limit saturated fats',
      'Manage blood sugar and cardiovascular risk factors together'
    ],
    detailedRecommendations: [
      'Schedule regular lipid panels with your diabetes care appointments',
      'Focus on foods that benefit both blood sugar and cholesterol',
      'Choose lean proteins with minimal saturated fat',
      'Select complex, low-glycemic carbohydrates high in fiber',
      'Include soluble fiber to benefit both conditions',
      'Eat fatty fish twice weekly for heart protection',
      'Use heart-healthy fats in appropriate portions',
      'Limit saturated fat and avoid trans fats',
      'Control carbohydrate portions for blood sugar management',
      'Include non-starchy vegetables abundantly',
      'Achieve and maintain a healthy weight',
      'Stay physically active for both diabetes and heart health',
      'Take diabetes medications as prescribed',
      'Work with your healthcare team to monitor cardiovascular risk factors'
    ]
  },

  // Not Confirmed + Family History (Screening/Prevention)
  {
    id: 'cholesterol-not-confirmed-family-history',
    conditions: {
      conditions: 'high-cholesterol',
      'cholesterol-confirmed': 'no',
      'cholesterol-related-conditions': ['family-history']
    },
    priority: 'low',
    summary: 'You have a family history of early heart disease and are concerned about cholesterol. This puts you at higher genetic risk. Get your cholesterol tested and follow a preventive heart-healthy diet. Early intervention can significantly reduce your risk of developing cholesterol problems and heart disease.',
    recommendations: [
      'Get comprehensive cholesterol screening due to your family history',
      'Follow a preventive heart-healthy eating plan',
      'Focus on limiting saturated fat and including protective nutrients',
      'Include soluble fiber, omega-3s, and heart-healthy fats',
      'Stay physically active and maintain a healthy weight'
    ],
    detailedRecommendations: [
      'Schedule a lipid panel and discuss family history with your doctor',
      'Learn about your family\'s specific heart disease patterns',
      'Adopt heart-healthy eating habits early for prevention',
      'Limit saturated fat to <10% of calories (aim for <7% if cholesterol is elevated)',
      'Avoid trans fats completely',
      'Include soluble fiber daily from oats, beans, fruits, vegetables',
      'Eat fatty fish at least twice weekly',
      'Use heart-healthy oils: olive oil, canola oil',
      'Choose lean proteins and plant-based proteins frequently',
      'Eat abundant fruits and vegetables',
      'Choose whole grains over refined grains',
      'Maintain a healthy weight',
      'Stay physically active most days',
      'Don\'t smoke and limit alcohol',
      'Get regular cholesterol screenings (frequency based on family risk)',
      'Encourage family members to get screened and adopt healthy habits'
    ]
  }
];

// Merge generated and legacy recommendations
cholesterolRecommendations.push(...legacyRecommendations);

console.log(`✅ Generated ${cholesterolRecommendations.length} cholesterol recommendation scenarios`);

// Export cholesterol-specific utility functions
export const getCholesterolRecommendation = (answers: any): RecommendationRule | null => {
  // Find matching recommendation based on answers
  for (const rule of cholesterolRecommendations) {
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
