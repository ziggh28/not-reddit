

# not-reddit: for simple people 
not-reddit is a simple blog site that allows beginnner that are intimidated by world wide web to hone they're internet social skills. 


## Motivation behind  this 
in the last couple years have learned the importance of community. with social media taking a major role in how people connect and interact with eachother. I thought this would a be great oppuntity  learn develope my online skills.


# screenshots 



![Screen Shot 2021-07-30 at 1 37 19 AM](https://user-images.githubusercontent.com/86076993/127606368-a6faddcf-d6cb-4059-bef8-665390d9c3b1.png)

![Screen Shot 2021-07-30 at 1 36 21 AM](https://user-images.githubusercontent.com/86076993/127606386-873710d4-9cce-461f-98e1-67614c516afe.png)

# trelloboard

https://trello.com/b/ms4i76MJ/not-reddit

# technologie Used:

bootstrap


ejs

google Oauth


javascript


heroku

# sample code:

router/posts.js -

```
// post s.1.6 import router from express 
import { Router } from 'express'

//post s.1.7 import post controller
import * as postsCtrl from "../controller/posts.js"


// define s.1.8
const router = Router()

export{
    router 
}

// post s.1.9 make get request for posts
router.get('/', isLoggedIn, postsCtrl.index)

// post s.2.2 make a post request for post
router.post('/', isLoggedIn, postsCtrl.create)

// post s.3.2 make a get/:id request for post
router.get('/:id', isLoggedIn, postsCtrl.show) 

// post s.4.2 make a get/:id request for post
router.delete('/:id', isLoggedIn, postsCtrl.delete)

// post s.5.2 make a get/:id request for edit
router.get('/:id/edit', isLoggedIn, postsCtrl.edit)

// post s.6.2 make a put/:id request for put
router.put('/:id', postsCtrl.update)

// post s.7.2 make a post/:id request for post
router.post('/:id', isLoggedIn, postsCtrl.reply)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
```


controllers/posts.js
```
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

```
# what I've learn:
 
1. I've learn that I'm not that good a code at all like I'm really bad at this.  

2. the power of community. being to reach out an ask help from a random stranger  

3. organization skill & writing each step down 

4. attention to detail 





# resources 

https://stackoverflow.com/

https://www.youtube.com/

https://www.geeksforgeeks.org/web-development/?ref=shm


# credit 

instructors 

ben manley - kakashi sensei 

jurgen steven - naruto uzumaki 

thiago cavalcante - the first hokage 

brian krabec - shikamaru nara

carolina urrea - Rock lee  

blake romano - orochimaru



peers 

cory rice - you already know 

cuffy - my dawg 

kyler larson - your invited to the cookout


honorable mentions  

avis js - birdman 

thank you all 



