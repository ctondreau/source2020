import React, { Component } from 'react';
import AddBar from './Components/AddBar.js'
import './App.css';
import { message } from 'antd';
import "antd/dist/antd.css";
import TaskRows from './Components/TaskRows.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  addTask = task => {
    if (task == "") {
      message.error("Task has to contain something")
    } else {
      let prevState = this.state.items
      prevState.push(task);
      this.setState({
        items: prevState
      });
    }
  }

  removeTask = key => {
    let prevState = this.state.items.filter(item => !(item == key));
    this.setState({
      items: prevState
    });
  } 


  render() {
    return (
      <div className="whole">
        <h1>
          Tasks
        </h1>
        <hr></hr>
        <div>
          <TaskRows
            items={this.state.items}
            removeTask={this.removeTask} />
        </div>
        <hr></hr>
        <div>
          <AddBar
            addTask={this.addTask} />
        </div>
      </div>
    )
  }
}

export default App;
