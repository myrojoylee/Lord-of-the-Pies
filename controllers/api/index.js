const router = require("express").Router();
const userRoutes = require("./userRoutes");
const recipeRoutes = require("./recipeRoutes");
const commentRoutes = require("./commentRoutes");
const seedDbRoute = require('./seedDB');
//TO DO: require userRoutes, recipeRoutes, and commentRoutes

//TO DO: use the routes defined above
router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);
router.use("/comments", commentRoutes);
router.use('/seedDb', seedDbRoute);

module.exports = router;
