import React from "react";

export function Output({ bill, avarage, onReset }) {
  return (
    <div>
      <h2>
        You Pay ${bill + avarage} (${bill} + ${avarage}Tip)
      </h2>
    </div>
  );
}
