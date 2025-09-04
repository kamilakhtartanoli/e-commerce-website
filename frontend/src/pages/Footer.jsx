import React from "react";
import { Link } from "react-router";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:min-h-[65vh]">
      {/* ✅ Page Content */}
      <main className="flex-grow">{children}</main>

      {/* ✅ Sticky Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">Mariana</h2>
            <p className="text-sm text-gray-400">
              Elevate your everyday look with our exclusive collection of
              fashion-forward apparel, accessories, and essentials crafted to
              inspire confidence and comfort
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#fdd700]">Navigation</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/" className="hover:text-yellow-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400">About</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-yellow-400">All-Products</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-yellow-400">Signup</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#fdd700]">Follow Us</h3>
            <p className="text-sm text-gray-400">Instagram, Facebook, Twitter</p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Mariana. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
