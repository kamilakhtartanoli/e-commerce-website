import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import Footer from "./Footer.jsx";

const Signup = () => {
  const Navigate = useNavigate()
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/signup", {
        username,
        email,
        password,
      });
      setusername("");
      setemail("");
      setpassword("");
      Navigate('/')
      toast.success('signup-successfully');
    } catch (error) {
      toast.error("signup failed");
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-20">
        <h1 className="text-[6vw] sm:[2vw] md:text-[3vw]">SIGNUP</h1>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handlesubmit}
          className="border-2 border-gray-500  max-w-md px-8 py-5"
        >
          <div className="mt-2">
            <label>Name:</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Name"
              className="border border-gray-500 px-2 py-1 mt-2 w-[100%]"
              onChange={(e) => setusername(e.target.value)}
              value={username}
              name="username"
            />
          </div>
          <div className="mt-5">
            <label>Email:</label>
            <br></br>
            <input
              type="email"
              placeholder="Enter Email"
              className="border border-gray-500 px-2 py-1 mt-2 w-[100%]"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              name="email"
            />
          </div>
          <div className="mt-5">
            <label>Password:</label>
            <br></br>
            <input
              type="password"
              placeholder="Enter Password"
              className="border border-gray-500 px-2 py-1 mt-2 w-[100%]"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              name="password"
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="bg-[#ffd700] text-black px-3 py-1 cursor-pointer"
            >
              Signup
            </button>
          </div>
          <div className="mt-5">
            <h5 className="text-gray-500">
              You have an account ?
              <Link to="/login">
                <span className="cursor-pointer text-green-500"> Login</span>
              </Link>
            </h5>
          </div>
        </form>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Signup;
