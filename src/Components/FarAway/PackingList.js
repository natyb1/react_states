import React, { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItems, onToogle, onClear }) {
  const [sortBy, setSortBy] = useState("input");

  let sorted;
  if (sortBy === "input") {
    sorted = items;
  } else if (sortBy === "description") {
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "status") {
    sorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  } else if (sortBy === "quantity") {
    sorted = items.slice().sort((a, b) => a.quantity - b.quantity);
  }

  return (
    <div className="list d-flex">
      <ul>
        {sorted.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onToogle={onToogle}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By input Order</option>
          <option value="description">Sort By Description</option>
          <option value="status">Sort By input Packed Status</option>
          <option value="quantity">Sort By input quantity</option>
        </select>
        <button onClick={onClear} className="rounded">
          Clear List
        </button>
      </div>
    </div>
  );
}
