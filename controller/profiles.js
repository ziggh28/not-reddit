// profile s.1.4 import profile from models 
import { Profile } from "../models/profile.js"



// profile s.1.5 export profiles 
export{
    index,

    show, 

}

// profile s.1.6 make  index function
function index(req, res,){

   Profile.find({}) 
    
   .then(profiles => {
       
        res.render('profiles/index',{

            title:"not-reddit profiles",

            profiles,

   }) 
  })
} 

// profile s.1.13 make show function 
 function show (req, res) {
     
 }
