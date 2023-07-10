import React, { Component } from "react";
import UpdatedComp from "./Counterhoc";
class Hoc extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // Click = () => {
  //   this.setState((previous) => {
  //     return { count: previous.count + 1 };
  //   });
  // };

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={incrementCount}>ClickMe {count}</button>
      </div>
    );
  }
}
export default UpdatedComp(Hoc);
