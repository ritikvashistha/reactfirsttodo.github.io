import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import AddTodo from "./components/layout/AddTodo";
import "./App.css";
import Todos from "./components/Todos";

import About from "./components/pages/About";
const App = props => {
  //todos
  const [state, setState] = useState({
    todos: [
      {
        id: 1,
        title: "take out of trash ",
        completed: false
      },
      {
        id: 2,
        title: "dinner with wife ",
        completed: true
      },
      {
        id: 3,
        title: "Metting with boss",
        completed: false
      }
    ]
  });
  //toggle todo
  const markCompleted = id => {
    setState({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //delete todo
  const delTodo = id => {
    setState({
      todos: [...state.todos.filter(todo => todo.id !== id)]
    });
  };

  //add todo
  const addingTodo = title => {
    const newTodo = {
      id: Math.random(),
      title,
      completed: false
    };
    setState({ todos: [...state.todos, newTodo] });
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addingTodo={addingTodo} />

                <Todos
                  todos={state.todos}
                  markCompleted={markCompleted}
                  delTodo={delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
