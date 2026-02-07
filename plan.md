# Quiz Recommendation System Implementation Plan

## Overview
The quiz recommendation system needs to generate personalized health recommendations based on a complex decision tree that considers multiple factors including:
- Age (18-39, 40-59, 60+)
- Gender (Male/Female)
- Pregnancy status (Yes/No)
- Health conditions (Diabetes, High Blood Pressure, High Cholesterol, PCOS, Weight Loss)
- Condition-specific follow-up answers

## Current State Analysis

### What's Working
1. ✅ Quiz flow and navigation (just fixed the step indexing issue)
2. ✅ Conditional question display based on previous answers
3. ✅ Basic result structure with `QuizResult` interface
4. ✅ Email functionality for detailed recommendations

### What's Not Working
1. ❌ `analyzeQuizResults()` function only has basic/fallback logic
2. ❌ Missing comprehensive recommendation mapping for all condition combinations
3. ❌ No detailed recommendation logic based on answer combinations

## Recommendation Logic Structure (from files analysis)

### File Analysis Summary

#### chnages.txt & chnages2.txt
- **Basic Demographics**: Age, Gender, Pregnancy Status
- **Key Rule**: If pregnant/breastfeeding, weight loss should NOT be shown as an option
- **Key Rule**: Pregnancy question only shown if Female AND (18-39 OR 40-59), NOT for 60+

#### changes3.txt - DIABETES Recommendations
Contains detailed rules for:
- **Diabetes Types**: Type1, Type2, Gestational, Prediabetes, Family History, Not Sure
- **Weight Status**: Overweight/Obese (Yes) vs Normal Weight (No)
- **Combinations**: Age × Gender × Pregnancy × Diabetes Type × Weight Status = ~48+ scenarios

**Example Pattern**:
```
IF: 18-39; Female; pregnancy:Yes; Diabetes:Type2; Weight:Yes
THEN: Specific recommendations for pregnant woman with Type2 diabetes who is overweight
```

#### changes4.txt - HIGH BLOOD PRESSURE Recommendations
Contains detailed rules for:
- **Blood Pressure Level**: Pre-hypertension, Stage 1, Stage 2, Not Sure
- **Medication Status**: Yes/No
- **Salt Intake**: High, Moderate, Low
- **Weight Status**: Yes/No (Overweight/Obese)
- **Other Conditions**: Diabetes, Kidney Disease, High Cholesterol, None (multiple selection)
- **Combinations**: Age × Gender × Pregnancy × BP Level × Medication × Weight × Other Conditions = ~200+ scenarios

**Example Pattern**:
```
IF: 18-39; Female; pregnancy:Yes; High BP; Medication:Yes; Weight:Yes; Other:Kidney disease
THEN: Specific recommendations for pregnant woman with medicated high BP, overweight, with kidney disease
```

#### changes5.txt - HIGH CHOLESTEROL Recommendations
Contains detailed rules for:
- **Cholesterol Profile**: Yes/No (confirmed high cholesterol)
- **Related Conditions**: Overweight/Obesity, Diabetes, Family History of early heart disease, Not Sure
- **Combinations**: Age × Gender × Pregnancy × Cholesterol Profile × Conditions = ~120+ scenarios

**Example Pattern**:
```
IF: 18-39; Female; pregnancy:Yes; High Cholesterol:Yes; Condition:Diabetes
THEN: Specific recommendations for pregnant woman with high cholesterol and diabetes
```

#### changes6.txt - PCOS Recommendations
Contains detailed rules for:
- **PCOS Goals**: Weight Management, Fertility, Symptom Control, Prediabetes/Insulin, Not Sure/All
- **Weight Status** (only if Weight Management selected): Normal, Overweight, Obese, Not Sure
- **Combinations**: Age × Gender × Pregnancy × PCOS Goal × Weight Status = ~64+ scenarios

**Example Pattern**:
```
IF: 18-39; Female; pregnancy:No; PCOS; Goal:Weight Management; BMI:Obese
THEN: Specific recommendations for non-pregnant woman with PCOS focused on weight management, obese
```

#### changes7.txt - WEIGHT LOSS Recommendations
Contains detailed rules for:
- **Weight Loss Goal**: Just a little, Moderate amount, Significant amount, Not Sure
- **Past Attempts**: Diet trouble, Exercise consistency issues, Motivation/regain, Never tried, Other medical
- **Combinations**: Age × Gender × Pregnancy × Weight Loss Goal × Past Attempts = ~80+ scenarios

**Example Pattern**:
```
IF: 18-39; Female; pregnancy:No; Weight Loss; Goal:Significant; Attempts:Diet trouble
THEN: Specific recommendations for woman wanting significant weight loss who struggles with diet
```

## Questions I Need Answered

### CRITICAL QUESTIONS:

1. **Missing Recommendation Content**: The files show the CONDITIONS/PATTERNS (e.g., "IF: 18-39; Female; pregnancy:Yes; Diabetes:Type2; Weight:Yes") but I don't see the actual RECOMMENDATION TEXT for each scenario. Where is this content?
   - Do I need to create generic recommendations based on the pattern?
   - Is there a separate document with the actual recommendation text?
   - Should I use AI/medical knowledge to generate appropriate recommendations?

2. **High Cholesterol Questions Missing**: changes5.txt references questions 5 and 6:
   - Q5: "Have you been told that you have high cholesterol?" (Yes/No)
   - Q6: "Do you have any related conditions?" (Overweight/Obesity, Diabetes, Family history, Not sure)
   
   **These questions are NOT in the current quiz.ts file**. Should I add them?

3. **Multiple Health Conditions**: The current quiz only allows selecting ONE health condition (type: 'single'). But the requirements suggest users might have multiple conditions (e.g., Diabetes + High BP + High Cholesterol). Should this be changed to 'multiple'?

4. **"None of the above" vs "Prefer not to answer"**: 
   - Current code has separate handling for these
   - changes2.txt shows them as ONE option: "None of the above or prefer not to answer"
   - Which is correct?

5. **Recommendation Priority**: How should priority (high/medium/low) be determined?
   - Pregnancy = high?
   - Multiple conditions = high?
   - Age-based = medium?
   - Preventive = low?

6. **Detailed vs Summary Recommendations**: 
   - Should BOTH be generated in `analyzeQuizResults()`?
   - Or should detailed recommendations only be generated when email is sent?
   - The files don't show different content for "Summary" vs "Detailed" - are they the same?

7. **General Health Goals** (Q4a from changes2.txt):
   - Shows up if "None of the above" selected
   - Options: "Weight loss" or "General healthy eating guidance"
   - **But current quiz has MORE options**: weight-loss, weight-gain, general-healthy-eating, weight-maintenance
   - Which is correct?

8. **Combination Logic**: If someone selects multiple conditions (if we make it multiple), do we:
   - Show ALL recommendations for each condition separately?
   - Merge/prioritize recommendations intelligently?
   - Show the most critical condition first?

## Proposed Implementation Approach

### Phase 1: Data Structure Setup
1. Create a comprehensive recommendation database/rules engine
2. Define interfaces for recommendation rules
3. Map all condition combinations to recommendation IDs

### Phase 2: Missing Questions Implementation
1. Add High Cholesterol follow-up questions (Q5, Q6 from changes5.txt)
2. Verify all condition-specific follow-up questions are present
3. Update question types (single vs multiple for health conditions)

### Phase 3: Recommendation Engine
1. Implement rule matching algorithm that:
   - Takes all quiz answers
   - Matches against recommendation rules
   - Handles partial matches (not every combination may be defined)
   - Falls back to generic recommendations when specific match not found

2. Build recommendation content database with structure:
```typescript
{
  id: "diabetes-type2-weight-yes-18-39-female-pregnant",
  conditions: {
    age: "18-39",
    gender: "female",
    pregnancy: "yes",
    conditions: "diabetes",
    diabetesStatus: "type2",
    weightStatusDiabetes: "lose"
  },
  result: {
    title: "...",
    summary: "...",
    recommendations: [...],
    detailedRecommendations: [...], // if different from summary
    priority: "high",
    riskFactors: [...]
  }
}
```

### Phase 4: Fallback Strategy
For combinations not explicitly defined:
1. Use condition-specific base recommendations
2. Apply age modifiers
3. Apply pregnancy modifiers
4. Apply weight status modifiers
5. Combine intelligently

### Phase 5: Testing & Validation
1. Test all major pathways
2. Verify conditional logic
3. Ensure no undefined/null results
4. Test email functionality with detailed recommendations

## Implementation Steps (Detailed)

### Step 1: Answer Critical Questions (BLOCKER)
- Cannot proceed without clarification on missing recommendation text
- Need decision on single vs multiple health conditions
- Need clarification on missing questions

### Step 2: Create Recommendation Rules File
- `src/lib/recommendationRules.ts` - separate file for all rules
- Type-safe structure for rule matching
- Export rules array

### Step 3: Update Quiz Questions
- Add missing High Cholesterol questions if confirmed
- Update health conditions to multiple selection if confirmed
- Fix "None/Prefer not to answer" option

### Step 4: Implement Recommendation Engine
- Update `analyzeQuizResults()` in `quiz.ts`
- Add rule matching logic
- Add fallback logic
- Add combination handling if multiple conditions

### Step 5: Create Recommendation Content
- Based on answers to questions above
- Populate all ~500+ scenario combinations
- Or create smart templating system

### Step 6: Update Result Display
- Ensure `QuizResults.tsx` can display all recommendation types
- Add any missing UI elements
- Test email functionality

### Step 7: Testing
- Create test scenarios for each major pathway
- Verify edge cases
- Test all condition combinations

## Risk Assessment

### High Risk
- ❗ **Missing recommendation content** - Cannot complete without actual recommendation text
- ❗ **Scope uncertainty** - Multiple conditions changes the complexity significantly

### Medium Risk
- ⚠️ **Large number of scenarios** - 500+ combinations is complex to manage
- ⚠️ **Maintenance** - Future updates to recommendations will be challenging

### Low Risk
- ✅ Technical implementation - Structure is straightforward once requirements are clear

## Recommendations for Moving Forward

### Option A: Comprehensive (High Effort)
- Add all missing questions
- Implement full rule engine for all 500+ scenarios
- Create detailed recommendation content for each scenario
- **Timeline**: 15-20 hours
- **Accuracy**: Very High

### Option B: Smart Templating (Medium Effort)
- Create base recommendations for each condition
- Use modifiers for age/gender/pregnancy/weight
- Generate recommendations dynamically
- **Timeline**: 8-12 hours
- **Accuracy**: High

### Option C: Simplified (Low Effort)
- Focus on major condition types only
- Use broader categorization
- Generic recommendations with personalization
- **Timeline**: 4-6 hours
- **Accuracy**: Medium

## Next Steps Required

**BEFORE I CAN PROCEED, I NEED:**

1. ✋ **Recommendation Text**: Where is the actual recommendation content for each scenario?
2. ✋ **Missing Questions**: Should I add the High Cholesterol follow-up questions (Q5, Q6)?
3. ✋ **Multiple Conditions**: Should health conditions be single or multiple selection?
4. ✋ **Scope Decision**: Which implementation option (A, B, or C) should I pursue?
5. ✋ **Priority Rules**: How should priority levels be determined?

**Once these are answered, I can proceed with implementation immediately.**
