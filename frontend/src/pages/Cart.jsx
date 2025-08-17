import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import {
  clearcart,
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../store/createslice.js";
import { CirclePoundSterling, DeleteIcon, Trash, UserSearch } from "lucide-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./Footer.jsx";

const Cart = () => {
  const cartItems = useSelector((state) => state.allcart.cart);
  const dispatch = useDispatch();
const total = cartItems.length > 0 
  ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 200 
  : 0;
  const handldelete = (id) => {
    dispatch(deleteItem(id));
  };
  const [order, setorder] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [phone, setphone] = useState("");
  console.log(cartItems);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = cartItems.map((item) => ({
        productId: item.id,
        productName: item.name,
        productPrice: item.price,
        productQuantity: item.quantity,
      }));
      const res = await axios.post("http://localhost:8000/api/order", {
        name,
        email,
        address,
        city,
        phone,
        products: productData,
      });
      if(res.status === 200){
        setname('')
        setemail('')
        setaddress('')
        setphone('')
        setcity('')
        dispatch(clearcart())
        setorder(false)
      }
      toast.success('order placed');
    } catch (error) {
      toast.error("order-failed");
    }
  };
  return (
    <>
      <Navbar />
      {order ? (
        <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-20">
          <h2 className="text-xl font-bold mb-4">Place Your Order</h2>
          <form className="space-y-4" onSubmit={handlesubmit}>
            <input
              type="text"
              name="name"
              onChange={(e) => setname(e.target.value)}
              value={name}
              placeholder="Full Name"
              className="w-full border-2 border-gray-500 p-2 rounded outline-none focus:border-[#fdd700] focus:border-2"
              required
            />
            <input
              type="email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              placeholder="Email Address"
              className="w-full border-2 border-gray-500 p-2 rounded outline-none focus:border-[#fdd700] focus:border-2"
              required
            />
            <input
              type="tel"
              name="phone"
              onChange={(e) => setphone(e.target.value)}
              value={phone}
              placeholder="Phone Number"
              className="w-full border-2 border-gray-500 p-2 rounded outline-none focus:border-[#fdd700] focus:border-2"
              required
            />
            <input
              type="text"
              name="address"
              onChange={(e) => setaddress(e.target.value)}
              value={address}
              placeholder="Shipping Address"
              className="w-full border-2 border-gray-500 p-2 rounded outline-none focus:border-[#fdd700] focus:border-2"
              required
            />
            <input
              type="text"
              name="city"
              onChange={(e) => setcity(e.target.value)}
              value={city}
              placeholder="City"
              className="w-full border-2 border-gray-500 p-2 rounded outline-none focus:border-[#fdd700] focus:border-2"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
            >
              Place Order
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto p-4 mt-24">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className="w-20 h-auto rounded object-cover"
                    />
                    <div className="">
                      <h2 className="font-bold text-red-800">{item.name}</h2>
                      <p>Price: Rs.{item.price}</p>
                      <span className="border px-2 py-1">{item.size}</span>
                      <br></br>
                      <span className="text-green-700">
                        Rs.{item.quantity * item.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex">
                    <button
                      className="bg-green-700 px-2 mr-2 text-white cursor-pointer"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-red-700 px-2 ml-2 text-white cursor-pointer"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <Trash
                      onClick={() => handldelete(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </Trash>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
      <div className="text-right mt-20 mb-5 mr-5 text-xl font-bold">
        Total: Rs.{total}
        <br></br>
        <span className="text-gray-500">with 200 delivery fee</span>
        <br></br>
        <button
          onClick={() => setorder(!order)}
          className="mt-5 px-4 py-1 bg-black text-white transform ease-in hover:bg-green-800"
        >
          {order ? "back to cart" : "order now"}
        </button>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Cart;
