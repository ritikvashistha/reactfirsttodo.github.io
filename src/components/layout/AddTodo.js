import React, { useState } from "react";

const AddTodo = props => {
  const [states, setState] = useState({
    title: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    props.addingTodo(states.title);
    setState({ title: "" });
  };

  const onChange = e => setState({ [e.target.name]: e.target.value });

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Add todo"
        value={states.title}
        onChange={onChange}
      />
      <input
        type="submit"
        value="submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
};

export default AddTodo;
