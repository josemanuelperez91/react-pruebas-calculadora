import React, { Component } from "react";
import { render } from "react-dom";
import { NUMBER,FIRST_STATE } from "./constants";

import "./style.css";

class App extends Component {
 
 state = FIRST_STATE

  sum = () => {
    this.setState({
      integer: NUMBER + this.state.integer
    });
  };

  multiply = () => {
    this.setState({
      integer: NUMBER * this.state.integer
    });
  };

  substract = () => {
    this.setState({
      integer: this.state.integer - NUMBER
    });
  };
  clear = () => {
    this.setState(FIRST_STATE)
  };

  render() {
    return (
      <div>
        <p>{this.state.integer}</p>
        <button onClick={this.sum}>+{NUMBER}</button>
        <button onClick={this.multiply}>x{NUMBER}</button>
        <button onClick={this.substract}>-{NUMBER}</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
