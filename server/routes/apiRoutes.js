var User = require ('../models/user')
module.exports = function(app) {
    
    app.post("/api/login",  (req, res) => {
      res.json(req.user);
    });
  
    app.post("/api/signup", (req, res) => {
      User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
      })
        .then(() => {
          res.redirect(307, "/api/login");
        })
        .catch(err => {
          res.status(401).json(err);
        });
    });
  
    // Route for logging user out
    app.get("/logout", (req, res) => {
      req.logout();
      res.redirect("/");
    });
  
   
  
    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", (req, res) => {
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      } else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
          email: req.user.email,
          id: req.user.id,
          name: req.user.name
        });
      }
    });

  };