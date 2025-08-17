const mongoose  = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Customer name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"]
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  },
  city: {
    type: String,
    required: [true, "City is required"]
  },
   products: [
    {
      productId: {type:String},
      productName:  {type:String},
      productPrice: {type:Number},
      productQuantity:  {type:Number}
    }
  ]
}, {
  timestamps: true // adds createdAt and updatedAt fields
});


const order = mongoose.model('order' , orderSchema)
module.exports = {order}
