import React from "react";

function List({ list, setList }) {
  const handleDelete = (id) => {
    setList(list.filter((l) => l.id !== id));
  };

  return (
    <div className="list-container">
      {list &&
        list.map((li) => (
          <div className="list-box" key={li.id}>
            <p className="list-text">
              <span>{li.id}</span> {li.text}
            </p>
            <button className=" btn-delete" onClick={() => handleDelete(li.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        ))}
    </div>
  );
}

export default List;
