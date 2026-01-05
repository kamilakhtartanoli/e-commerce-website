import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import about from '../assets/about.avif';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16 mt-5">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
          Mariana
        </h1>

        {/* Image after heading */}
        <div className="flex justify-center mb-8">
          <img 
            src={about} 
            alt="About Mariana" 
            className="rounded-xl w-full md:w-2/3 object-cover shadow-md" 
          />
        </div>

        <p className="text-center text-gray-700 text-md max-w-3xl mx-auto mb-10">
          Welcome to <span className="font-semibold text-black">Mariana</span> — your destination for effortless style, modern essentials, and curated fashion. We believe shopping should be seamless, inspiring, and tailored for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-gray-400 px-4 py-4 rounded bg-black">
            <h2 className="text-md font-semibold mb-2 text-[#fdd700]">Who We Are</h2>
            <p className="text-white">
              Mariana is a fashion-first online store that brings you a handpicked selection of trending styles, versatile fits, and wardrobe staples for every occasion. We’re more than a store — we’re a style community.
            </p>
          </div>

          <div className="border border-gray-400 px-4 py-4 rounded bg-black">
            <h2 className="text-md font-semibold mb-2 text-[#fdd700]">What We Offer</h2>
            <ul className="list-disc list-inside text-white">
              <li>Stylish apparel for men & women</li>
              <li>Carefully selected sizes & fits</li>
              <li>Fast delivery across Pakistan</li>
              <li>Easy returns and secure checkout</li>
            </ul>
          </div>

          <div className="border border-gray-400 px-4 py-4 rounded bg-black">
            <h2 className="text-md font-semibold mb-2  text-[#fdd700]">Why Mariana</h2>
            <p className="text-white">
              Our mission is to make fashion simple and accessible for everyone. Whether you're dressing up or keeping it casual, Mariana helps you express your style — confidently and affordably.
            </p>
          </div>
        </div>

        <div className="text-center mt-14">
          <p className="text-md text-gray-700">
            Join thousands of happy customers who trust Mariana. Follow us, shop your favorites, and experience the future of fashion — today.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
