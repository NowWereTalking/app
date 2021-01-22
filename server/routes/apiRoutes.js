var User = require('../models/user')
let apiRouter = require('express').Router()
let passport = require('passport')

apiRouter.post('/login', (req, res, next) => {
  console.log('about to login', req.body)
  passport.authenticate('local-login', function(err, user, info) {
    if(err) { console.log(err); res.status(400)}
    console.log('done authentiacting', err, user, info)
    req.logIn(user, (err) => {
      if(err){ console.log(err); return res.status(400)}
      return res.redirect('/profile')
    })
  })(req, res, next)
});


apiRouter.post('/signup', (req, res, next) => {
  console.log('about to sign up', req.body)
  passport.authenticate('local-signup', function(err, user, info) {
    if(err) { console.log(err); res.status(400)}
    console.log('done authentiacting', err, user, info)
    req.logIn(user, (err) => {
      if(err){ console.log(err); return res.status(400)}
      return res.redirect('/profile')
    })

  })(req, res, next)
});



// Route for getting some data about our user to be used client side
apiRouter.get("/profile", (req, res) => {
  if(req.isAuthenticated()){
    res.json({
      email : req.user.email, 

    })
  } else {
    res.redirect('/error')
  }

});

apiRouter.post('/profile', (req, res) => {
  // update tehe user profile 

})




module.exports = apiRouter