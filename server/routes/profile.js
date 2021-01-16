// all the routes related to the profile page goes here 
const router = require("express").Router();
const profileController = require ("../controllers/profile.js")

// displaying only one user
router.route("/profile/:id")
    .get(profileController.findOne);
    
    module.exports = router;