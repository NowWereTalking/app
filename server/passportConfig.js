let User = require('./models/user')
let bcrypt = require('bcryptjs')

module.exports = function (passport, LocalStrategy) {

    passport.use("local-login", new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        function (username, password, done) {
            console.log("starting to log in")
            User.findOne({ email: username }, function (err, user) {
                console.log("looking for user if exists")
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!user.verifyPassword(password)) { return done(null, false); }
                console.log('found and verified user')
                return done(null, user);
            });
        }
    ));

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, email, password, done) {
            console.log("starting passport strategy")
            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick(function () {

                console.log("about to sign the user up")
                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                User.findOne({ email: email }, function (err, user) {
                    // if there are any errors, return the error
                    if (err) return done(err);

                    // check to see if theres already a user with that email
                    if (user) { return done(null, false) }
                    else {
                        console.log("creating a new user now")
                        // if there is no user with that email
                        // create the user
                        var newUser = new User();

                        // set the user's local credentials
                        newUser.email = email;
                        newUser.password = bcrypt.hashSync(password)

                        // save the user
                        newUser.save(function (err) {
                            if (err) throw err;
                            console.log("new user created")
                            return done(null, newUser);
                        });
                    }

                });

            });

        }));




 
    passport.serializeUser(function (user, done) {
        console.log("about to serializer user", user)
        done(null, user._id);
    });

    passport.deserializeUser(function (_id, done) {
        console.log("about to deserializeuser", _id)
        User.findById(_id, function (err, user) {
            if(err){ console.log("error deserializeing the user", err)}
            done(err, user);
        });
    });
}