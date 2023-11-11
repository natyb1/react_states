import React from "react";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const style = {
  backgroundColor: "#7950f2",
  color: "#fff",
};
const StepsV1 = () => {
  const [step, setStep] = useState(1);
  const [isopen, setIsOpen] = useState(true);

  const next = () => {
    if (step < 3) setStep((st) => st + 1);
  };

  const previous = () => {
    if (step > 1) setStep((st) => st - 1);
  };

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
          <p className="message">
            Step{step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button onClick={previous} style={style}>
              Previous
            </button>
            <button onClick={next} style={style}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default StepsV1;
