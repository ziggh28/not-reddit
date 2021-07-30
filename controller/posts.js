// post s.1.5 import models post
import { Post } from '../models/post.js'

export{
    index,

    create,

    show,
    
    deletePost as delete,

    edit,

    update,

    reply,
    
}



// post s.1.6 make index function
function index(req, res) {
    
    Post.find({})
    
    .populate('author')
    
    .sort({ createdAt: "desc"})
    
    .then(posts => {
        
        console.log("this is the post",posts)
        
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
        
        res.redirect('/posts')
    })
}

// post s.3.1 make show function
function show(req, res) {
    
    Post.findById(req.params.id)
    
    .populate('author')
    
    .then(post => {
        
        console.log("this is the post", post)

        res.render('posts/show', {
            
            title:'Post',
            
            post: post,
        })
    })
}

// post s.3.1 make show function
function deletePost (req , res ){
    
    Post.findByIdAndDelete(req.params.id)
    
    .then(()=>
    
    res.redirect("/posts")
    
    )
}

// post s.3.1 make show function
function edit (req, res){
    Post.findById(req.params.id)
    
    .then(post => {
        
        res.render('posts/edit', {
            
            post,

        })
    })
}


// post s.4.1 make update function
function update (req, res){
    
    Post.findByIdAndUpdate(req.params.id, req.body)
    
    .then(() => {
    
        res.redirect('/posts')


    })
}


// post s.5.1 make reply function
function reply(req, res) {
    
    req.body.author = req.user.profile._id
    
    Post.findById(req.params.id)
    
    .then(post => {
    
        post.reply.push(req.body)
    
        post.save()
    
        .then(() => {
    
        res.redirect(`/posts/${req.params.id}`)
      })
    })
  }