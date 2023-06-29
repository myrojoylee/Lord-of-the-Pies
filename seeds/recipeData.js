const { Recipe } = require("../models");

const recipedata = [
  {
    name: "Apple Pie",
    detail: "This is how you make apple pie",
    created_on: "June 22, 2023 13:00:00",
    filename: "apple-pie.png",
    alt_text: "apple pie",
    user_id: 2,
  },
  {
    name: "Brownies",
    detail: "This is how you make brownies",
    created_on: "June 21, 2023 15:00:00",
    filename: "brownies.png",
    alt_text: "brownies",
    user_id: 1,
  },
  {
    name: "Ice Cream",
    detail: "This is how you make ice cream",
    created_on: "June 19, 2023 12:00:00",
    filename: "cherry-ice-cream.png",
    alt_text: "cherry ice cream",
    user_id: 3,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipes;
