// profile s.1.7. import express router
import { Router } from 'express'

//profile s.1.8 import controller profiles
import * as profilesCtrl from '../controller/profiles.js'

//profile s.1.9 make router a const 
const router = Router()

//profile s.1.10 export router 
export{
    router
}

// profile s.1.11 make a get request for index
router.get ('/', isLoggedIn, profilesCtrl.index)





function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }