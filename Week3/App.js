import React, { Component }  from 'react';
import './App.css';
import SearchBar from "./Components/SearchBar.js";
import "antd/dist/antd.css";


class App extends Component{
  constructor(){
    super();
    this.state={
      results:[]
    };
  }

  changeParent= (field,value) => {
    this.setState({
      [field]:value
    });
  };

  render(){
    let pics
    // Data manipulation here
    return(
      <div>
        <div>
        <SearchBar
          changeParent={this.changeParent}>
          </SearchBar>
        </div>
        <div>
          {pics}
        </div>
      </div>
    )
  }
}

export default App;
