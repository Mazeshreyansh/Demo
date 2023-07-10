import React from "react";
function Greet(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello everyone , I am functional component {props.name}</h1>
      <h1>
        Hello everyone , I am functional component{props.name}, {props.phone}
      </h1>
    </div>
  );
}
export default Greet;
