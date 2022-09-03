const express = require("express");
const userController = require("../../controllers/user.controller");

const router = express.Router();

router
  .route("/random/user")
  /**
   * @api {get} /any random user
   * @apiDescription get random user
   */
  .get(userController.getRandomUser)


  router.route('/user/all')
  /**
 * @api {get all user}
 * 
 */
.get(userController.getAllUser)

module.exports = router;
