import React, { useState } from "react";

function App() {
  const [item, addItem] = useState("");
  const [listItem, setListItem] = useState([]);

  function handleItem(event) {
    const { value } = event.target;
    addItem(value);
  }

  function saveToArray() {
    setListItem((prevItems) => {
      return [...prevItems, item];
    });
    addItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleItem} type="text" value={item} name="newItem" />
        <button onClick={saveToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map((onlyItem) => (
            <li>{onlyItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
