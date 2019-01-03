import React, { Component } from "react";

class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }
  render() {
    return (
      <section id="recipes" class="container">
        <h1>Recipe</h1>
        <div class="recipe">
          <h3>{this.data.recipe_name}</h3>
          <p>{this.data.recipe_description}</p>
          <ul>
            <li>Price: {this.data.price}</li>
            <li>Food category: {this.data.food_category}</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default RecipeItem;
