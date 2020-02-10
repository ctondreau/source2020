import React, { Component } from "react";
import axios from "axios";
import { Input, message } from "antd";
import "antd/dist/antd.css"

const Search = Input.Search;

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            results:[],
            term: ""
        };
    }

    // fn for performing NASA API GET Requests

    doSearch = value => {
        let term = value;
        axios
            .get("https://images-api.nasa.gov/search?q=" + term)
            .then(response=> {
                this.setState({
                    results: response.data.collection.items
                });
                this.props.changeParent("results", this.state.results);
                if (this.state.results.length<1){
                    message.warning("No results found")
                }
            })
            .catch(error=>{
                console.log(error)
            })
        
    };

    render(){
        return(
            <div className = "SearchBar">
                <Search
                placeholder="NASA image search"
                enterButton="search"
                size="large"
                onSearch={value => this.doSearch(value)}
                />
            </div>
        );
    }
}
