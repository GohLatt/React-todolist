import React from "react";
import { useState } from "react";
import List from "./List";

const App = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handle = () => {
    setList((list) => [...list, { id: list.length + 1, text }]);
  };

  return (
    <div className="background">
      <div className="container">
        <h1>Gohlatt TODOLIST</h1>

        <div className="data-input">
          <input
            type="text"
            value={text}
            onChange={(e) => setText((t) => (t = e.target.value))}
          />
          <button className="btn btn-enter" onClick={handle}>
            Enter
          </button>
        </div>
      </div>
      <List list={list} setList={setList} />
    </div>
  );
};

export default App;
