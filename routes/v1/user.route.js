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


  router.route('/user/save')
  /**
 * @api {get save user}
 * 
 */
.post(userController.saveUser)


  router.route('/user/update/:id')
  /**
 * @api {update user}
 * 
 */
.patch(userController.updateUser)


  router.route('/user/bulk-update')
  /**
 * @api {update user}
 * 
 */
.patch(userController.bulkUpdate)



  router.route('/user/delete/:id')
  /**
 * @api {delete user}
 * 
 */
.delete(userController.deleteUser)





module.exports = router;
