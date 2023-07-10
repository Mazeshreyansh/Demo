import React, { Component, PureComponent } from "react";
import RegularComponent from "./components/RegularComponent";
import PurComponents from "./components/PurComponents";

class Parent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Messi",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "lionel",
      });
    }, 2000);
  }
  render() {
    console.log("----parent Component----");
    return (
      <div>
        <h1>This is parent</h1>
        <RegularComponent name={this.state.name} />
        <PurComponents name={this.state.name}></PurComponents>
      </div>
    );
  }
}
export default Parent;
