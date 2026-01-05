import React from "react";
import img1 from "../assets/image1.avif";
import {Link} from 'react-router'

const Hero = () => {
  return<>
      <div className="grid grid-row-2 overflow-hidden md:grid-cols-2 items-center border-1 border-gray-500 mt-20 mx-5">
        <div className="mx-5">
          <div>
            <h1 className="text-5xl md:text-7xl">MARIANA</h1>
          </div>
          <div className="mt-5">
            <p>Discover Your Style with Mariana</p>
          </div>
          <div className="mt-5">
           <p className="text-gray-700">
             Elevate your everyday look with our exclusive collection of
            fashion-forward apparel, accessories, and essentials crafted to
            inspire confidence and comfort.
           </p>
          </div>
          <div className="mt-5">
           <Link to='/products'><button className="bg-[#ffd700] px-4 py-2 rounded-3xl cursor-pointer sm:mb-5 lg:mb-0 hover:bg-black hover:text-white transition">SHOP NOW</button></Link>
          </div>
        </div>
        <div className="h-full w-[100%]">
          <img src={img1} alt="" className="w-[100%] h-full mt-5 sm:mt-0"/>
        </div>
      </div>
    </>
}

export default Hero;
