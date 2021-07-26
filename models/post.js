// post s.1.1  import mongoose
import mongoose from 'mongoose'

//post s.1.3 export post 
export {
  Post
}
//post s.1.3  make a postschema 
const postSchema = new mongoose.Schema(
  {
    title: {type :String, require: true },
    
    content: String,
    
    // tells user exact time was made the post was created  
    createdAT: { typed: Date, deafault: Date.now},

    author: { type: schema.objectId, ref: "Profile" }
  }
);

// post s.1.4 define Post
const Post = mongoose.model('Post', PostSchema)
