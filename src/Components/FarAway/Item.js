import React from "react";

export function Item({ item, onDeleteItems, onToogle }) {
  return (
    <li className="d-flex ">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToogle(item.id)}
      />
      <span className={item.packed ? "packed" : ""}>
        <h4>
          {item.quantity} {item.description}
        </h4>
      </span>
      <button onClick={() => onDeleteItems(item.id)} className="mb-2">
        ❌
      </button>
    </li>
  );
}
