import React from "react";

function Click() {
  document.getElementById("i1").innerHTML = "demo string";
}
function FunctionClick() {
  return (
    <div>
      <h1 id="i1">this is a demo heading</h1>
      <button onClick={Click}>Click</button>
    </div>
  );
}
export default FunctionClick;
