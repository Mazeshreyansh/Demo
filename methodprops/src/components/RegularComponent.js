import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    console.log("-------RegularComponent------");
    return (
      <div>
        <h1>This is Regular Component {this.props.name}</h1>
      </div>
    );
  }
}
export default RegularComponent;
