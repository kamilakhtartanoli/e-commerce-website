import React from 'react'
import Heading from './Heading.jsx'
import male from '../assets/male.avif'
import female from '../assets/female.avif'
import { Link } from 'react-router'

const Category = () => {
  return<>
  <Heading heading={"CATEGORY"}/>
  <div className='grid md:grid-cols-2 p-5'>
    <Link to={'/man'}>
    <div className='cursor-pointer'>
        <img src={male} alt="" className='w-full'/>
    </div>
    </Link>
   <Link to={'/women'}>
    <div className='cursor-pointer'>
        <img src={female} alt="" className='w-full'/>
    </div>
   </Link>
  </div>
  </>
}

export default Category