import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.Greeting = this.Greeting.bind(this);

    this.state = {
      name: "Super class",
    };
  }
  Greeting = () => {
    alert("Hi from superclass" + this.state.name);
  };
  render() {
    return (
      <div>
        <ChildComponent func={this.Greeting} />
      </div>
    );
  }
}

export default ParentComponent;
