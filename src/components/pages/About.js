import React from "react";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <b>
        This is the Todolist app v1.0.0 this app is made by Ritik vashistha.
        <br /> <div style={para}>All Reserved by Rvtech.</div>
      </b>
    </div>
  );
}

const para = {
  color: "blue",
  textAlign: "right",
  verticalAlign: "bottom"
};
