import React, { Component } from "react";

class Userinput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "shreyansh",
      passWord: "",
    };
  }
  handelUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  handlepassWord = (pass) => {
    this.setState({
      passWord: pass.target.value,
    });
  };
  handelSubmit = () => {
    alert(`Usename:${this.state.userName}`);
    alert(`Password:${this.state.passWord}`);
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <div>
          <label>User Name: </label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handelUserName}
          />
          <label>Password: </label>
          <input
            type="password"
            value={this.state.passWord}
            onChange={this.handlepassWord}
          />
        </div>
        <input type="submit"></input>
      </form>
    );
  }
}
export default Userinput;
