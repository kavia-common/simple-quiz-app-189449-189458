import React, { useId } from "react";

/**
 * Single question view with multiple-choice answers (radio group).
 */
export default function Question({ question, selectedIndex, onSelect }) {
  const groupId = useId();

  return (
    <div className="question">
      <h2 className="questionTitle">{question.question}</h2>

      <fieldset className="optionsFieldset">
        <legend className="srOnly">Choose an answer</legend>

        <div className="options" role="radiogroup" aria-label="Answer choices">
          {question.options.map((opt, idx) => {
            const id = `${groupId}-${question.id}-${idx}`;
            const checked = selectedIndex === idx;

            return (
              <label key={id} className={`option ${checked ? "optionSelected" : ""}`} htmlFor={id}>
                <input
                  id={id}
                  className="optionInput"
                  type="radio"
                  name={`q-${question.id}`}
                  value={idx}
                  checked={checked}
                  onChange={() => onSelect(idx)}
                />
                <span className="optionControl" aria-hidden="true" />
                <span className="optionText">{opt}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
