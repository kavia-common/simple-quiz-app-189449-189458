import React, { useMemo, useState } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard";
import { questions as localQuestions } from "./data/questions";

/**
 * PUBLIC_INTERFACE
 * App is the main entry point for the quiz UI.
 * It shows one question at a time with Previous/Next navigation and a final score screen.
 *
 * @returns {JSX.Element} The quiz application root.
 */
function App() {
  // Embedded local questions (no backend).
  const questions = useMemo(() => localQuestions, []);

  // selectedAnswers: array where each item is the chosen option index or null
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(() => questions.map(() => null));
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const selectedIndex = selectedAnswers[currentIndex];

  const canGoPrev = currentIndex > 0;
  const canGoNext = selectedIndex != null; // require an answer to proceed/finish
  const isLast = currentIndex === questions.length - 1;

  const score = useMemo(() => {
    return questions.reduce((acc, q, idx) => (selectedAnswers[idx] === q.correctIndex ? acc + 1 : acc), 0);
  }, [questions, selectedAnswers]);

  // PUBLIC_INTERFACE
  const handleSelect = (idx) => {
    setSelectedAnswers((prev) => {
      const copy = [...prev];
      copy[currentIndex] = idx;
      return copy;
    });
  };

  // PUBLIC_INTERFACE
  const handlePrev = () => {
    if (!canGoPrev) return;
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  // PUBLIC_INTERFACE
  const handleNext = () => {
    if (!canGoNext) return;
    setCurrentIndex((i) => Math.min(questions.length - 1, i + 1));
  };

  // PUBLIC_INTERFACE
  const handleFinish = () => {
    if (!canGoNext) return;
    setIsFinished(true);
  };

  // PUBLIC_INTERFACE
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers(questions.map(() => null));
    setIsFinished(false);
  };

  if (isFinished) {
    const pct = Math.round((score / Math.max(1, questions.length)) * 100);

    return (
      <div className="App">
        <main className="appShell">
          <div className="card" role="region" aria-label="Quiz results">
            <header className="cardHeader">
              <div className="brandPill" aria-hidden="true">
                Results
              </div>
              <div className="cardHeaderText">
                <h1 className="cardTitle">Your score</h1>
                <p className="cardSubtitle">Thanks for taking the quiz.</p>
              </div>
            </header>

            <section className="cardBody">
              <div className="scoreBlock">
                <p className="scoreValue" aria-live="polite">
                  {score} <span className="scoreDivider">/</span> {questions.length}
                </p>
                <p className="scoreMeta">
                  <span className="badge">{pct}%</span> correct
                </p>
              </div>

              <div className="review">
                <h2 className="reviewTitle">Review</h2>
                <ol className="reviewList">
                  {questions.map((q, idx) => {
                    const chosen = selectedAnswers[idx];
                    const isCorrect = chosen === q.correctIndex;

                    return (
                      <li key={q.id} className="reviewItem">
                        <div className="reviewQRow">
                          <span className={`dot ${isCorrect ? "dotSuccess" : "dotError"}`} aria-hidden="true" />
                          <div className="reviewText">
                            <p className="reviewQuestion">{q.question}</p>
                            <p className="reviewAnswer">
                              Your answer:{" "}
                              <strong className={isCorrect ? "textSuccess" : "textError"}>
                                {chosen == null ? "—" : q.options[chosen]}
                              </strong>
                            </p>
                            {!isCorrect && (
                              <p className="reviewAnswer">
                                Correct: <strong className="textSuccess">{q.options[q.correctIndex]}</strong>
                              </p>
                            )}
                            <p className="reviewExplain">{q.explanation}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </section>

            <footer className="cardFooter">
              <div className="navRow">
                <button type="button" className="btn btnPrimary" onClick={handleRestart}>
                  Restart quiz
                </button>
              </div>
              <p className="helperText">Tip: Use Tab/Shift+Tab to navigate controls; arrow keys work inside radio groups.</p>
            </footer>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="App">
      <QuizCard
        title="Simple React Quiz"
        questionsCount={questions.length}
        currentIndex={currentIndex}
        currentQuestion={currentQuestion}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
        onPrev={handlePrev}
        onNext={handleNext}
        onFinish={handleFinish}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
        isLast={isLast}
      />
    </div>
  );
}

export default App;
