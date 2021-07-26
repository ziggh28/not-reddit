// post s.1.5 import models post
import { Post } from '../models/post.js'

export{
    index,
    create,
}
// post s.1.6 make index function
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

// post s.2.1 make create function
function create (req,res) { 
    req.body.author = req.user.profile._id
    
    Post.create(req.body)

    .then(()=> {

        res.redirect('/post')
    })
}

function show(req, res) {
    Post.findById(req.params.id)
    .populate('author')
    .populate({
      path: 'replies',
      populate: {
        path: 'author'
      }
    })
    .then(post => {
      res.render('post/show', {
        title: ' Post Details',
        message
      })
    })
  }