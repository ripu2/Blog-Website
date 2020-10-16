const expres = require("express")
const router = new expres.Router()
router.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact Page" })
})

module.exports = router