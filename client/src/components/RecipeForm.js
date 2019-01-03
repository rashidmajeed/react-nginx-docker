import React, { Component } from "react";
import Navbar from "./navbar";
import axios from "axios";

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe_name: "",
      recipe_description: "",
      food_category: "",
      price: "",
      country: ""
    };
  }
 
  handleSubmit = async event => {
    event.preventDefault();

    await axios.post("/api/addRecipe", {
      recipe_name: this.state.recipe_name,
      recipe_description: this.state.recipe_description,
      food_category: this.state.food_category,
      price: this.state.price,
      country: this.state.country
    });
    this.setState({
      recipe_name: "",
      recipe_description: "",
      food_category: "",
      price: "",
      country: ""
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="form-wrap">          
            <h1>Add Recipe</h1>
            <p>
              Recipe for a specific food category will be submitted and saved
            </p>
            <form onSubmit={this.handleSubmit}>
              <div class="input-group">
                <label>Recipe Name</label>
                <br />
                <input
                  type="text"
                  class="input-box"
                  name="recipe_name"
                  onChange={this.onChange}
                  value={this.state.recipe_name}
                />
              </div>
              <br />
              <div class="input-group">
                <label>Description</label>
                <br />
                <input
                  type="text"
                  class="input-box"
                  name="recipe_description"
                  onChange={this.onChange}
                  value={this.state.recipe_description}
                />
              </div>
              <div class="input-group">
                <label>Food Category</label>
                <br />
                <textarea
                  name="food_category"
                  class="input-box"
                  onChange={this.onChange}
                  value={this.state.food_category}
                />
              </div>
              <div class="input-group">
                <label>Price</label>
                <br />
                <textarea
                  name="price"
                  class="input-box"
                  onChange={this.onChange}
                  value={this.state.price}
                />
              </div>
              <div class="input-group">
                <label>Country</label>
                <br />
                <textarea
                  name="country"
                  class="input-box"
                  onChange={this.onChange}
                  value={this.state.country}
                />
              </div>
              <br />
              <button type="submit" class="btn btn-reverse">
                Submit
              </button>
            </form>
          </div>
        </div>   
    );
  }
}

export default RecipeForm;
