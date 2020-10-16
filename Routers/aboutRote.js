const expres = require("express")
const router = new expres.Router()


router.get("/about", (req, res) => {
    res.render("about", { title: "About Page" })
})

module.exports = router