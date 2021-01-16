const db = require("../models")


module.exports = {
    // find a specific parent
    findOne: function (req, res) {
        db.users.findOne({
            where: { id: req.param.id }
        }).then(function (result) {
            // res.json(result)
            if (result) {
                res.json({ loggedIn: true })
             
            }
            res.json({ loggedIn: false })
            
    })
}
}