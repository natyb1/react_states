import React from "react";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const StepsV1 = () => {
  const [step, setStep] = useState(1);
  const [isopen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((st) => st + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep((st) => st - 1);
  }

  return (
    <div>
      <button onClick={() => setIsOpen((isopen) => !isopen)} className="close">
        &times;
      </button>
      {isopen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2 "
              textColor="#fff "
              onClick={handlePrevious}
            >
              👈 Previous
            </Button>

            <Button bgColor="#7950f2 " textColor="#fff " onClick={handleNext}>
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <p>Step{step}:</p>
      {children}
    </div>
  );
}
export default StepsV1;
