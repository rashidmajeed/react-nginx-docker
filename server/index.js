const keys = require("./keys");
//Express Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create express application instance
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Setup Postgres client
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

// echo postgres errors to the console
pgClient.on("error", err => {
  console.log("Lost Postgres Database connection " + err);
});

// Create table using client
pgClient.query(
  "CREATE TABLE IF NOT EXISTS recipes(recipe_id SERIAL PRIMARY KEY, recipe_name VARCHAR(20) NOT NULL, recipe_description VARCHAR(20), food_category VARCHAR(20) NOT NULL, price MONEY NOT NULL, country VARCHAR(20))",
  (err, res) => {
    console.log(err, res);
    pgClient.end();
  }
);

// Express Routes for backend Api calls
app.get('/', (req, res) => {
  res.send('Hello api data is coming...')
});

app.get('/api/getRecipes', async (req, res) => {
  const recipes = await pgClient.query('SELECT * from recipes ORDER BY recipe_id ASC');
  res.send(recipes.rows);
});

app.post('/api/addRecipe', async (req, res) => {
  const { recipe_name, recipe_description, food_category, price, country } = request.body
  const { recipe } = await pgClient.query('INSERT INTO recipes (recipe_name, recipe_description, food_category, price, country ) VALUES ($1, $2, $3, $4, $5)', [recipe_name, recipe_description, food_category, price, country]);
  res.status(201).send(recipe[0])
});

app.listen(5000, err => {
  console.log('Server is running');
})

