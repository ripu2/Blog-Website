const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017"

mongoose.connect("mongodb+srv://admin_ripu:xSjDMwjvb5qd1tyf@cluster1.y3gpy.mongodb.net/blog", {
    useNewUrlParser: true,
    useCreateIndex: true
});

const blogData = mongoose.model('blogData', {
    title: {
        type: String,

    },
    content: {
        type: String,
    }
})

module.exports = blogData;