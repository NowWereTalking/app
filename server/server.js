let express = require('express')
let app = express() 
let PORT = process.env.PORT || 3001

var debate = require('./routes/debate');
var landing = require('./routes/landing');
var profile = require('./routes/profile');


app.get('/test', (req, res) => {
    console.log("REQUEST WAS PROXIED")
    res.json({ done : true })
})

require('/debate', debate)(app);
require('/landing', landing)(app);
require('/profile', profile)(app);


app.listen(PORT, (err) => {
    if(err) console.log(err)
    console.log("running on port", PORT)
} )