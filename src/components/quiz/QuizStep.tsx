import React from 'react';
import { QuizStep as QuizStepType, QuizAnswers } from '@/lib/quiz';

interface QuizStepProps {
  step: QuizStepType;
  answers: QuizAnswers;
  onAnswerChange: (
    questionId: string,
    value: string,
    isMultiple?: boolean
  ) => void;
  className?: string;
}

const QuizStep: React.FC<QuizStepProps> = ({
  step,
  answers,
  onAnswerChange,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 mb-8 ${className}`}>
      <div className='mb-6'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
          {step.title}
        </h2>
        {step.description && (
          <p className='text-gray-600'>{step.description}</p>
        )}
      </div>

      <div className='space-y-6'>
        {step.questions
          .filter((question) => {
            if (question.condition) {
              if (typeof question.condition === 'function') {
                return question.condition(answers);
              } else {
                const condition = question.condition as { field: string; value: string | string[] };
                const { field, value } = condition;
                if (Array.isArray(value)) {
                  return value.includes(answers[field] as string);
                }
                return answers[field] === value;
              }
            }
            return true;
          })
          .map((question) => (
            <div key={question.id} className='space-y-4'>
              <fieldset>
                <legend className='block'>
                  <span className='text-lg font-medium text-gray-900'>
                    {question.question}
                    {question.required && (
                      <span className='text-red-500 ml-1' aria-label='required'>
                        *
                      </span>
                    )}
                  </span>
                </legend>

                <div className='space-y-3 mt-4'>
                  {question.options
                    .filter((option) => {
                      if (option.condition) {
                        const { field, value } = option.condition;
                        return answers[field] === value;
                      }
                      return true;
                    })
                    .map((option) => {
                      const isChecked =
                        question.type === 'multiple'
                          ? ((answers[question.id] as string[]) || []).includes(
                              option.value
                            )
                          : answers[question.id] === option.value;

                      return (
                        <label
                          key={option.id}
                          className='flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-[#8B2CC9] focus-within:border-[#8B2CC9]'
                        >
                          <input
                            type={
                              question.type === 'multiple'
                                ? 'checkbox'
                                : 'radio'
                            }
                            name={question.id}
                            value={option.value}
                            checked={isChecked}
                            onChange={(e) =>
                              onAnswerChange(
                                question.id,
                                e.target.value,
                                question.type === 'multiple'
                              )
                            }
                            className='w-4 h-4 text-[#8B2CC9] border-gray-300 focus:ring-[#8B2CC9] focus:ring-2'
                            aria-describedby={
                              question.required
                                ? `${question.id}-required`
                                : undefined
                            }
                          />
                          <span className='ml-3 text-gray-700'>
                            {option.text}
                          </span>
                        </label>
                      );
                    })}
                </div>

                {question.required && (
                  <div id={`${question.id}-required`} className='sr-only'>
                    This question is required
                  </div>
                )}
              </fieldset>
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuizStep;
