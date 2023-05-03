const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chef = require("./data/chefList.json");
const recipes = require("./data/recipes.json");
app.use(cors());

// send all chef
app.get("/chef", (req, res) => {
  res.send(chef);
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
