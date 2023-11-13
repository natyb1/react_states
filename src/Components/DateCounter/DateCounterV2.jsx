import React, { useState } from "react";
export default function DayCounterV2() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(1);

  function handleReset(e) {
    e.preventDefault();
    setCount(0);
    setRange(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="text-center mt-5">
      <input
        value={range}
        onChange={(e) => setRange(Number(e.target.value))}
        type="range"
        min="1"
        max="10"
      />
      {range}
      <div className="d-flex justify-content-center mt-3">
        <button onClick={() => setCount((c) => c - range)}>-</button>
        <input
          type="Number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + range)}>+</button>
      </div>

      <h3 className="text-center mt-3">
        {count === 0
          ? "Today is "
          : count >= 1
          ? `${count} days from now will be `
          : `${Math.abs(count)} days ago was`}
        {date.toDateString()}
      </h3>

      <button
        onClick={handleReset}
        className={range === 0 || range === 1 ? "d-none" : ""}
      >
        Reset
      </button>
    </div>
  );
}
