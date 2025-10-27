'use client';

import React, { useState } from 'react';
import { QuizAnswers, getFilteredSteps, analyzeQuizResults } from '@/lib/quiz';
import QuizProgress from '@/components/quiz/QuizProgress';
import QuizStep from '@/components/quiz/QuizStep';
import QuizNavigation from '@/components/quiz/QuizNavigation';
import QuizResults from '@/components/quiz/QuizResults';

const QuizPage = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizResult, setQuizResult] = useState<any>(null);

  const filteredSteps = getFilteredSteps(answers);
  const currentStep = filteredSteps[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === filteredSteps.length - 1;

  const handleAnswerChange = (questionId: string, value: string, isMultiple = false) => {
    setAnswers(prev => {
      if (isMultiple) {
        const currentValues = (prev[questionId] as string[]) || [];
        const newValues = currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value];
        return { ...prev, [questionId]: newValues };
      }
      return { ...prev, [questionId]: value };
    });
  };

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Here you would typically send the answers to your backend
    console.log('Quiz answers:', answers);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Analyze results
    const result = analyzeQuizResults(answers);
    setQuizResult(result);
    setShowResults(true);
    setIsSubmitting(false);
  };

  const handleRetakeQuiz = () => {
    setCurrentStepIndex(0);
    setAnswers({});
    setShowResults(false);
    setQuizResult(null);
  };

  const handleBookConsultation = () => {
    // Here you would implement booking logic
    alert('Booking functionality would be implemented here. Redirecting to consultation booking...');
  };

  const canProceed = () => {
    if (!currentStep) return false;

    return currentStep.questions.every(question => {
      if (!question.required) return true;

      const answer = answers[question.id];
      if (question.type === 'multiple') {
        return Array.isArray(answer) && answer.length > 0;
      }
      return typeof answer === 'string' && answer.trim() !== '';
    });
  };

  if (showResults && quizResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <QuizResults
            result={quizResult}
            onRetakeQuiz={handleRetakeQuiz}
            onBookConsultation={handleBookConsultation}
          />
        </div>
      </div>
    );
  }

  if (!currentStep) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B2CC9] mx-auto mb-4" aria-hidden="true"></div>
          <p className="text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Health Assessment
          </h1>
          <p className="text-gray-600">
            Help us understand your health needs for personalized recommendations
          </p>
        </header>

        {/* Progress Indicator */}
        <QuizProgress
          currentStep={currentStepIndex}
          totalSteps={filteredSteps.length}
        />

        {/* Quiz Step Content */}
        <QuizStep
          step={currentStep}
          answers={answers}
          onAnswerChange={handleAnswerChange}
        />

        {/* Navigation */}
        <QuizNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
          canProceed={canProceed()}
          isSubmitting={isSubmitting}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
        />
      </div>
    </div>
  );
};

export default QuizPage;