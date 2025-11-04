import React, { useState } from 'react';
import { QuizResult } from '@/lib/quiz';
import { sendDetailedRecommendations } from '@/lib/sendEmail';

interface QuizResultsProps {
  result: QuizResult;
  onRetakeQuiz: () => void;
  onBookConsultation: () => void;
}

const getDiabetesTypeColor = (diabetesType?: string) => {
  switch (diabetesType) {
    case 'prediabetes':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'type1':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'type2':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'gestational':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'family-history':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getDiabetesTypeName = (diabetesType?: string) => {
  switch (diabetesType) {
    case 'prediabetes':
      return 'Prediabetes';
    case 'type1':
      return 'Type 1 Diabetes';
    case 'type2':
      return 'Type 2 Diabetes';
    case 'gestational':
      return 'Gestational Diabetes';
    case 'family-history':
      return 'Family History';
    default:
      return 'General Health';
  }
};

const getBloodPressureColor = (bloodPressure?: string) => {
  switch (bloodPressure) {
    case 'pre-hypertension':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'stage-1':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'stage-2':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'not-sure':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getBloodPressureName = (bloodPressure?: string) => {
  switch (bloodPressure) {
    case 'pre-hypertension':
      return 'Pre-hypertension';
    case 'stage-1':
      return 'Stage 1 Hypertension';
    case 'stage-2':
      return 'Stage 2 Hypertension';
    case 'not-sure':
      return 'High Blood Pressure (Unspecified)';
    default:
      return 'Not Specified';
  }
};

const QuizResults: React.FC<QuizResultsProps> = ({
  result,
  onRetakeQuiz,
  onBookConsultation,
}) => {
  const [email, setEmail] = useState('');
  const [isEmailSubmitting, setIsEmailSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState('');

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

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsEmailSubmitting(true);
    setEmailError('');

    try {
      await sendDetailedRecommendations(email, result);
      setEmailSent(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      setEmailError('Failed to send email. Please try again.');
    } finally {
      setIsEmailSubmitting(false);
    }
  };

  return (
    <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>
          Your Health Assessment Results
        </h2>
        <p className='text-gray-600'>
          Based on your responses, here are your personalized recommendations
        </p>
      </div>

      {/* Diabetes Type Badge */}
      {result.diabetesType && (
        <div className='flex justify-center mb-6'>
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${getDiabetesTypeColor(
              result.diabetesType
            )}`}
          >
            {getDiabetesTypeName(result.diabetesType)}
          </span>
        </div>
      )}

      {/* Blood Pressure Badge */}
      {result.bloodPressure && (
        <div className='flex justify-center mb-6'>
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${getBloodPressureColor(
              result.bloodPressure
            )}`}
          >
            {getBloodPressureName(result.bloodPressure)}
          </span>
        </div>
      )}

      {/* Priority Badge */}
      <div className='flex justify-center mb-6'>
        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold border ${getPriorityColor(
            result.priority
          )}`}
        >
          {getPriorityText(result.priority)}
        </span>
      </div>

      {/* Personalized Factors */}
      {result.personalizedFactors && (
        <div className='bg-blue-50 rounded-lg p-4 mb-6'>
          <h4 className='text-lg font-semibold text-blue-900 mb-2'>
            Your Profile
          </h4>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-blue-800'>
            {result.personalizedFactors.age && (
              <div>
                <strong>Age:</strong>{' '}
                {result.personalizedFactors.age
                  .replace('-', ' - ')
                  .replace('above', '+')}
              </div>
            )}
            {result.personalizedFactors.gender && (
              <div>
                <strong>Gender:</strong> {result.personalizedFactors.gender}
              </div>
            )}
            {result.personalizedFactors.pregnancy && (
              <div>
                <strong>Pregnancy:</strong>{' '}
                {result.personalizedFactors.pregnancy === 'yes'
                  ? 'Currently pregnant'
                  : 'Not pregnant'}
              </div>
            )}
            {result.personalizedFactors.weightStatus && (
              <div>
                <strong>Weight Status:</strong>{' '}
                {result.personalizedFactors.weightStatus === 'yes'
                  ? 'Overweight/Obese'
                  : 'Normal weight'}
              </div>
            )}
            {result.personalizedFactors.pcosGoal && (
              <div>
                <strong>PCOS Goal:</strong>{' '}
                {result.personalizedFactors.pcosGoal.replace('-', ' ')}
              </div>
            )}
            {result.personalizedFactors.pcosWeightStatus && (
              <div>
                <strong>PCOS Weight:</strong>{' '}
                {result.personalizedFactors.pcosWeightStatus.replace('-', ' ')}
              </div>
            )}
            {result.personalizedFactors.bloodPressure && (
              <div>
                <strong>Blood Pressure:</strong>{' '}
                {result.personalizedFactors.bloodPressure.replace('-', ' ')}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Risk Factors */}
      {result.riskFactors && result.riskFactors.length > 0 && (
        <div className='bg-orange-50 rounded-lg p-4 mb-6'>
          <h4 className='text-lg font-semibold text-orange-900 mb-2'>
            Risk Factors Identified
          </h4>
          <ul className='list-disc list-inside text-orange-800'>
            {result.riskFactors.map((factor, index) => (
              <li key={index}>{factor}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Result */}
      <div className='bg-gray-50 rounded-lg p-6 mb-8'>
        <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
          {result.title}
        </h3>
        <p className='text-gray-700 text-lg leading-relaxed mb-4'>
          {result.summary}
        </p>
        <div className='bg-blue-100 border-l-4 border-blue-500 p-4'>
          <p className='text-blue-800 text-sm'>
            <strong>Note:</strong> The recommendations above are summarized. For
            detailed dietary guidance, meal plans, and personalized nutrition
            advice, please enter your email below to receive a comprehensive
            report.
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div className='mb-8'>
        <h4 className='text-xl font-semibold text-gray-900 mb-4'>
          Recommended Actions
        </h4>
        <div className='grid gap-3'>
          {result.recommendations.map((recommendation, index) => (
            <div key={index} className='flex items-start'>
              <div className='flex-shrink-0 w-6 h-6 bg-[#8B2CC9] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5'>
                {index + 1}
              </div>
              <p className='text-gray-700'>{recommendation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Email Collection for Detailed Recommendations */}
      {!emailSent && (
        <div className='bg-blue-50 rounded-lg p-6 mb-8'>
          <h4 className='text-xl font-semibold text-blue-900 mb-4'>
            Get Detailed Recommendations via Email
          </h4>
          <p className='text-blue-800 mb-4'>
            Enter your email address to receive a comprehensive report with
            detailed dietary recommendations, meal planning tips, and additional
            guidance based on your assessment.
          </p>

          <form
            onSubmit={handleEmailSubmit}
            className='flex flex-col sm:flex-row gap-3'
          >
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address'
              className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2CC9] focus:border-transparent'
              required
              disabled={isEmailSubmitting}
            />
            <button
              type='submit'
              disabled={isEmailSubmitting || !email.trim()}
              className='px-6 py-3 bg-[#8B2CC9] text-white rounded-lg hover:bg-[#7C3AED] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 whitespace-nowrap'
            >
              {isEmailSubmitting ? 'Sending...' : 'Send Details'}
            </button>
          </form>

          {emailError && (
            <p className='text-red-600 mt-2 text-sm'>{emailError}</p>
          )}
        </div>
      )}

      {emailSent && (
        <div className='bg-green-50 rounded-lg p-6 mb-8'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <svg
                className='h-5 w-5 text-green-400'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='ml-3'>
              <h4 className='text-lg font-semibold text-green-900'>
                Detailed recommendations sent!
              </h4>
              <p className='text-green-800'>
                Check your email for comprehensive dietary guidance and
                personalized meal planning tips.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <button
          onClick={onRetakeQuiz}
          className='px-6 py-3 border border-[#8B2CC9] text-[#8B2CC9] rounded-lg hover:bg-[#8B2CC9] hover:text-white transition-colors duration-200'
        >
          Retake Assessment
        </button>
        <button
          onClick={onBookConsultation}
          className='px-6 py-3 bg-[#8B2CC9] text-white rounded-lg hover:bg-[#7C3AED] transition-colors duration-200'
        >
          Book Consultation
        </button>
      </div>

      {/* Disclaimer */}
      <div className='mt-8 p-4 bg-blue-50 rounded-lg'>
        <p className='text-sm text-blue-800'>
          {/* <strong>Important:</strong> This assessment is for informational purposes only and should not replace professional medical advice. */}
        </p>
      </div>
    </div>
  );
};

export default QuizResults;
