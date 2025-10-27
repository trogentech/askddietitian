import React from 'react';

interface QuizNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  canProceed: boolean;
  isSubmitting?: boolean;
  isFirstStep: boolean;
  isLastStep: boolean;
  className?: string;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  onPrevious,
  onNext,
  onSubmit,
  canProceed,
  isSubmitting = false,
  isFirstStep,
  isLastStep,
  className = ''
}) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <button
        onClick={onPrevious}
        disabled={isFirstStep}
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          isFirstStep
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md focus:ring-2 focus:ring-gray-300 focus:outline-none'
        }`}
        aria-label="Go to previous step"
      >
        Previous
      </button>

      {isLastStep ? (
        <button
          onClick={onSubmit}
          disabled={!canProceed || isSubmitting}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
            !canProceed || isSubmitting
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#8B2CC9] text-white hover:bg-[#7C3AED] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-[#8B2CC9] focus:outline-none'
          }`}
          aria-label={isSubmitting ? 'Submitting assessment...' : 'Submit health assessment'}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            'Submit Assessment'
          )}
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
            !canProceed
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#8B2CC9] text-white hover:bg-[#7C3AED] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-[#8B2CC9] focus:outline-none'
          }`}
          aria-label="Go to next step"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default QuizNavigation;