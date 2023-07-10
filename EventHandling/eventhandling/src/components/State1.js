import React, { Component } from "react";

class State1 extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Bangalore",
    };
  }
  press = () => {
    this.setState({
      message: "Hello Delhi",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.press}>Click to Change State</button>
      </div>
    );
  }
}
export default State1;
