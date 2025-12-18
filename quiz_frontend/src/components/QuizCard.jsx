import React from "react";
import Progress from "./Progress";
import Question from "./Question";

/**
 * Quiz card layout: progress, question, and navigation controls.
 */
export default function QuizCard({
  title,
  questionsCount,
  currentIndex,
  currentQuestion,
  selectedIndex,
  onSelect,
  onPrev,
  onNext,
  onFinish,
  canGoPrev,
  canGoNext,
  isLast,
}) {
  const currentNumber = currentIndex + 1;

  return (
    <main className="appShell">
      <div className="card" role="region" aria-label="Quiz">
        <header className="cardHeader">
          <div className="brandPill" aria-hidden="true">
            Quiz
          </div>
          <div className="cardHeaderText">
            <h1 className="cardTitle">{title}</h1>
            <p className="cardSubtitle">Answer one question at a time. You can change answers before finishing.</p>
          </div>
        </header>

        <Progress current={currentNumber} total={questionsCount} />

        <section className="cardBody">
          <Question question={currentQuestion} selectedIndex={selectedIndex} onSelect={onSelect} />
        </section>

        <footer className="cardFooter">
          <div className="navRow">
            <button type="button" className="btn btnSecondary" onClick={onPrev} disabled={!canGoPrev}>
              Previous
            </button>

            {!isLast ? (
              <button type="button" className="btn btnPrimary" onClick={onNext} disabled={!canGoNext}>
                Next
              </button>
            ) : (
              <button type="button" className="btn btnSuccess" onClick={onFinish} disabled={!canGoNext}>
                Finish
              </button>
            )}
          </div>

          <p className="helperText" aria-live="polite">
            {selectedIndex == null ? "Select an answer to continue." : "Selection saved."}
          </p>
        </footer>
      </div>
    </main>
  );
}
