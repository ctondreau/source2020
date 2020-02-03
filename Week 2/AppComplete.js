import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  state = {
    counter: 0,
    coin:"T"
  };
  /*
*/
  incrementCounter(){
    this.setState({
      counter: (this.state.counter+1)
    });
  };

  coinFlip(){
    let chance = "";
    let num = Math.random();
    if(num<.5){
      chance = "T";
    }else{
      chance = "F";
    };
    this.setState({
      coin: chance
    });
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
        <div className="Coin">
          {this.state.coin}
          <div>
          <button onClick={() => this.coinFlip()}>
            Flip the coin!
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
