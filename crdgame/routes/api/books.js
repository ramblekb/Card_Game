const router = require("express").Router();
const cardsController = require("../../controllers/cardsController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, cardsController.findAll);

router
  .route("/:id")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, cardsController.findById);

module.exports = router;
