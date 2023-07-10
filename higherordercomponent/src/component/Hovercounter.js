import React, { Component } from "react";
import UpdatedComp from "./Counterhoc";
class Hovercounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }
  // incrementCount = () => {
  //   this.setState((previous) => {
  //     return { count: previous.count + 1 };
  //   });
  // };

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count}</h2>
      </div>
    );
  }
}
export default UpdatedComp(Hovercounter);
