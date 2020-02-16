import React from "react"

export default class SearchBar extends React.Component {
    render() {
      return (
        <form>
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={e => this.props.changeParent("searchText",e.target.value)} />
          <p>
            <input 
              type="checkbox"
              checked = {this.props.inStock}
              onClick = {e => this.props.changeParent("inStock",e.target.checked)} />
                
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
};
