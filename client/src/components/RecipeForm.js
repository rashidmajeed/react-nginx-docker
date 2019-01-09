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
    try {
      await axios.post("http://localhost:5000/api/addRecipe", {
        recipe_name: this.state.recipe_name,
        recipe_description: this.state.recipe_description,
        food_category: this.state.food_category,
        price: this.state.price,
        country: this.state.country
      });
    } catch (err) {
      console.log(err.message);
    }
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
          <p>Recipe for a specific food category will be submitted and saved</p>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label>Recipe Name</label>
              <br />
              <input
                type="text"
                className="input-box"
                name="recipe_name"
                onChange={this.onChange}
                value={this.state.recipe_name}
              />
            </div>
            <br />
            <div className="input-group">
              <label>Description</label>
              <br />
              <input
                type="text"
                className="input-box"
                name="recipe_description"
                onChange={this.onChange}
                value={this.state.recipe_description}
              />
            </div>
            <div className="input-group">
              <label>Food Category</label>
              <br />
              <textarea
                name="food_category"
                className="input-box"
                onChange={this.onChange}
                value={this.state.food_category}
              />
            </div>
            <div className="input-group">
              <label>Price</label>
              <br />
              <textarea
                name="price"
                className="input-box"
                onChange={this.onChange}
                value={this.state.price}
              />
            </div>
            <div className="input-group">
              <label>Country</label>
              <br />
              <textarea
                name="country"
                className="input-box"
                onChange={this.onChange}
                value={this.state.country}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-reverse">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RecipeForm;
