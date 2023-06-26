const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedRecipes = require("./recipeData");
const seedComments = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedRecipes();

  await seedComments();

  process.exit(0);
};

seedAll();
