import React, { Component } from "react";

class App extends Component {
  state = { on: true };
  toggle = () => {
    const is0n = this.state.on;
    this.setState({ on: !is0n });
  };
  render() {
    let wallClass = "wall off";
    if (this.state.on) {
      wallClass = "wall on";
      /*JavaScript expression to toggle the state of a light switch*/
    }
    return (
      <div className={wallClass}>
        <div className="switch-plate">
          <div className="screw" />
          <div className="switch" onClick={this.toggle}>
            <div className="switch-handle" />
          </div>
          <div className="screw" />
        </div>
      </div>
    );
  }
}

export default App;
