import React, { Component } from "react";

class Class3 extends Component {
  Click() {
    document.getElementById("i1").innerHTML = "button clicked";
  }
  render() {
    return (
      <div>
        <h1 id="i1"></h1>
        <button onClick={this.Click}>Click</button>
      </div>
    );
  }
}
export default Class3;
