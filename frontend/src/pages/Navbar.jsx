import React from "react";
import { Car, Menu, ShoppingBag, ShoppingBasket, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state)=>state.allcart)
  return (
    <>
      <nav className="fixed top-0 w-[100%] bg-black text-[#FFD700] px-6 py-4 flex justify-between items-center shadow-md">
        <Link to="/">
          <div className="text-2xl font-bold">MARIANA</div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <Link to={"/"}><li className="hover:text-white transition cursor-pointer">Home</li></Link>
          <Link to='/about'><li className="hover:text-white transition">About</li></Link>
          <Link to='/products'><li className="hover:text-white transition cursor-pointer">All-Products</li></Link>
          <Link to={'/contact'}><li className="hover:text-white transition cursor-pointer">Contact</li></Link>
          <Link to={'/cart'}>
          <div className="flex cursor-pointer">
            <ShoppingBag className=""/>
            <p className="relative left-[-5px] bg-red-500 text-white rounded-full px-1">
              {items.cart.length}
            </p>
          </div>
          </Link>
          <li>
            <Link to="/signup">
              <button className="bg-[#FFD700] cursor-pointer text-black px-4 py-2 rounded-xl font-semibold hover:bg-white transition">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex gap-2">
          <Link to={'/cart'}>
          <div className="flex">
            <ShoppingBag className=""/>
            <p className="relative left-[-5px] bg-red-500 text-white rounded-full px-1">
              {items.cart.length}
            </p>
          </div>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black text-[#FFD700] flex flex-col space-y-4 px-6 py-4 md:hidden shadow-lg z-50">
           <Link to={'/'}><li className="hover:text-white transition">Home</li></Link>
            <Link to='/about'><li className="hover:text-white transition">About</li></Link>
            <Link to='/products'><li className="hover:text-white transition cursor-pointer">All-Products</li></Link>
           <Link to={'/contact'}><li className="hover:text-white transition">Contact</li></Link>
            <li>
              <Link to="/signup">
                <button className="bg-[#FFD700] text-black px-4 py-2 rounded-xl font-semibold hover:bg-white transition w-full">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
