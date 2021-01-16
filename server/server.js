let express = require('express')
let app = express() 
let PORT = process.env.PORT || 3001

var debateRoute = require('./routes/debateRoute');

app.get('/test', (req, res) => {
    console.log("REQUEST WAS PROXIED")
    res.json({ done : true })
})

app.use('/debateRoute', debateRoute.js)


app.listen(PORT, (err) => {
    if(err) console.log(err)
    console.log("running on port", PORT)
} )