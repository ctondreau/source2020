import React, { Component }  from 'react';
import './App.css';
import ProductTable from "./Components/ProductTable.js";
import SearchBar from "./Components/SearchBar.js"


class App extends Component{
  constructor(){
    super();
    this.state={
      products :[
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
      ],
      inStock: false,
      searchText: ""
    };
  }

  changeParent = (field,value) => {
    this.setState({
      [field]:value
    });
  };

  render(){
    return(
        <div>
          <SearchBar 
            searchText = {this.state.searchText}
            inStock = {this.state.inStock}
            changeParent = {this.changeParent} />
          <ProductTable
            searchText = {this.state.searchText}
            inStock = {this.state.inStock}
            products = {this.state.products} 
            />
        </div>
    )
  }
}

export default App;