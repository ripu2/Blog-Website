const mongoose = require('mongoose')
require('dotenv').config()
const key = process.env.KEY

mongoose.connect(`mongodb+srv://admin_ripu:${key}@cluster1.y3gpy.mongodb.net/blog`, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const blogData = mongoose.model('blogData', {
    title: {
        type: String,

    },
    content: {
        type: String,
    },
    author: {
        type: String
    }
})

module.exports = blogData;