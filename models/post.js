// post s.1.1  import mongoose
import mongoose from 'mongoose'


// post deifen schema
const Schema =  mongoose.Schema

//post s.1.3 export post 
export {
  Post
}


const replySchema = new Schema({
  
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  content: String
},{
  timestamps: true
})

//post s.1.4  make a postschema 
const PostSchema = new Schema(
  {
    title: {type :String, require: true },
    
    content: String,
    
    author: {type: Schema.Types.ObjectId, ref: 'Profile'},
    
    reply: [ replySchema ]

    
  },{
    timestamps: true,
  }
);

// post s.1.5 define Post
const Post = mongoose.model('Post', PostSchema)
