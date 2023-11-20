import React from "react";

export function Bill({ bill, setBill }) {
  return (
    <div>
      <label>How much is the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
