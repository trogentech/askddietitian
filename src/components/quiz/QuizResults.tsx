import React from 'react';
import { QuizResult } from '@/lib/quiz';

interface QuizResultsProps {
  result: QuizResult;
  onRetakeQuiz: () => void;
  onBookConsultation: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  result,
  onRetakeQuiz,
  onBookConsultation
}) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'High Priority';
      case 'medium':
        return 'Medium Priority';
      case 'low':
        return 'Low Priority';
      default:
        return 'Standard Priority';
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Your Health Assessment Results
        </h2>
        <p className="text-gray-600">
          Based on your responses, here are your personalized recommendations
        </p>
      </div>

      {/* Priority Badge */}
      <div className="flex justify-center mb-6">
        <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getPriorityColor(result.priority)}`}>
          {getPriorityText(result.priority)}
        </span>
      </div>

      {/* Main Result */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          {result.title}
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {result.summary}
        </p>
      </div>

      {/* Recommendations */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-900 mb-4">
          Recommended Actions
        </h4>
        <div className="grid gap-3">
          {result.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-[#8B2CC9] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                {index + 1}
              </div>
              <p className="text-gray-700">{recommendation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRetakeQuiz}
          className="px-6 py-3 border border-[#8B2CC9] text-[#8B2CC9] rounded-lg hover:bg-[#8B2CC9] hover:text-white transition-colors duration-200"
        >
          Retake Assessment
        </button>
        <button
          onClick={onBookConsultation}
          className="px-6 py-3 bg-[#8B2CC9] text-white rounded-lg hover:bg-[#7C3AED] transition-colors duration-200"
        >
          Book Consultation
        </button>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Important:</strong> This assessment is for informational purposes only and should not replace professional medical advice.
          Always consult with healthcare providers for proper diagnosis and treatment of any health conditions.
        </p>
      </div>
    </div>
  );
};

export default QuizResults;