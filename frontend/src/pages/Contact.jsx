import React, { useState } from 'react';
import Heading from './Heading'; // Reuse your existing Heading component
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios'
import {toast , ToastContainer} from 'react-toastify'

const Contact = () => {
    const [name , setname ] = useState('')
    const [email , setemail] = useState('')
    const [phone , setphone] = useState()
    const [message , setmessage] = useState('')
   const handlesubmit = async(e)=>{
    e.preventDefault()
    try {
        await axios.post('http://localhost:8000/api/contact',{
            name , email , phone , message
        })
        setemail('')
        setname('')
        setmessage('')
        setphone('')
        toast.success('feedback-sent-successfully')
    } catch (error) {
        toast.error('feedback not sent')
    }
   }
  return <>
    <Navbar />
    <div className="max-w-6xl mx-auto px-5 mt-5 py-10">
      <Heading heading="CONTACT US" />

      <div className="grid md:grid-cols-2 gap-10 mt-8">
        {/* Contact Form */}
        <form className="space-y-5" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e)=>setphone(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e)=>setmessage(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-6 rounded-lg font-medium transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-5 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold">Our Address</h3>
            <p>Marian Store, Street 123, Karachi, Pakistan</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p>support@marianstore.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p>+92 300 1234567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <p>Mon - Sat: 10AM - 7PM</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <ToastContainer />
  </>
};

export default Contact;