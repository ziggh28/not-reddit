// post s.1.5 import models post
import { Post } from '../models/post.js'

export{
    index,
}

function index(req,res) {
    Post.find({})
    
    .populate('author')

    .sort({ createdAt: "desc"})

    .then(posts => {
        res.render('post/index', {

            title: "Post",
            
            posts

        })
    })
}