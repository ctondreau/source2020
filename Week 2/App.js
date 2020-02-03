import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  state = {
    counter: 0,
    nonsense: "blah"
  };
  /*
*/
  incrementCounter(){
    // Fill this out
  };

  render() {
    return (
      <div className="App">
        {this.state.counter}
        <div>
          <button onClick={() => this.incrementCounter()}>
            click me!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
