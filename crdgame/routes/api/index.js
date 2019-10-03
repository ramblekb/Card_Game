const router = require("express").Router();
const cardRoutes = require("./cards");
const userRoutes = require("./users");

// Book routes
router.use("/cards", cardRoutes);
router.use("/users", userRoutes);

module.exports = router;
