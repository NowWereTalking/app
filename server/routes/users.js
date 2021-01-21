// all the routes related to the users goes here 

const router = require("express").Router();
const updateUser = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);



module.exports = router;