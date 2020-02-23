import React,{Component} from 'react';
import {Input} from 'antd';
import "antd/dist/antd.css";

const Search = Input.Search;

export default class AddBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <Search
                placeholder="Input Task To Add"
                enterButton="Add Task"
                size="large"
                onSearch={value => this.props.addTask(value)}
                /> 
            </div>
        )
    }
}
