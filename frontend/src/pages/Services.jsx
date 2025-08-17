import React from 'react'
import Heading from './Heading'
import delivery from '../assets/delivery.png'
import support from '../assets/support.png'
import returns from '../assets/return.png'

const Services = () => {
  return (
    <>
      <div className="my-10">
        <Heading heading={'SERVICES'} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 cursor-pointer">
        {/* FAST DELIVERY */}
        <div className="border border-gray-400 flex flex-col items-center text-center px-5 py-6 h-full">
          <img src={delivery} alt="Delivery Icon" className="w-20 mb-5" />
          <h1 className="font-semibold">FAST DELIVERY</h1>
          <p className="text-gray-500 mt-3">Experience lightning-fast delivery</p>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div className="border border-gray-400 flex flex-col items-center text-center px-5 py-6 h-full">
          <img src={support} alt="Support Icon" className="w-20 mb-5" />
          <h1 className="font-semibold">BEST CUSTOMER SUPPORT</h1>
          <p className="text-gray-500 mt-3">We provide 24/7 customer support</p>
        </div>

        {/* RETURN POLICY */}
        <div className="border border-gray-400 flex flex-col items-center text-center px-5 py-6 h-full">
          <img src={returns} alt="Returns Icon" className="w-20 mb-5" />
          <h1 className="font-semibold">7 DAYS RETURN POLICY</h1>
          <p className="text-gray-500 mt-3">We provide 7 days free return policy</p>
        </div>
      </div>
    </>
  )
}

export default Services
