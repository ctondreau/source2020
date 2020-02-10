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
        // This is an example to show you how the onSearch works, we will delete this
        this.setState({
            term:value
        });
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
                {this.state.term}
            </div>
        );
    }
}
