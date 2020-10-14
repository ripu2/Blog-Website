//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const blogData = require("./models/blogData")

const ejsLint = require('ejs-lint');
const { identity } = require("lodash");

let app = express();
// app.use(express.json)
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var array = []

app.get("/", (req, res) => {
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
app.get("/about", (req, res) => {
    res.render("about", { title: "About Page" })
})
app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact Page" })
})
app.get("/compose", (req, res) => {

    res.render("compose")
})
app.post("/compose", (req, res) => {
    var post = new blogData(req.body)
    post.save().then(() => {
        array.push(post)
        res.redirect("/")
    }).catch(() => {

    })

})

app.get("/posts/:postName", (req, res) => {
    const par = req.params.postName.toLowerCase();
    blogData.findOne({ "title": req.params.postName }, (err, data) => {
        var title = data.title.toLowerCase();
        if (title === par) res.render("post", data);

    })


})





app.listen(3000, function() {
    console.log("Server started on port 3000");
});