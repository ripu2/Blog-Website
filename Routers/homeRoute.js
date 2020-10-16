const expres = require("express")
const router = new expres.Router()
const blogData = require("../models/blogData")
const ejs = require("ejs");
const ejsLint = require('ejs-lint')
router.get("/", (req, res) => {
    ejsLint("home")
    blogData.find((err, data) => {
        if (data.length === 0) {
            res.render("home", {
                title: "No blogs till now",
                posts: data
            });
        } else {
            res.render("home", {
                title: "Home",
                posts: data
            });
        }
    })

})

module.exports = router