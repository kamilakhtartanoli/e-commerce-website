const mongoose = require('mongoose')

const contactschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'please ente name']
    },
    email:{
        type:String,
        required:[true , 'please enter email']
    },
    phone:{
        type:Number,
        required:[true , 'please eneter phone']
    },
    message:{
        type:String
    }
},{timestamps:true})

const Contact = mongoose.model('Contact',contactschema)
module.exports={
    Contact
}