import React, { useState } from "react";

export function AccordionItem({ title, text, num }) {
  const [isOpen, setIsopen] = useState(false);
  function handleOpen() {
    setIsopen((isOpen) => !isOpen);
  }
  return (
    <div onClick={handleOpen} class="accordion-item ">
      <div class={`accordion-title ${isOpen ? "open" : ""}`}>
        <p class="accordion-icon">{num < 9 ? `0${num + 1}` : num}</p>
        <h2 class="title-text">{title}</h2>
        <p class="accordion-icon">{isOpen ? "-" : "+"}</p>
      </div>

      {isOpen && <div class="accordion-text">{text}</div>}
    </div>
  );
}
