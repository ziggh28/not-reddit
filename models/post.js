// post s.1.1  import mongoose
import mongoose from 'mongoose'


// post deifen schema
const Schema =  mongoose.Schema

//post s.1.3 export post 
export {
  Post
}
//post s.1.4  make a postschema 
const PostSchema = new Schema(
  {
    title: {type :String, require: true },
    
    content: String,
    
    // tells user exact time was made the post was created  
    

    
  }
);

// post s.1.5 define Post
const Post = mongoose.model('Post', PostSchema)
