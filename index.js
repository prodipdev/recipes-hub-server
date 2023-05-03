const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chef = require("./data/chefList.json");
const recipes = require("./data/recipes.json");
const questions = require("./data/questions.json");

app.use(cors());

// send all chef
app.get("/chef", (req, res) => {
  res.send(chef);
});

// send all recipes
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

// send specific recipe
app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  const selectedRecipe = recipes.find((recipe) => recipe.recipe_id === id);
  res.send(selectedRecipe);
});

// send specific chef recipes
app.get("/chef/:id", (req, res) => {
  const chefId = req.params.id;
  const selectedList = recipes.filter((recipe) => recipe.chef_id === chefId);
  res.send(selectedList);
});

// send questions
app.get("/questions", (req, res) => {
  res.send(questions);
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
