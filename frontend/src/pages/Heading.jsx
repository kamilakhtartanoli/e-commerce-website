import React from 'react'

const Heading = ({heading}) => {
  return<>
  <div className='flex justify-center items-center my-5'>
  <h1 className='text-2xl md:text-4xl border-l-5 border-[#ffd700] px-2'>
    {heading}
  </h1>
  </div>
  </>
}

export default Heading