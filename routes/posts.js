// post s.1.6 import router from express 
import { Router } from 'express'

//post s.1.7 import post controller
import * as postsCtrl from "../controller/posts"

// define s.1.8
const router = Router()

export{
    router 
}

// post s.1.8 make get request for posts

router.get('/', isLoggedIn, postsCtrl.index)








function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }