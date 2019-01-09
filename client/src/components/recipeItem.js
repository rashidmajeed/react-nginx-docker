import React from "react";

const RecipeItem = props => (
  <section id="recipes">
    <div>
      <h3>{props.data.recipe_name}</h3>
      <p>{props.data.recipe_description}</p>
      <ul>
        <li>Price: {props.data.price}</li>
        <li>Food category: {props.data.food_category}</li>
      </ul>
    </div>
  </section>
);

export default RecipeItem;
