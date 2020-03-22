import React, { Component }  from 'react';
import './App.css';
import SearchBar from "./Components/SearchBar.js";
import "antd/dist/antd.css";
import firebase from './firebase.js';


class App extends Component{
  constructor(){
    super();
    this.state={
      results:[],
      favs:false
    };
  }

  changeParent= (field,value) => {
    this.setState({
      [field]:value
    });
  };

  addFav = pic => {
    const favsRef = firebase.database().ref('favorites');
    favsRef.push(pic);
  }

  toggleFav=()=>{
    let updated = !this.state.favs;
    this.setState({
      favs:updated
    });
  }

  render(){
    let pics = this.state.results.map(pic=>{
      if(pic.data[0].media_type==="image"){
        let link = pic.links[0].href;
        return(
          <div className="contentBox">
            <img src={link} className="Images"></img>
            <button onClick={()=>this.addFav(link)}>Favorite</button>
          </div>
          
        )
      }
    })
    let favs = [];
    if(this.state.favs){
      const favsRef = firebase.database().ref('favorites');
      favsRef.on('value',(snapshot)=>{
        let favedPics = snapshot.val();
        for(let pic in favedPics){
          favs.push(
            <img src={favedPics[pic]} className="Images"></img>
          )
        }
      })
    }
    return(
      <div>
        <button onClick={()=>this.toggleFav()}>Toggle Favorites</button>
        <div>
        <SearchBar
          changeParent={this.changeParent}>
          </SearchBar>
        </div>
        <div>
          {favs}
          <hr></hr>
          {pics}
        </div>
      </div>
    )
  }
}

export default App;
