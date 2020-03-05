import React from 'react';
import axios from 'axios';
import ButtonBar from './Components/ButtonBar.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      question: null,
      count: 0
    }
  }

  getQuestion = () => {
    axios
      .get("https://opentdb.com/api.php?amount=1&encode=base64")
      .then(response => {
        this.setState({
          question: response.data.results[0]
        })
      })
  }

  check = (value) => {
    if (value == atob(this.state.question.correct_answer)) {
      alert("You're Correct!")
      let streak = this.state.count + 1
      this.setState({
        count: streak
      })
    }
    else {
      alert(`You're Wrong, the correct answer was ${atob(this.state.question.correct_answer)}`)
      this.setState({
        count: 0
      })
    }

    this.getQuestion()
  }

  render() {
    let q = "Click the button for a question";
    let start = <button className="startButtonButton" onClick={() => this.getQuestion()}>Start the Game</button>
    if (this.state.question) {
      start = <button className="startButtonButton" onClick={() => this.getQuestion()}>Restart</button>;
      q = atob(this.state.question.question)
    }
    return (
      <div>
        
        <head>
          <link href="https://fonts.googleapis.com/css?family=Quicksand|Raleway&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Permanent+Marker|Sedgwick+Ave|Source+Code+Pro&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Caladea|Roboto&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Caladea|Montserrat|Trade+Winds&display=swap" rel="stylesheet"/>
        </head>
        <div className="questionBox">
          <div>
            <h1>{q}</h1>
          </div>
          <div className="buttonBar">
            <ButtonBar
              check={this.check}
              question={this.state.question}
            />
          </div>
          <div>
            <h2><u>Streak: {this.state.count}</u></h2>
          </div>
        </div>
        <div className="startButton">
          {start}
        </div>
      </div>
    )
  }
}


export default App;
