import React, { useState } from "react";

const DateCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  let message = "";
  if (count === 0) {
    message = "Today is ";
  } else if (count > 1) {
    message = `${count} days from now is `;
  } else if (count === 1) {
    message = `${count} day from now is `;
  } else {
    message = `${Math.abs(count)} days ago was `;
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center mt-5">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <h4>Step:{step}</h4>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <h4>Count:{count}</h4>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <h4 className="mt-3">
        {message}
        <span>{date.toDateString()}</span>
      </h4>{" "}
    </div>
  );
};

export default DateCounter;
