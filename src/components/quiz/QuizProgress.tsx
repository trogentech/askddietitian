import React from 'react';

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

const QuizProgress: React.FC<QuizProgressProps> = ({
  currentStep,
  totalSteps,
  className = ''
}) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span className="text-sm text-gray-500">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-[#8B2CC9] h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Quiz progress: ${Math.round(progress)}% complete`}
        />
      </div>
    </div>
  );
};

export default QuizProgress;