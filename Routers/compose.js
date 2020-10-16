const expres = require("express")
const router = new expres.Router()
const blogData = require("../models/blogData")

router.get("/compose", (req, res) => {

    res.render("compose")
})
router.post("/compose", (req, res) => {
    var post = new blogData(req.body)
    post.save().then(() => {

        res.redirect("/")
    }).catch(() => {

    })

})

module.exports = router