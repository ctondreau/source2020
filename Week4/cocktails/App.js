import React from 'react';
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cocktail: null
    };
  }

  shake() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
        this.setState({
          cocktail: response.data.drinks[0]
        })
      })
  }

  render() {
    let name = ""
    let instructions;
    let ingredients = []
    let link;
    let glass;
    if (this.state.cocktail) {
      let cocktail = this.state.cocktail
      name = cocktail.strDrink
      instructions = cocktail.strInstructions
      link = cocktail.strDrinkThumb
      glass = cocktail.strGlass
      for (let i = 1; i < 15; i++) {
        let strIng = "strIngredient" + i
        let strMes = "strMeasure" + i
        if (cocktail[strIng]) {
          ingredients.push(<div>{cocktail[strIng]}: {cocktail[strMes]}</div>)
        }
      }
    }
    return (
      <div>
        <div>
          <iframe src="https://giphy.com/embed/sEH3lMz5hMBEc" width="480" height="359" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <div>
          <button onClick={() => this.shake()}>Hello Mr.Magic Dog, Make me a drink!</button>
        </div>
        <h1>
          {name}
        </h1>
        <img alt="Thumbnail" src={link} width="100px" height="100px"></img>
        <div>
          <p><b>Instructions:</b> {instructions}</p>
        </div>
        <p><b>Ingredients:</b> {ingredients}</p>
        <div>
          <p><b>Glass:</b> {glass}</p>

        </div>
      </div>
    )
  }
}
export default App;
