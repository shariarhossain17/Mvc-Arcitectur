const express = require("express");
const { getRandomUser } = require("../../controllers/user.controller");

const router = express.Router();

router
  .route("/random/user")
  /**
   * @api {get} /any random user
   * @apiDescription get random user
   */
  .get(getRandomUser);

module.exports = router;
