const mongoose = require('mongoose')

const addproduct = new mongoose.Schema({
name:{
    type:String,
    required:true
},
price:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
latest:{
    type:Boolean,
    required:true
},
gender :{
    type:String,
    required:true
},
sizes:{
    type:[String]
},
category:{
    type:String
},
images:{
    type:[String],
    required:true
}
})

const Addproduct = mongoose.model("Addproduct",addproduct)
module.exports = {
    Addproduct
}