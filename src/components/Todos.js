import React from "react";
import Todoitem from "./Todoitem";
import propTypes from "prop-types";
const Todos = props => {
  return props.todos.map(todo => (
    <Todoitem
      key={todo.id}
      todo={todo}
      markCompleted={props.markCompleted}
      delTodo={props.delTodo}
    />
  ));
};

Todos.propTypes = {
  todo: propTypes.array
};
export default Todos;
