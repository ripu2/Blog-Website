const expres = require("express")
const router = new expres.Router()
const blogData = require("../models/blogData")

router.get("/posts/:postName", (req, res) => {
    const par = req.params.postName.toLowerCase();
    blogData.findOne({ "title": req.params.postName }, (err, data) => {
        var title = data.title.toLowerCase();
        if (title === par) res.render("post", data);

    })


})

module.exports = router