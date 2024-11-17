import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Shopping List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add an item"
        style={{ padding: "10px", width: "300px" }}
      />
      <button onClick={addItem} style={{ padding: "10px", marginLeft: "10px" }}>
        Add
      </button>
      <ul style={{ marginTop: "20px" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {item}
            <button onClick={() => removeItem(index)} style={{ marginLeft: "10px" }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
