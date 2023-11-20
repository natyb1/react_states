import React from "react";

export function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <h2>Add items to your List!</h2>
      </footer>
    );

  const numItems = items.length;
  const numpacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numpacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>
          {" "}
          <h2> You have packed everything. Your ready to go!🛫</h2>{" "}
        </em>
      ) : (
        <em>
          {" "}
          <h2>
            You have {numItems} items on your List and you have packed{" "}
            {numpacked} ({percentage}%)
          </h2>
        </em>
      )}
      :
    </footer>
  );
}
