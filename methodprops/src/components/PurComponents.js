import React, { PureComponent } from "react";

class PurComponents extends PureComponent {
  render() {
    console.log("----pure component----");
    return (
      <div>
        <h1>This is PureComponent {this.props.name}</h1>
      </div>
    );
  }
}
export default PurComponents;
