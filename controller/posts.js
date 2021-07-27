// post s.1.5 import models post
import { Post } from '../models/post.js'

export{
    index,

    create,

    show,
    
    
}
// post s.1.6 make index function
function index(req, res) {
   
    Post.find({})
    
    .populate('author')

    .sort({ createdAt: "desc"})

    .then(posts => {
        res.render('posts/index', {

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

        res.redirect('/posts/show')
    })
}

// post s.3.1 make show function
function show(req, res) {
    
    Post.findById(req.params.id)
    
    .populate('author')
    
    .then(post => {
    
        res.render('/posts/show', {
    
            title: ' Post ',
    
           post
      })
    })
  }


