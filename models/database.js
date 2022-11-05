const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://isagarjaiswal:SAGAR81555@cluster0.txx2zdw.mongodb.net/?retryWrites=true&w=majority")
.then(function(){
    console.log("db connected...");
})
.catch(function(err){
    console.log(err.message);
})