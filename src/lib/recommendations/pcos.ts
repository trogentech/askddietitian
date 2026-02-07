import { RecommendationRule } from '../recommendationRules';
import { generatePCOSRecommendation } from './pcosGenerator';

/**
 * PCOS Recommendations based on changes6.txt - Smart Template System
 * Covers all 64 scenarios: 3 age groups × 1 gender (female) × 2 pregnancy × 5 goals (4 with BMI variations)
 * 
 * LOGIC & RATIONALE (from changes6.txt):
 * 
 * Key Factors:
 * 1. PCOS Goal: Weight Management, Fertility, Symptom Control, Prediabetes/Insulin Resistance, Not Sure/All
 * 2. BMI Status (if Weight Management selected): Normal, Overweight, Obese, Not Sure
 * 
 * General Principles:
 * - Low glycemic index foods to manage insulin resistance
 * - Anti-inflammatory foods
 * - Balance hormones through nutrition
 * - Weight management (if overweight/obese) - even 5-10% weight loss improves symptoms
 * - Adequate protein and healthy fats
 * - Limit refined carbohydrates and added sugars
 * - Include omega-3 fatty acids
 * - Manage inflammation and oxidative stress
 * 
 * Goal-Specific Focuses:
 * - Weight Management: Calorie control, portion management, sustainable habits
 * - Fertility: Nutrients supporting reproductive health, optimal weight
 * - Symptom Control: Foods that reduce inflammation, balance hormones
 * - Prediabetes/Insulin: Blood sugar management, insulin sensitivity
 */

// Generate all 64+ PCOS recommendation scenarios
const ages = ['18-39', '40-59', '60-above'];
const genders = ['female']; // PCOS only affects females
const pregnancyStatuses = ['yes', 'no'];
const pcosGoals = ['weight-management', 'fertility', 'symptom-control', 'prediabetes-insulin', 'not-sure'];
const bmiStatuses = ['obese', 'overweight', 'normal', 'not-sure'];

export const pcosRecommendations: RecommendationRule[] = [];

// Generate all combinations
for (const age of ages) {
  for (const gender of genders) {
    for (const pregnancy of pregnancyStatuses) {
      // Skip pregnancy scenarios for 60+ (rare/not applicable)
      if (age === '60-above' && pregnancy === 'yes') continue;
      
      for (const pcosGoal of pcosGoals) {
        if (pcosGoal === 'weight-management') {
          // Weight management goal needs BMI status
          for (const bmiStatus of bmiStatuses) {
            const recommendation = generatePCOSRecommendation(
              age,
              gender,
              pregnancy,
              pcosGoal,
              bmiStatus
            );
            pcosRecommendations.push(recommendation);
          }
        } else {
          // Other goals don't need BMI status
          const recommendation = generatePCOSRecommendation(
            age,
            gender,
            pregnancy,
            pcosGoal,
            '' // No BMI status for non-weight-management goals
          );
          pcosRecommendations.push(recommendation);
        }
      }
    }
  }
}

// Legacy fallback recommendations (no age specified) - for backward compatibility
const legacyRecommendations: RecommendationRule[] = [
  // ========================================
  // WEIGHT MANAGEMENT GOAL
  // ========================================
  
  // Weight Management + Obese
  {
    id: 'pcos-weight-management-obese',
    conditions: {
      conditions: 'pcos',
      'pcos-goal': 'weight-management',
      'pcos-bmi-status': 'obese'
    },
    priority: 'medium',
    summary: 'You have PCOS with obesity and want to focus on weight management. Weight loss of even 5-10% can significantly improve PCOS symptoms, insulin sensitivity, and hormone balance. Focus on a low-glycemic, anti-inflammatory diet with portion control for sustainable weight loss while managing insulin resistance.',
    recommendations: [
      'Aim for gradual weight loss of 5-10% of body weight (1-2 lbs per week)',
      'Follow a low-glycemic index diet to manage insulin resistance',
      'Focus on whole foods, lean proteins, healthy fats, and fiber-rich carbohydrates',
      'Practice portion control and regular meal timing to stabilize blood sugar',
      'Include anti-inflammatory foods and omega-3 fatty acids'
    ],
    detailedRecommendations: [
      'Work with a registered dietitian experienced in PCOS for personalized meal planning',
      'Choose low-glycemic carbohydrates: whole grains, legumes, non-starchy vegetables',
      'Include lean proteins at every meal to support satiety and blood sugar control',
      'Add healthy fats: olive oil, avocados, nuts, seeds, fatty fish',
      'Limit refined carbohydrates, white flour products, and added sugars',
      'Eat high-fiber foods (25-30g daily) for blood sugar control and satiety',
      'Include anti-inflammatory foods: fatty fish, leafy greens, berries, turmeric',
      'Practice portion control using measuring tools or the plate method',
      'Eat regular meals (don\'t skip breakfast) to maintain stable blood sugar',
      'Stay hydrated with water and avoid sugary beverages',
      'Limit dairy if it worsens symptoms (some women with PCOS are sensitive)',
      'Include physical activity most days for weight loss and insulin sensitivity',
      'Consider inositol supplementation (discuss with your doctor)',
      'Track progress with measurements, symptoms, and menstrual regularity'
    ]
  },

  // Weight Management + Overweight
  {
    id: 'pcos-weight-management-overweight',
    conditions: {
      conditions: 'pcos',
      'pcos-goal': 'weight-management',
      'pcos-bmi-status': 'overweight'
    },
    priority: 'medium',
    summary: 'You have PCOS, are overweight, and want to focus on weight management. Even modest weight loss can dramatically improve PCOS symptoms and hormone balance. Focus on a low-glycemic, balanced diet with sustainable lifestyle changes that improve insulin sensitivity and support gradual weight loss.',
    recommendations: [
      'Target weight loss of 5-10% of body weight for maximum PCOS symptom improvement',
      'Follow a low-glycemic index eating plan',
      'Choose whole, minimally processed foods',
      'Balance each meal with protein, healthy fats, and fiber-rich carbohydrates',
      'Include anti-inflammatory foods and stay physically active'
    ],
    detailedRecommendations: [
      'Choose complex, low-glycemic carbohydrates: quinoa, steel-cut oats, sweet potatoes, legumes',
      'Include lean proteins with every meal and snack',
      'Add healthy fats to support hormone production: olive oil, avocados, nuts, seeds, fatty fish',
      'Limit refined carbohydrates and sugars that spike insulin',
      'Eat plenty of fiber (vegetables, fruits, whole grains, legumes)',
      'Include anti-inflammatory foods: wild-caught fish, berries, leafy greens, green tea',
      'Practice mindful eating and portion awareness',
      'Don\'t skip meals, especially breakfast',
      'Reduce inflammation-promoting foods: processed foods, trans fats, excess omega-6 oils',
      'Stay hydrated and limit sugary drinks',
      'Monitor dairy intake (may worsen symptoms in some women)',
      'Stay active with both cardio and strength training',
      'Manage stress and prioritize sleep (both affect PCOS)',
      'Track symptoms, weight, and menstrual patterns'
    ]
  },

  // Weight Management + Normal Weight
  {
    id: 'pcos-weight-management-normal',
    conditions: {
      conditions: 'pcos',
      'pcos-goal': 'weight-management',
      'pcos-bmi-status': 'normal'
    },
    priority: 'medium',
    summary: 'You have PCOS at a normal weight and want to focus on weight management. While you\'re at a healthy weight, PCOS can still cause insulin resistance and hormonal imbalances. Focus on maintaining your weight through a low-glycemic, anti-inflammatory diet that manages insulin and supports hormone balance.',
    recommendations: [
      'Maintain your healthy weight through balanced, low-glycemic eating',
      'Focus on blood sugar control and insulin sensitivity',
      'Choose nutrient-dense, anti-inflammatory foods',
      'Balance hormones through proper nutrition and lifestyle',
      'Stay active to maintain insulin sensitivity'
    ],
    detailedRecommendations: [
      'Follow a low-glycemic index diet even at a healthy weight',
      'Choose complex carbohydrates and pair with protein and healthy fats',
      'Include lean proteins at every meal',
      'Add healthy fats for hormone production: fatty fish, avocados, nuts, seeds, olive oil',
      'Eat plenty of fiber-rich vegetables, fruits, and whole grains',
      'Include anti-inflammatory foods: fatty fish (2-3x weekly), berries, leafy greens, turmeric',
      'Limit refined carbohydrates and added sugars',
      'Eat regular, balanced meals to maintain stable blood sugar',
      'Stay hydrated with water',
      'Monitor dairy intake if it affects your symptoms',
      'Include regular physical activity for insulin sensitivity',
      'Manage stress and get adequate sleep',
      'Consider supplements like inositol, vitamin D (discuss with doctor)',
      'Track symptoms and menstrual regularity'
    ]
  },

  // Weight Management + Not Sure BMI
  {
    id: 'pcos-weight-management-not-sure',
    conditions: {
      conditions: 'pcos',
      'pcos-goal': 'weight-management',
      'pcos-bmi-status': 'not-sure'
    },
    priority: 'medium',
    summary: 'You have PCOS and want to focus on weight management but are unsure about your BMI status. First, calculate your BMI or consult with your healthcare provider. Meanwhile, focus on a low-glycemic, anti-inflammatory PCOS diet that will benefit you regardless of your current weight status.',
    recommendations: [
      'Calculate your BMI or discuss your weight status with your healthcare provider',
      'Follow a PCOS-friendly, low-glycemic eating plan',
      'Focus on blood sugar control and insulin sensitivity',
      'Choose whole, nutrient-dense foods',
      'Stay physically active and manage lifestyle factors'
    ],
    detailedRecommendations: [
      'Determine your BMI (weight in kg / height in m²) or consult your doctor',
      'Follow low-glycemic eating principles beneficial for all women with PCOS',
      'Choose complex carbohydrates, lean proteins, and healthy fats',
      'Limit refined carbohydrates and added sugars',
      'Include anti-inflammatory foods: fatty fish, berries, vegetables, nuts, seeds',
      'Eat regular, balanced meals to stabilize blood sugar',
      'Practice portion awareness',
      'Stay hydrated with water',
      'Include physical activity most days',
      'Manage stress and prioritize sleep',
      'Track your symptoms and menstrual patterns',
      'Work with a registered dietitian for personalized guidance',
      'Once you know your BMI, adjust your approach accordingly',
      'Focus on sustainable lifestyle changes rather than quick fixes'
    ]
  },

  // ========================================
  // FERTILITY GOAL
  // ========================================
  
  {
    id: 'pcos-fertility-focus',
    conditions: {
      conditions: 'pcos',
      'pcos-goal': 'fertility'
    },
    priority: 'medium',
    summary: 'You have PCOS and are focused on improving fertility. PCOS is a leading cause of infertility, but nutrition can significantly improve ovulation and conception chances. Focus on a low-glycemic diet that improves insulin sensitivity, includes fertility-supporting nutrients, and achieves optimal weight (if needed) for reproductive health.',
    recommendations: [
      'Follow a low-glycemic index diet to improve ovulation regularity',
      'Achieve optimal weight if overweight (even 5-10% loss can restore ovulation)',
      'Include fertility-supporting nutrients: folate, B vitamins, vitamin D, omega-3s, antioxidants',
      'Improve insulin sensitivity through diet and lifestyle',
      'Work with your healthcare provider on fertility treatments if needed'
    ],
    detailedRecommendations: [
      'Choose low-glycemic carbohydrates to regulate insulin and improve ovulation',
      'Include lean proteins and healthy fats at every meal',
      'Add fertility-supporting foods: leafy greens (folate), fatty fish (omega-3s), berries (antioxidants)',
      'Take a prenatal vitamin with folate (400-800 mcg daily)',
      'Include foods rich in vitamin D (fatty fish, fortified foods) or supplement if deficient',
      'Eat antioxidant-rich foods: colorful fruits, vegetables, nuts, seeds',
      'Limit refined carbohydrates and added sugars that worsen insulin resistance',
      'Include inositol-rich foods or consider myo-inositol supplementation (discuss with doctor)',
      'Achieve healthy weight if overweight (improves fertility significantly)',
      'Avoid trans fats and limit saturated fats',
      'Stay hydrated and limit caffeine to <200mg daily',
      'Avoid alcohol while trying to conceive',
      'Reduce exposure to endocrine disruptors (BPA in plastics, certain pesticides)',
      'Manage stress and get adequate sleep',
      'Track ovulation and work with a reproductive endocrinologist if needed',
      'Include moderate physical activity (excessive exercise can harm fertility)'
    ]
  },

  // ========================================
  // SYMPTOM CONTROL GOAL
  // ========================================
  
  {
    id: 'pcos-symptom-control',
    conditions: {
      conditions: 'pcos',
      'pcos-goal': 'symptom-control'
    },
    priority: 'medium',
    summary: 'You have PCOS and want to focus on controlling symptoms like irregular periods, acne, excess hair growth, and mood changes. A low-glycemic, anti-inflammatory diet can significantly reduce PCOS symptoms by improving insulin sensitivity, reducing inflammation, and balancing hormones naturally.',
    recommendations: [
      'Follow a low-glycemic, anti-inflammatory diet to reduce symptoms',
      'Focus on foods that balance hormones and reduce inflammation',
      'Include omega-3 fatty acids and antioxidants',
      'Limit foods that worsen PCOS symptoms (refined carbs, inflammatory foods)',
      'Support lifestyle factors: stress management, sleep, exercise'
    ],
    detailedRecommendations: [
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
      'Manage stress through mindfulness, yoga, or other techniques',
      'Prioritize sleep (7-9 hours) for hormone balance',
      'Include regular physical activity to improve insulin sensitivity',
      'Consider supplements: inositol, vitamin D, omega-3s (discuss with doctor)',
      'Track symptoms to identify food triggers and improvements'
    ]
  },

  // ========================================
  // PREDIABETES/INSULIN RESISTANCE GOAL
  // ========================================
  
  {
    id: 'pcos-prediabetes-insulin',
    conditions: {
      conditions: 'pcos',
      'pcos-goal': 'prediabetes-insulin'
    },
    priority: 'medium',
    summary: 'You have PCOS with prediabetes or insulin resistance concerns. PCOS and insulin resistance often go hand-in-hand, significantly increasing diabetes risk. Focus on a low-glycemic diet that improves insulin sensitivity, stabilizes blood sugar, and prevents progression to Type 2 diabetes while managing PCOS symptoms.',
    recommendations: [
      'Follow a low-glycemic index diet focused on insulin sensitivity',
      'Control carbohydrate portions and pair with protein and healthy fats',
      'Include fiber-rich foods for blood sugar control',
      'Achieve healthy weight if overweight (5-10% loss improves insulin resistance)',
      'Monitor blood sugar and get regular diabetes screenings'
    ],
    detailedRecommendations: [
      'Work with a registered dietitian for PCOS and prediabetes meal planning',
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
      'Stay physically active - both cardio and resistance training improve insulin sensitivity',
      'Achieve and maintain healthy weight if overweight',
      'Get adequate sleep (poor sleep worsens insulin resistance)',
      'Manage stress (chronic stress raises cortisol and blood sugar)',
      'Monitor blood sugar if recommended and get regular A1C testing',
      'Track food intake and blood sugar patterns if monitoring'
    ]
  },

  // ========================================
  // NOT SURE / ALL GOALS
  // ========================================
  
  {
    id: 'pcos-not-sure-all',
    conditions: {
      conditions: 'pcos',
      'pcos-goal': 'not-sure'
    },
    priority: 'medium',
    summary: 'You have PCOS but are not sure which specific goal to focus on, or want to address all aspects. A comprehensive PCOS nutrition plan addresses weight management, fertility, symptom control, and insulin resistance simultaneously through a low-glycemic, anti-inflammatory diet that supports overall hormonal health.',
    recommendations: [
      'Follow a comprehensive PCOS nutrition plan addressing all aspects',
      'Focus on low-glycemic, anti-inflammatory eating',
      'Improve insulin sensitivity through diet and lifestyle',
      'Include nutrients supporting hormone balance, fertility, and metabolic health',
      'Work with healthcare providers to identify your specific PCOS priorities'
    ],
    detailedRecommendations: [
      'Work with a registered dietitian experienced in PCOS for personalized guidance',
      'Follow low-glycemic eating: choose complex carbs, pair with protein and healthy fats',
      'Include anti-inflammatory foods: fatty fish, berries, leafy greens, turmeric, nuts',
      'Add fertility-supporting nutrients: folate, vitamin D, omega-3s, antioxidants',
      'Achieve healthy weight if overweight (benefits all PCOS aspects)',
      'Include high-fiber foods for blood sugar control and hormone elimination',
      'Choose lean proteins and healthy fats at every meal',
      'Limit refined carbohydrates, added sugars, and inflammatory foods',
      'Consider dairy reduction if symptoms worsen',
      'Stay hydrated with water',
      'Include regular physical activity (both cardio and strength training)',
      'Manage stress through mindfulness, yoga, or other stress-reduction techniques',
      'Prioritize sleep (7-9 hours) for hormonal balance',
      'Consider helpful supplements: inositol, vitamin D, omega-3s (discuss with doctor)',
      'Track symptoms, menstrual patterns, and how foods affect you',
      'Get regular check-ups and lab work to monitor PCOS markers',
      'Work with your healthcare team to identify and prioritize your specific PCOS concerns'
    ]
  }
];

// Merge generated and legacy recommendations
pcosRecommendations.push(...legacyRecommendations);

console.log(`✅ Generated ${pcosRecommendations.length} PCOS recommendation scenarios`);

// Export PCOS-specific utility functions
export const getPCOSRecommendation = (answers: any): RecommendationRule | null => {
  // Find matching recommendation based on answers
  for (const rule of pcosRecommendations) {
    let matches = true;
    for (const [key, value] of Object.entries(rule.conditions)) {
      if (answers[key] !== value) {
        matches = false;
        break;
      }
    }
    if (matches) return rule;
  }
  return null;
};
