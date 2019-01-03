import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import RecipeList from "./components/recipelist";
import RecipeForm from "./components/RecipeForm";
import "./App.css";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Header} />
      <Route path="/add_recipe" exact component={RecipeForm} />
      <Route path="/all_recipes" component={RecipeList} />
    </Switch>
  );
};

export default Routes;
