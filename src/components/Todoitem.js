import React from "react";
import propTypes from "prop-types";
const Todoitem = props => {
  const getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: props.todo.completed ? "line-through" : "none"
    };
  };

  const { id, title } = props.todo;
  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onChange={props.markCompleted.bind(this, id)} />
        {""}
        {title}
        <button style={btnStyle} onClick={props.delTodo.bind(this, id)}>
          *
        </button>
      </p>
    </div>
  );
};
Todoitem.propTypes = {
  todo: propTypes.object
};

const btnStyle = {
  background: "#ff0000",
  color: "#ffff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "100%",
  cursor: "pointer",
  float: "right"
};

export default Todoitem;
