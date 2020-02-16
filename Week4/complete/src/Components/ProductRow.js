import React, { Component } from "react";

export default class ProductRow extends React.Component{
    render(){
        const product = this.props.product;
        let name = product.name;
        if(!product.stocked){
            name = <span style={{color:'red'}}>{name}</span>
        }
        return(
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

