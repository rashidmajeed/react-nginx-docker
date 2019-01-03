import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="inner">
          <h2>Recipe App</h2>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/all_recipes">Recipes</NavLink>
              </li>
              <li>
                <NavLink to="/add_recipe">Add Recipe</NavLink>
              </li>
            </ul>
          </nav>
        </div>
    );
}

export default Navbar;
