import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  //Adding using spread operator
  function handleAddItems(newItem) {
    setItems((prev) => [...prev, newItem]);
  }
  // deleting using filter method
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // updating using map method
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggle={handleToggle}
      />
      <Stats />
    </div>
  );
};

function Logo() {
  return <h1 className="mb-0"> 🌴 Far Away 👜</h1>;
}

function Form({ onAdditem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, id: Date.now(), packed: false };
    onAdditem(newItem);
    setQuantity(1);
    setDescription("");
  }

  return (
    <>
      <form id="form" onSubmit={handleSubmit} className="add-form">
        <h3>What do you need for your Trip 💼?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          value={description}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}

function PackingList({ items, onDeleteItems, onToggle }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggle(item.id);
        }}
      />
      <span className={item.packed ? "packed" : ""}>
        <h4>
          {item.quantity} {item.description}
        </h4>
      </span>
      <button className="mb-2" onClick={() => onDeleteItems(item.id)}>
        ❌
      </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> You have X items on your List and you have packed X (X%) </em>
    </footer>
  );
}

export default App;
