import React, { useState } from "react";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import Form from "./Form";
import { Logo } from "./Logo";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((item) => [...item, newItem]);
  }

  function handleDeleteItems(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handlePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    const confirmed = window.confirm("are you sure you want to delete?");
    if (confirmed) return setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToogle={handlePacked}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
