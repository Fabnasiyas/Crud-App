const mongoose = require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:Object,
        
    }
    
})

const userModel=mongoose.model('userDetails',userSchema)
module.exports=userModel;