import React from "react";

export function SelectPercentage({ children, setTip, tip }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">Disssapointed 0%</option>
        <option value="5">It is Okay 5%</option>
        <option value="10">Grat Job 10%</option>
        <option value="20">Amazing 20%</option>
      </select>
    </div>
  );
}
