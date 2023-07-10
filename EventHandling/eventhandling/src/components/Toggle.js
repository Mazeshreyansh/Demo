import React, { Component } from "react";
import "./Toggle.css";

class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Bangalore",
      message2: "Hello Delhi",
      toggle: true,
    };
  }
  press = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    if (this.state.toggle) {
      return (
        <div id="div1">
          <h1>{this.state.message2}</h1>
          <button onClick={this.press}>Click to change</button>
        </div>
      );
    } else {
      return (
        <div id="div2">
          <h1>{this.state.message}</h1>;
          <button onClick={this.press}>Click to change</button>
        </div>
      );
    }
  }
}
export default Toggle;
