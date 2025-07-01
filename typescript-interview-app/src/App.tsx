import React, { useState } from 'react';
import Quiz from './components/Quiz';
import CodeExample from './components/CodeExample';
import ScoreBoard from './components/ScoreBoard';
import { questions } from './data/questions';
import './App.css';

type AppView = 'menu' | 'quiz' | 'examples' | 'results';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('menu');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleStartQuiz = () => {
    setCurrentView('quiz');
    setCurrentQuestionIndex(Math.floor(Math.random() * questions.length));
  };

  const handleAnswer = (isCorrect: boolean) => {
    setTotalQuestions(prev => prev + 1);
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(Math.floor(Math.random() * questions.length));
  };

  const handleShowExamples = () => {
    setCurrentView('examples');
  };

  const handleShowResults = () => {
    setCurrentView('results');
  };

  const handleBackToMenu = () => {
    setCurrentView('menu');
  };

  const handleResetQuiz = () => {
    setCorrectAnswers(0);
    setTotalQuestions(0);
    setCurrentView('menu');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TypeScript Interview Prep</h1>
        <p>Master TypeScript concepts through interactive examples and quizzes</p>
      </header>

      <main className="App-main">
        {currentView === 'menu' && (
          <div className="menu-container">
            <div className="menu-options">
              <button className="menu-button primary" onClick={handleShowExamples}>
                📚 View Code Examples
              </button>
              <button className="menu-button primary" onClick={handleStartQuiz}>
                🧠 Take Quiz Question
              </button>
              {totalQuestions > 0 && (
                <button className="menu-button secondary" onClick={handleShowResults}>
                  📊 View Results ({correctAnswers}/{totalQuestions})
                </button>
              )}
            </div>
            
            {totalQuestions > 0 && (
              <div className="current-score">
                <p>Current Session: {correctAnswers} correct out of {totalQuestions} questions</p>
              </div>
            )}
          </div>
        )}

        {currentView === 'quiz' && (
          <div className="quiz-view">
            <div className="quiz-header">
              <button className="back-button" onClick={handleBackToMenu}>
                ← Back to Menu
              </button>
              <div className="quiz-stats">
                Score: {correctAnswers}/{totalQuestions}
              </div>
            </div>
            <Quiz
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              onNext={handleNextQuestion}
            />
          </div>
        )}

        {currentView === 'examples' && (
          <div className="examples-view">
            <button className="back-button" onClick={handleBackToMenu}>
              ← Back to Menu
            </button>
            <CodeExample />
          </div>
        )}

        {currentView === 'results' && (
          <div className="results-view">
            <button className="back-button" onClick={handleBackToMenu}>
              ← Back to Menu
            </button>
            <ScoreBoard
              correctAnswers={correctAnswers}
              totalQuestions={totalQuestions}
              onReset={handleResetQuiz}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
