const router = require("express").Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const commentRoutes = require('./commentRoutes');
//TO DO: require userRoutes, recipeRoutes, and commentRoutes

//TO DO: use the routes defined above
router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
