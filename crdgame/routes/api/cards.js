const router = require("express").Router();
const cardsController = require("../../controllers/cardsController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, cardsController.findAll)
  .post(jwtVerify.confirmToken, jwtVerify.verifyToken, cardsController.create);

  // router.route("/")
  // .get(cardsController.findAll)
  // .post(cardsController.create);

  router
  .route("/:id")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, cardsController.findById)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, cardsController.update)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, cardsController.remove);

  // router
  // .route("/:id")
  // .get(cardsController.findById)
  // .put(cardsController.update)
  // .delete(cardsController.remove);

module.exports = router;