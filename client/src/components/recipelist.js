import React, { Component } from "react";
import axios from "axios";
import Navbar from "./navbar";
import RecipeItem from "./recipeItem";

class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  async fetchRecipes() {
    const recipes = await axios.get("http://localhost:5000/api/getRecipes");
    this.setState({ recipes: recipes.data });
  }
  // Ajax call to get api data from a server
  componentDidMount() {
    this.fetchRecipes();
  }
  render() {
    const recipeItems = this.state.recipes.map((recipe, i) => {
      return <RecipeItem key={recipe.recipe_id} data={recipe} />;
    });
    return (
      <div className="container">
        <Navbar />
        <ul>{recipeItems}</ul>
      </div>
    );
  }
}

export default RecipeList;
