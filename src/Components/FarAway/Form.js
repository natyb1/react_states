import React, { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") return;
    const newItem = { description, id: Date.now(), quantity, packed: false };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your Trip 💼?</h3>
      <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
      />
      <button>Add</button>
    </form>
  );
}
