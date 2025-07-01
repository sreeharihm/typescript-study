import React, { useState } from 'react';
import { Question } from '../types/Question';
import './Quiz.css';

interface QuizProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const Quiz: React.FC<QuizProps> = ({ question, onAnswer, onNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === question.answer;
    setIsCorrect(correct);
    setShowResult(true);
    onAnswer(correct);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
    onNext();
  };

  return (
    <div className="quiz-container">
      <div className="question-section">
        <h2>{question.question}</h2>
        <div className="choices">
          {question.choices.map((choice, index) => (
            <button
              key={index}
              className={`choice-button ${
                showResult
                  ? index === question.answer
                    ? 'correct'
                    : index === selectedAnswer
                    ? 'incorrect'
                    : ''
                  : selectedAnswer === index
                  ? 'selected'
                  : ''
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
            >
              {index + 1}. {choice}
            </button>
          ))}
        </div>
      </div>

      {showResult && (
        <div className={`result-section ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="result-header">
            {isCorrect ? (
              <span className="result-icon">🎉</span>
            ) : (
              <span className="result-icon">❌</span>
            )}
            <h3>{isCorrect ? 'Correct!' : 'Wrong!'}</h3>
          </div>
          {!isCorrect && (
            <div className="explanation">
              <strong>Explanation:</strong> {question.explanation}
            </div>
          )}
          <button className="next-button" onClick={handleNext}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
