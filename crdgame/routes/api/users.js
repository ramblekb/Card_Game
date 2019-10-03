const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

// router.route("/")
//   .get(jwtVerify.confirmToken, jwtVerify.verifyToken, usersController.findAll)
//   .post(jwtVerify.confirmToken, jwtVerify.verifyToken, usersController.create);

  router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

  // router
  // .route("/:id")
  // .get(jwtVerify.confirmToken, jwtVerify.verifyToken, usersController.findById)
  // .put(jwtVerify.confirmToken, jwtVerify.verifyToken, usersController.update)
  // .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, usersController.remove);

  router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;