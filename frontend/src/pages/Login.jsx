import React from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate()
  const [email , setemail] = useState('')
  const [password , setpassword] = useState('')
  const handlesubmit = async (e)=>{
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/api/login',{
        email,
        password
      })
      setemail('')
      setpassword('')
      navigate('/')
      toast.success(res.data.message)
    } catch (error) {
      toast.error('login failed')
    }
  }
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-20">
        <h1 className="text-[6vw] sm:[2vw] md:text-[3vw]">LOGIN</h1>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handlesubmit}
          className="border-2 border-gray-500  max-w-md px-5 py-5"
        >
          <div className="mt-5">
            <label>Email:</label>
            <br></br>
            <input
              type="email"
              placeholder="Enter Email"
              className="border border-gray-500 px-2 py-1 mt-2 w-full"
              onChange={(e)=>setemail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mt-5">
            <label>Password:</label>
            <br></br>
            <input
              type="password"
              placeholder="Enter Password"
              className="border border-gray-500 px-2 py-1 mt-2 w-full"
              onChange={(e)=>setpassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="bg-[#ffd700] text-black px-3 py-1 cursor-pointer"
              >
              Login
            </button>
          </div>
          <div className="mt-5 text-gray-500">
              You dont have an account ?<br></br>
              <Link to='/signup'>
                <span className="cursor-pointer text-green-500">SIGNUP</span>
              </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Login;
