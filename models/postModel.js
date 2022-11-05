const mongoose = require("mongoose");



const postModel = new mongoose.Schema({

   likes:[{type: mongoose.Schema.Types.ObjectId, ref: "user"}],

   dislikes:[{type: mongoose.Schema.Types.ObjectId, ref: "user"}],

   postTitle:String,

   postContent:{
    type:String,
    default:null,   
   },

   postedBy:{type: mongoose.Schema.Types.ObjectId, ref: "user"},

    
   
},
{timestamps:true});



let post = mongoose.model("post",postModel); //3


module.exports= post;