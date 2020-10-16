const express = require("express");
const bodyParser = require("body-parser");

const aboutRote = require("./Routers/aboutRote")
const composeRoute = require("./Routers/compose")
const hoemRoute = require("./Routers/homeRoute")
const postRoute = require("./Routers/post")
const contacteRoute = require("./Routers/contact")

let app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use(aboutRote)
app.use(composeRoute)
app.use(hoemRoute)
app.use(postRoute)
app.use(contacteRoute)



app.listen(process.env.PORT || 4000, function() {
    console.log("Server started succesfully ");
});