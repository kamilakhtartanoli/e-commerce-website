const { User } = require("../model/user.model");
const {order} =  require('../model/order.js')
const bcrypt = require('bcryptjs');
const { Contact } = require("../model/contact.js");

const signup = async (req, res) =>{
    try {
        const {username , email , password} = req.body;
        const existinguser = await User.findOne({email})
        if(existinguser){
            res.status(400).json({message:"email already exist"})
        }
        const hashpassword = await bcrypt.hash(password,10)
        const newuser = await User.create({
            username , email , password : hashpassword
        })
        res.status(200).json({message:"signup successfully" , newuser})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const login  = async(req,res)=>{
    try {
        const {email , password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        res.status(400).json({message:"incorrect email"})
    }
    const comparepassword = await bcrypt.compare(password,user.password)
    if(!comparepassword){
        res.status(400).json({message:'invalid password'})
    }
    res.status(200).json({message:"login successfully"})
    } catch (error) {
     res.status(500).json({message:error.message})   
    }
}

const orders = async (req, res) => {
 try {
    const newOrder = new order(req.body);
    await newOrder.save();
    res.status(200).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to place order." });
  }
}

const orderfind = async (req,res) => {
    try {
        const orderfinds = await order.find({})
        res.status(200).json(orderfinds)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
} 

const contact = async(req,res) =>{
    try {
        const {name , email , phone , message} = req.body;
        const newcontact = await Contact.create({
            name , email , phone , message
        })
        res.status(200).json({message:'feedback send successfully' , newcontact})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports = {signup , login , orders , contact , orderfind}