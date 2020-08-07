import React from "react";

function Greeter(props) {
  function greet() {
    alert(`Hello ${props.name}`);
  }
  return (
    <>
      <h1>
        Hi There,{props.name}
        {"!".repeat(props.excitement)}
      </h1>
      <p>You are {props.age} years old</p>
      <button onClick={greet}>Click Me</button>
    </>
  );
}
export default Greeter;
