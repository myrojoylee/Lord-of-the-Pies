// Calling all dependencies and route files
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const recipeRoutes = require("./recipeRoutes");
const commentRoutes = require("./commentRoutes");
const tagRoutes = require("./tagRoutes");
const seedDbRoute = require("./seedDB");


// Use the routes defined above
router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);
router.use("/comments", commentRoutes);
router.use("/tags", tagRoutes);
router.use("/seedDb", seedDbRoute);

// Export router
module.exports = router;
