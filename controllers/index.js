// Calling all required dependencies and files
const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");

// Uses api folder and homeroutes file for modular routing of server
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// Exports router
module.exports = router;
