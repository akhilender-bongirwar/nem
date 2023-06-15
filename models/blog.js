const {Schema, model, models} = require('mongoose');

const blogSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    snippet: {
        type:String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    },
},{timestamps:true});

const Blog = models.Blog || model("Blog",blogSchema);
module.exports = Blog;