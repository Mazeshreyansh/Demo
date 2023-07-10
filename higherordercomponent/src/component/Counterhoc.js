import React from "react";

const UpdatedComp = (OrgComp) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((previous) => {
        return { count: previous.count + 1 };
      });
    };
    render() {
      return (
        <OrgComp
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComp;
};
export default UpdatedComp;
