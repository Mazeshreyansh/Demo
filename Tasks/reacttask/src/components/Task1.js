import React, { Component } from "react";

class Task1 extends Component {
  state = { value: " ", length: 0 };

  click = (e) => {
    this.setState({ value: e.target.value });
    this.setState({ length: e.target.value.split(" ").length });
  };
  render() {
    return (
      <div>
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea value={this.state.value} onChange={this.click}></textarea>
        <p>Word Count: {this.state.length}</p>
      </div>
    );
  }
}
export default Task1;
