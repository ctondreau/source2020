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
    let pics = this.state.results.map(pic=>{
      if(pic.data[0].media_type==="image"){
        let link = pic.links[0].href;
        return(
          <img src={link} className="Images"></img>
        )
      }
    })
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
