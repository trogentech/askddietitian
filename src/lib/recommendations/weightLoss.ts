import { RecommendationRule } from '../recommendationRules';
import { generateWeightLossRecommendation } from './weightLossGenerator';

/**
 * Weight Loss Recommendations based on changes7.txt - Smart Template System
 * Covers all 96 scenarios: 3 age groups × 2 genders × 4 goals × 4 challenges
 * 
 * LOGIC & RATIONALE (from changes7.txt):
 * 
 * Key Factors:
 * 1. Weight Loss Goal: Just a little, Moderate amount, Significant amount, Not Sure
 * 2. Past Attempts/Challenges: Diet trouble, Exercise consistency, Motivation/regain, Never tried, Other medical
 * 
 * General Principles:
 * - Sustainable calorie deficit (500-1000 cal/day for 1-2 lbs/week loss)
 * - Focus on whole, nutrient-dense foods
 * - Portion control and mindful eating
 * - Address specific barriers (diet challenges, exercise, motivation)
 * - Balanced macronutrients
 * - Regular physical activity
 * - Behavioral and lifestyle changes
 * - Long-term sustainability over quick fixes
 */

// Generate all 96 weight loss recommendation scenarios
const ages = ['18-39', '40-59', '60-above'];
const genders = ['male', 'female'];
const weightLossGoals = ['just-a-little', 'moderate', 'significant', 'not-sure'];
const challengesTypes = ['diet-trouble', 'exercise-consistency', 'motivation-regain', 'never-tried'];

export const weightLossRecommendations: RecommendationRule[] = [];

// Generate all combinations
for (const age of ages) {
  for (const gender of genders) {
    for (const weightLossGoal of weightLossGoals) {
      for (const challenges of challengesTypes) {
        const recommendation = generateWeightLossRecommendation(
          age,
          gender,
          weightLossGoal,
          challenges
        );
        weightLossRecommendations.push(recommendation);
      }
    }
  }
}

// Legacy fallback recommendations (no age specified) - for backward compatibility
const legacyRecommendations: RecommendationRule[] = [
  // ========================================
  // JUST A LITTLE WEIGHT LOSS GOAL
  // ========================================
  
  // Just a little + Diet trouble
  {
    id: 'weight-loss-little-diet-trouble',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'just-a-little',
      'weight-loss-challenges': 'diet-trouble'
    },
    priority: 'low',
    summary: 'You want to lose just a little weight but have struggled with following diets in the past. The key to success for modest weight loss is finding sustainable eating patterns you can maintain long-term, not restrictive diets. Focus on small, manageable changes to your current eating habits rather than dramatic diet overhauls.',
    recommendations: [
      'Make small, sustainable changes to your current diet rather than following strict diet plans',
      'Focus on adding healthy foods before removing foods you enjoy',
      'Practice portion control using simple methods (smaller plates, measuring portions)',
      'Aim for modest calorie reduction (250-500 calories/day) for gradual weight loss',
      'Include foods you enjoy in moderation to maintain long-term adherence'
    ],
    detailedRecommendations: [
      'Start with one small change at a time (e.g., add vegetables to lunch, switch to water)',
      'Use the "plate method": fill 1/2 plate with vegetables, 1/4 protein, 1/4 carbs',
      'Practice portion awareness without strict measuring initially',
      'Find healthier versions of foods you love rather than eliminating them',
      'Plan meals ahead to avoid impulsive, less healthy choices',
      'Keep healthy snacks available for when hunger strikes',
      'Eat slowly and mindfully, paying attention to fullness cues',
      'Reduce liquid calories (soda, juice, fancy coffee drinks)',
      'Don\'t label foods as "good" or "bad" - focus on balance and moderation',
      'Allow occasional treats to prevent feelings of deprivation',
      'Track food intake for awareness (without obsession)',
      'Celebrate non-scale victories (energy, how clothes fit, health improvements)',
      'Be patient - sustainable weight loss takes time',
      'Consider working with a registered dietitian for personalized guidance'
    ]
  },

  // Just a little + Exercise consistency
  {
    id: 'weight-loss-little-exercise-consistency',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'just-a-little',
      'weight-loss-challenges': 'exercise-consistency'
    },
    priority: 'low',
    summary: 'You want to lose just a little weight but struggle with exercise consistency. For modest weight loss, focus first on sustainable dietary changes combined with finding enjoyable physical activities you can stick with. The key is building consistent habits, starting small, and choosing activities you actually enjoy.',
    recommendations: [
      'Start with small, achievable exercise goals (10-15 minutes daily) and gradually increase',
      'Find physical activities you genuinely enjoy to improve consistency',
      'Focus primarily on dietary changes for weight loss (diet has bigger impact than exercise)',
      'Schedule exercise like appointments and treat it as non-negotiable "you" time',
      'Build activity into your daily routine (walking, taking stairs, active hobbies)'
    ],
    detailedRecommendations: [
      'Make modest dietary changes: portion control, more vegetables, less processed food',
      'Start exercise small: 10 minutes daily, then gradually increase',
      'Choose activities you enjoy: walking, dancing, swimming, cycling, sports, gardening',
      'Schedule workouts at the same time each day to build habit',
      'Find an accountability partner or join group fitness for motivation',
      'Break exercise into short sessions if needed (10 minutes 3x daily)',
      'Set realistic goals and celebrate consistency over intensity',
      'Use apps or trackers for motivation and progress tracking',
      'Have backup plans for bad weather or busy days (home workout videos)',
      'Focus on how exercise makes you feel, not just weight loss',
      'Combine cardio with strength training (even bodyweight exercises)',
      'Build more movement into daily life: walk during calls, park farther, use stairs',
      'Don\'t let missed workouts derail you - just get back on track',
      'Remember: you can\'t out-exercise a poor diet, so prioritize nutrition'
    ]
  },

  // Just a little + Motivation/regain
  {
    id: 'weight-loss-little-motivation-regain',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'just-a-little',
      'weight-loss-challenges': 'motivation-regain'
    },
    priority: 'low',
    summary: 'You want to lose just a little weight but have struggled with maintaining motivation or have regained weight after losing it. The key is building sustainable habits rather than relying on motivation alone, and understanding that maintenance is a lifelong process, not just reaching a goal weight.',
    recommendations: [
      'Focus on building habits and systems rather than relying on motivation',
      'Set small, achievable goals with regular celebrations of progress',
      'Identify your "why" - deeper reasons beyond appearance for wanting weight loss',
      'Plan for maintenance from day one - sustainable changes only',
      'Address emotional eating and develop non-food coping strategies'
    ],
    detailedRecommendations: [
      'Define your deeper reasons for weight loss (health, energy, mobility, longevity)',
      'Set process goals (eat vegetables daily, exercise 3x/week) not just outcome goals',
      'Make changes you can sustain forever, not temporary "diet" restrictions',
      'Build habits through consistency and routine, not willpower',
      'Track non-scale victories: energy, mood, fitness improvements, how clothes fit',
      'Identify emotional eating triggers and develop alternative coping strategies',
      'Practice self-compassion - perfectionism leads to giving up',
      'Plan for challenging situations: social events, stress, holidays',
      'Create environment for success: stock healthy foods, remove temptations',
      'Find enjoyable physical activities to maintain long-term',
      'Connect with support: friends, family, online communities, or professionals',
      'Recognize that maintenance requires ongoing effort - it\'s not "done" at goal weight',
      'Learn from regain experiences - what worked, what didn\'t, what triggers relapse',
      'Consider working with a therapist if emotional eating is significant',
      'Focus on overall health and wellbeing, not just the number on the scale'
    ]
  },

  // Just a little + Never tried
  {
    id: 'weight-loss-little-never-tried',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'just-a-little',
      'weight-loss-challenges': 'never-tried'
    },
    priority: 'low',
    summary: 'You want to lose just a little weight and haven\'t tried weight loss before. Starting fresh is an advantage - you can build healthy habits from the beginning without baggage from failed diets. Focus on sustainable, balanced eating and enjoyable physical activity for gradual, lasting results.',
    recommendations: [
      'Start with small, sustainable changes to build healthy habits',
      'Focus on adding nutritious foods and increasing activity rather than strict restrictions',
      'Aim for gradual weight loss of 0.5-1 pound per week',
      'Learn about balanced nutrition and portion sizes',
      'Find physical activities you enjoy and can maintain long-term'
    ],
    detailedRecommendations: [
      'Educate yourself about balanced nutrition and healthy portions',
      'Use the plate method: 1/2 vegetables, 1/4 lean protein, 1/4 whole grains',
      'Focus on whole, minimally processed foods most of the time',
      'Practice portion awareness - use measuring tools initially to learn appropriate sizes',
      'Include plenty of vegetables and fruits for volume and nutrition',
      'Choose lean proteins, whole grains, and healthy fats',
      'Stay hydrated with water - often thirst is mistaken for hunger',
      'Reduce sugary beverages and limit alcohol',
      'Eat regular meals and don\'t skip meals (leads to overeating later)',
      'Find physical activities you enjoy: walking, swimming, dancing, sports, yoga',
      'Start with 150 minutes of moderate activity weekly (30 min, 5 days)',
      'Include both cardio and strength training',
      'Track food intake for a week to understand your current eating patterns',
      'Set realistic expectations - healthy weight loss is gradual',
      'Focus on building lifelong healthy habits, not quick fixes',
      'Consider working with a registered dietitian for guidance',
      'Celebrate all progress and be patient with yourself'
    ]
  },

  // ========================================
  // MODERATE WEIGHT LOSS GOAL
  // ========================================
  
  // Moderate + Diet trouble
  {
    id: 'weight-loss-moderate-diet-trouble',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'moderate',
      'weight-loss-challenges': 'diet-trouble'
    },
    priority: 'low',
    summary: 'You want to lose a moderate amount of weight but have struggled with following diets in the past. Moderate weight loss requires sustained effort, but restrictive diets often fail. Focus on flexible eating patterns that create a calorie deficit while including foods you enjoy, making the process sustainable for the months it will take.',
    recommendations: [
      'Choose flexible eating approaches over restrictive diets (balanced macros, mindful eating)',
      'Create a moderate calorie deficit (500-750 cal/day) for 1-1.5 lbs/week loss',
      'Include foods you enjoy in appropriate portions to prevent feelings of deprivation',
      'Plan meals and snacks to avoid impulsive eating',
      'Work with a registered dietitian for personalized, sustainable meal planning'
    ],
    detailedRecommendations: [
      'Calculate your calorie needs and aim for modest deficit (not extreme restriction)',
      'Focus on nutrient-dense foods that keep you full: lean proteins, vegetables, whole grains, healthy fats',
      'Practice portion control using measuring tools, food scale, or visual guides',
      'Build balanced meals: protein + vegetables + smart carbs + healthy fats',
      'Include treats and favorite foods in moderation (80/20 approach)',
      'Meal prep on weekends to have healthy options readily available',
      'Keep healthy snacks accessible: cut vegetables, fruit, nuts, yogurt',
      'Eat adequate protein (0.8-1g per lb body weight) to preserve muscle and increase satiety',
      'Include fiber-rich foods (25-30g daily) for fullness',
      'Stay hydrated - drink water throughout the day',
      'Practice mindful eating: eat slowly, without distractions, pay attention to fullness',
      'Allow flexibility for social events and special occasions',
      'Track food intake to maintain accountability and learn portion sizes',
      'Don\'t label foods as forbidden - this leads to cravings and binges',
      'Focus on progress, not perfection - one meal doesn\'t derail your efforts',
      'Consider apps like MyFitnessPal for tracking and meal ideas'
    ]
  },

  // Moderate + Exercise consistency  
  {
    id: 'weight-loss-moderate-exercise-consistency',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'moderate',
      'weight-loss-challenges': 'exercise-consistency'
    },
    priority: 'low',
    summary: 'You want to lose a moderate amount of weight but struggle with exercise consistency. While diet is most important for weight loss, consistent exercise significantly helps moderate weight loss goals and improves body composition. Focus on building exercise habits through enjoyable activities, scheduling, and starting small.',
    recommendations: [
      'Prioritize dietary changes for weight loss (create 500-750 calorie deficit)',
      'Build consistent exercise habits starting with achievable goals (20-30 min, 3-4x/week)',
      'Find activities you genuinely enjoy to improve long-term consistency',
      'Schedule workouts like important appointments',
      'Include both cardio for calorie burn and strength training for muscle preservation'
    ],
    detailedRecommendations: [
      'Focus first on nutrition: portion control, balanced meals, calorie deficit',
      'Start exercise manageable: 20-30 minutes, 3-4 days/week, then gradually increase',
      'Choose enjoyable activities: group classes, sports, dancing, hiking, swimming',
      'Schedule specific workout times and treat them as non-negotiable',
      'Find accountability: workout buddy, trainer, group fitness, online community',
      'Set the bar low initially - consistency matters more than intensity',
      'Lay out workout clothes the night before',
      'Have a home workout backup plan for busy days or bad weather',
      'Track workouts to see progress and stay motivated',
      'Celebrate consistency streaks',
      'Include variety to prevent boredom: alternate activities, try new classes',
      'Combine cardio (walking, running, cycling) with strength training (weights, bodyweight)',
      'Build movement into daily life: active commuting, walking meetings, stairs',
      'Remember exercise supports weight loss but can\'t compensate for poor diet',
      'Focus on how exercise makes you feel: more energy, better mood, stress relief',
      'Consider working with a personal trainer initially to build confidence'
    ]
  },

  // Moderate + Motivation/regain
  {
    id: 'weight-loss-moderate-motivation-regain',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'moderate',
      'weight-loss-challenges': 'motivation-regain'
    },
    priority: 'low',
    summary: 'You want to lose a moderate amount of weight but have struggled with maintaining motivation or have regained weight after losing it. Moderate weight loss takes several months, so building sustainable systems and addressing the psychological aspects of weight maintenance is crucial. Focus on habit-based changes and planning for long-term maintenance.',
    recommendations: [
      'Build sustainable habits and systems that don\'t rely on motivation',
      'Address underlying issues: emotional eating, stress management, self-compassion',
      'Set process-based goals and celebrate non-scale victories',
      'Plan for maintenance from the start - only make changes you can sustain forever',
      'Consider working with a therapist or counselor if emotional factors are significant'
    ],
    detailedRecommendations: [
      'Identify your deeper motivations beyond appearance: health, energy, mobility, longevity',
      'Make only sustainable changes - if you can\'t do it forever, find another approach',
      'Focus on systems and habits: meal planning routine, consistent exercise schedule, bedtime routine',
      'Set process goals: eat vegetables daily, workout 4x/week, cook dinner 5 nights',
      'Track non-scale victories: energy levels, fitness improvements, mood, how clothes fit',
      'Identify emotional eating triggers and develop alternative coping strategies',
      'Practice self-compassion - perfectionism and all-or-nothing thinking lead to giving up',
      'Develop stress management techniques: meditation, journaling, therapy, hobbies',
      'Plan strategies for high-risk situations: parties, stress, travel, holidays',
      'Build environment for success: healthy foods accessible, temptations limited',
      'Connect with support: weight loss groups, online communities, friends with similar goals',
      'Learn from past regain: what triggered it, what would help prevent it',
      'Understand maintenance is ongoing - reaching goal weight isn\'t the finish line',
      'Plan transition to maintenance: gradually increase calories, continue tracking initially',
      'Consider professional help: registered dietitian, therapist specializing in eating behaviors',
      'Weigh regularly during maintenance to catch small regains before they become large',
      'Focus on overall wellbeing and health, not just weight'
    ]
  },

  // Moderate + Never tried
  {
    id: 'weight-loss-moderate-never-tried',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'moderate',
      'weight-loss-challenges': 'never-tried'
    },
    priority: 'low',
    summary: 'You want to lose a moderate amount of weight and haven\'t tried weight loss before. Moderate weight loss will take several months of consistent effort. Build sustainable habits from the start, learn about nutrition and portion control, and focus on gradual progress rather than quick fixes.',
    recommendations: [
      'Set realistic expectations: moderate weight loss takes 3-6+ months of consistent effort',
      'Aim for 1-2 pounds per week weight loss through diet and exercise',
      'Learn about nutrition, portion sizes, and balanced meals',
      'Build sustainable eating and exercise habits you can maintain long-term',
      'Work with a registered dietitian for personalized guidance and support'
    ],
    detailedRecommendations: [
      'Educate yourself about calorie balance, macronutrients, and portion sizes',
      'Calculate your calorie needs and create 500-750 calorie deficit',
      'Use the plate method: 1/2 vegetables, 1/4 lean protein, 1/4 whole grains',
      'Practice portion control using measuring cups, food scale, or visual guides',
      'Eat adequate protein (0.8-1g per lb bodyweight) to preserve muscle',
      'Include plenty of vegetables and fruits for volume, nutrients, and fiber',
      'Choose whole grains over refined grains',
      'Use healthy fats in moderation: olive oil, avocados, nuts, fatty fish',
      'Stay hydrated with water throughout the day',
      'Limit sugary beverages, alcohol, and high-calorie drinks',
      'Plan and prep meals on weekends for busy weekdays',
      'Start exercise gradually: 150-300 minutes of moderate activity weekly',
      'Include both cardio and strength training for best results',
      'Track food intake for accountability and learning',
      'Weigh yourself weekly (same day, same time) to monitor progress',
      'Take measurements and progress photos to track beyond the scale',
      'Join support groups or work with professionals for guidance',
      'Be patient - sustainable weight loss is gradual',
      'Focus on building lifelong habits, not temporary changes'
    ]
  },

  // ========================================
  // SIGNIFICANT WEIGHT LOSS GOAL
  // ========================================
  
  // Significant + Diet trouble
  {
    id: 'weight-loss-significant-diet-trouble',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'significant',
      'weight-loss-challenges': 'diet-trouble'
    },
    priority: 'medium',
    summary: 'You want to lose a significant amount of weight but have struggled with following diets in the past. Significant weight loss is a long-term journey requiring sustainable lifestyle changes, not restrictive diets. Work with healthcare professionals to create a flexible, balanced eating plan you can maintain for the months or years this journey will take.',
    recommendations: [
      'Work with a registered dietitian and potentially a weight loss physician for support',
      'Focus on sustainable lifestyle changes rather than restrictive diets',
      'Create a moderate calorie deficit (500-1000 cal/day) for 1-2 lbs/week loss',
      'Break the journey into smaller goals (10% body weight at a time)',
      'Include foods you enjoy in appropriate portions to maintain long-term adherence'
    ],
    detailedRecommendations: [
      'Seek professional guidance: registered dietitian, physician, behavioral therapist',
      'Set realistic timeline: significant weight loss takes 1-2+ years of consistent effort',
      'Break into manageable goals: focus on first 5-10% weight loss, then maintain, then continue',
      'Create balanced meal plans with foods you enjoy',
      'Focus on nutrient-dense, filling foods: lean proteins, vegetables, whole grains, healthy fats',
      'Practice portion control and mindful eating',
      'Meal prep and plan to avoid impulsive poor choices',
      'Allow flexibility and favorite foods in moderation',
      'Address emotional eating with therapy or counseling',
      'Build consistent eating routines and habits',
      'Track food intake for accountability',
      'Stay hydrated and limit liquid calories',
      'Include regular physical activity as able (start small if needed)',
      'Address any medical issues affecting weight (thyroid, hormones, medications)',
      'Consider medical interventions if appropriate: medication, bariatric surgery (discuss with doctor)',
      'Join support groups for encouragement and accountability',
      'Focus on health improvements beyond the scale: energy, mobility, health markers',
      'Be patient and compassionate with yourself - this is a marathon, not a sprint'
    ]
  },

  // Significant + Exercise consistency
  {
    id: 'weight-loss-significant-exercise-consistency',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'significant',
      'weight-loss-challenges': 'exercise-consistency'
    },
    priority: 'medium',
    summary: 'You want to lose a significant amount of weight but struggle with exercise consistency. While diet is most important initially, exercise becomes increasingly important for significant weight loss and maintenance. Start where you are, build gradually, and find activities you can sustain as fitness improves.',
    recommendations: [
      'Prioritize dietary changes first for weight loss (create 500-1000 calorie deficit)',
      'Start exercise at your current fitness level and gradually increase',
      'Work with professionals: registered dietitian, personal trainer, physical therapist if needed',
      'Build consistency before intensity - start small and increase gradually',
      'Find enjoyable activities appropriate for your current fitness level'
    ],
    detailedRecommendations: [
      'Focus heavily on nutrition first: balanced meals, portion control, calorie deficit',
      'Start exercise very gradually if currently sedentary: 5-10 minute walks daily',
      'Progress slowly to prevent injury and burnout: add 5 minutes weekly',
      'Choose low-impact activities initially: walking, swimming, water aerobics, chair exercises',
      'Work with professionals if needed: trainer experienced with significant weight loss, physical therapist',
      'Schedule exercise like appointments and build routine',
      'Find accountability: workout buddy, online support group, trainer',
      'Celebrate all movement - every bit counts',
      'Focus on how you feel: more energy, better mobility, improved mood',
      'As fitness improves, gradually add intensity and variety',
      'Include strength training to preserve muscle mass during weight loss',
      'Build more activity into daily life as able',
      'Have backup plans for obstacles: home workouts, mall walking in bad weather',
      'Track exercise to see progress (distance, time, how you feel)',
      'Remember: weight loss happens primarily in the kitchen; exercise is for health and maintenance',
      'Be patient and compassionate - fitness improves gradually',
      'Aim eventually for 300+ minutes weekly for significant weight loss maintenance',
      'Address any pain or mobility issues with healthcare providers'
    ]
  },

  // Significant + Motivation/regain
  {
    id: 'weight-loss-significant-motivation-regain',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'significant',
      'weight-loss-challenges': 'motivation-regain'
    },
    priority: 'medium',
    summary: 'You want to lose a significant amount of weight but have struggled with maintaining motivation or have regained weight after losing it. Significant weight loss is a long journey requiring deep behavioral change and addressing psychological factors. Work with professionals to build sustainable habits and address underlying issues that may have led to regain.',
    recommendations: [
      'Work with a multidisciplinary team: dietitian, therapist, physician, support group',
      'Address psychological factors: emotional eating, trauma, stress, self-image',
      'Build sustainable systems and habits that don\'t rely on motivation alone',
      'Plan for maintenance from day one - only make sustainable changes',
      'Break the journey into smaller goals with maintenance periods between'
    ],
    detailedRecommendations: [
      'Seek comprehensive support: registered dietitian, therapist specializing in eating behaviors, physician',
      'Identify deeper motivations: health, longevity, mobility, family, quality of life',
      'Address emotional eating and develop healthy coping strategies',
      'Work through any trauma, depression, or anxiety that may affect eating',
      'Build sustainable habits and routines, not motivation-dependent changes',
      'Set process-based goals: daily walks, meal prep Sundays, tracking food',
      'Break journey into phases: lose 10%, maintain 3-6 months, continue',
      'Practice self-compassion and challenge all-or-nothing thinking',
      'Develop stress management: therapy, meditation, hobbies, social support',
      'Plan for high-risk situations before they occur',
      'Build supportive environment: remove temptations, stock healthy foods',
      'Join weight loss support groups for understanding and accountability',
      'Learn from previous regain: triggers, warning signs, prevention strategies',
      'Understand weight loss maintenance requires lifelong effort',
      'Plan transition to maintenance carefully with professional guidance',
      'Weigh regularly during maintenance to catch small regains early',
      'Consider medication or bariatric surgery if appropriate (discuss with doctor)',
      'Focus on overall wellbeing and health, not just weight',
      'Celebrate all progress: health improvements, fitness, how you feel, not just scale',
      'Be patient and realistic - significant weight loss takes years, not months'
    ]
  },

  // Significant + Never tried
  {
    id: 'weight-loss-significant-never-tried',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'significant',
      'weight-loss-challenges': 'never-tried'
    },
    priority: 'medium',
    summary: 'You want to lose a significant amount of weight and haven\'t tried weight loss before. Significant weight loss is a major undertaking requiring sustained effort over many months or years. Starting fresh is an advantage - build sustainable habits from the beginning with professional guidance. Focus on gradual lifestyle changes rather than quick fixes.',
    recommendations: [
      'Work with healthcare professionals: registered dietitian, physician, possibly therapist',
      'Set realistic expectations: significant weight loss takes 1-2+ years of consistent effort',
      'Aim for 1-2 pounds per week through sustainable dietary changes and activity',
      'Break the journey into smaller, achievable goals',
      'Focus on building lifelong healthy habits from the start'
    ],
    detailedRecommendations: [
      'Schedule comprehensive medical evaluation to address any health issues',
      'Work with registered dietitian for personalized meal planning and education',
      'Learn about nutrition, portions, calorie balance, and balanced meals',
      'Calculate calorie needs and create appropriate deficit (500-1000 cal/day)',
      'Build balanced meals: lean proteins, vegetables, whole grains, healthy fats',
      'Practice portion control using measuring tools and food scale',
      'Meal plan and prep to set yourself up for success',
      'Start physical activity at your current level: even 5-minute walks count',
      'Gradually increase activity as fitness improves',
      'Include both cardio and strength training (preserves muscle during weight loss)',
      'Track food intake and weight for accountability',
      'Take measurements and photos to track progress beyond the scale',
      'Set milestone goals: 5% weight loss, 10% weight loss, etc.',
      'Celebrate all victories: health improvements, fitness gains, how you feel',
      'Join support groups or online communities for encouragement',
      'Address emotional aspects: why do you eat, what are your triggers',
      'Plan for obstacles: social events, stress, travel, holidays',
      'Consider therapy if emotional eating or mental health issues are present',
      'Discuss medical options with doctor if appropriate: medication, surgery',
      'Be patient, compassionate, and persistent - this is a long journey',
      'Remember: sustainable changes lead to lasting results'
    ]
  },

  // ========================================
  // NOT SURE WEIGHT LOSS GOAL
  // ========================================
  
  {
    id: 'weight-loss-not-sure-goal',
    conditions: {
      conditions: 'weight-loss',
      'weight-loss-goal': 'not-sure'
    },
    priority: 'low',
    summary: 'You want to focus on weight loss but aren\'t sure how much weight you want to lose. Start by working with your healthcare provider to determine a healthy weight goal based on your height, body composition, and health status. Meanwhile, focus on adopting healthy eating and activity habits that will support any weight loss goal.',
    recommendations: [
      'Consult with your healthcare provider or registered dietitian to set appropriate weight goals',
      'Focus on healthy lifestyle changes regardless of specific weight target',
      'Start with small, sustainable improvements to eating and activity',
      'Consider health markers (blood pressure, blood sugar, cholesterol) as goals beyond weight',
      'Begin tracking current eating and activity patterns to identify areas for improvement'
    ],
    detailedRecommendations: [
      'Schedule appointment with doctor or registered dietitian to assess healthy weight range',
      'Discuss health-based goals: improving blood pressure, blood sugar, cholesterol, mobility',
      'Consider body composition, not just weight (muscle vs. fat)',
      'Start making healthy changes while determining specific goals',
      'Focus on adding nutritious foods: vegetables, fruits, lean proteins, whole grains',
      'Practice portion awareness and mindful eating',
      'Reduce processed foods, added sugars, and excessive portions',
      'Stay hydrated with water',
      'Begin increasing physical activity at your current level',
      'Track current eating patterns to identify improvement areas',
      'Set initial goal of 5-10% weight loss (significant health benefits)',
      'Focus on sustainable lifestyle changes rather than rapid weight loss',
      'Learn about nutrition, balanced meals, and portion sizes',
      'Address any barriers to healthy eating or activity',
      'Consider what brought you to want weight loss: health, energy, mobility, appearance',
      'Set process goals: eat breakfast daily, walk 3x/week, meal prep Sundays',
      'Monitor how you feel as you make changes: energy, mood, physical comfort',
      'Once you determine specific goals, adjust approach accordingly',
      'Remember: focus on health and wellbeing, not just a number on the scale'
    ]
  }
];

// Merge generated and legacy recommendations
weightLossRecommendations.push(...legacyRecommendations);

console.log(`✅ Generated ${weightLossRecommendations.length} weight loss recommendation scenarios`);

// Export weight loss-specific utility functions
export const getWeightLossRecommendation = (answers: any): RecommendationRule | null => {
  // Find matching recommendation based on answers
  for (const rule of weightLossRecommendations) {
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
