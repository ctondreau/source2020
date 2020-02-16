import React, { Component } from "react";
import ProductRow from "./ProductRow.js";
import ProductCategoryRow from "./ProductCategoryRow.js";

export default class ProductTable extends React.Component{
    render(){
        let lastCategory = null;
        let rows = []
        this.props.products.forEach((product) => {
            if (product.name.indexOf(this.props.searchText) === -1) {
              return;
            }
            if (this.props.inStock && !product.stocked) {
              return;
            }
            if (product.category !== lastCategory) {
              rows.push(
                <ProductCategoryRow
                  category={product.category} />
              );
            }
            rows.push(
              <ProductRow
                product={product} />
            );
            lastCategory = product.category;
          });

        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}