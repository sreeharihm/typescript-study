import React from 'react';
import './ScoreBoard.css';

interface ScoreBoardProps {
  correctAnswers: number;
  totalQuestions: number;
  onReset: () => void;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ correctAnswers, totalQuestions, onReset }) => {
  const percentage = totalQuestions > 0 ? ((correctAnswers / totalQuestions) * 100).toFixed(1) : 0;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 40) return 'average';
    return 'needs-improvement';
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return 'Excellent! 🎉';
    if (score >= 60) return 'Good job! 👍';
    if (score >= 40) return 'Keep practicing! 📚';
    return 'Need more study! 💪';
  };

  return (
    <div className="scoreboard-container">
      <h2>Quiz Results</h2>
      
      <div className={`score-display ${getScoreColor(Number(percentage))}`}>
        <div className="score-circle">
          <span className="score-percentage">{percentage}%</span>
        </div>
        
        <div className="score-details">
          <p className="score-fraction">
            {correctAnswers} out of {totalQuestions} questions correct
          </p>
          <p className="score-message">{getScoreMessage(Number(percentage))}</p>
        </div>
      </div>

      {totalQuestions > 0 && (
        <div className="question-breakdown">
          <div className="correct-answers">
            <span className="label">Correct:</span>
            <span className="value">{correctAnswers}</span>
          </div>
          <div className="incorrect-answers">
            <span className="label">Incorrect:</span>
            <span className="value">{totalQuestions - correctAnswers}</span>
          </div>
        </div>
      )}

      <button className="reset-button" onClick={onReset}>
        Start New Quiz
      </button>
    </div>
  );
};

export default ScoreBoard;
