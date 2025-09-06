const { User } = require("../model/user.model");
const {order} =  require('../model/order.js')
const bcrypt = require('bcryptjs');
const { Contact } = require("../model/contact.js");
const { Addproduct } = require("../model/addproduct.js");
const fs = require("fs");
const path = require("path");
const dataFilePath = path.join(__dirname, "../../frontend/src/assets/data/data.js");


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

const addproduct = async (req,res) =>{
     try {
    const { name, price, gender, category, images, sizes, latest, description } = req.body;

    // 1. Save to MongoDB
    const newproduct = new Addproduct({
      name,
      price,
      gender,
      category,
      images,
      sizes,
      latest,
      description,
    });
    await newproduct.save();

    // 2. Read existing products from frontend data.js
    delete require.cache[require.resolve("../../frontend/src/assets/data/data.js")]; // clear cache
    const data = require("../../frontend/public/data.js"); 
    const products = data.products || [];

    // 3. Append new product
    const productToSave = {
      _id: newproduct._id.toString(),
      name,
      price,
      gender,
      category,
      images,
      sizes,
      latest,
      description,
    };
    products.push(productToSave);

    // 4. Write back to frontend data.js
    const fileContent = `const data = ${JSON.stringify({ products }, null, 2)};\n\nexport default data;`;
    fs.writeFileSync(dataFilePath, fileContent, "utf8");

    res.status(200).json({ message: "Product added successfully", newproduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {signup , login , orders , contact , orderfind , addproduct}