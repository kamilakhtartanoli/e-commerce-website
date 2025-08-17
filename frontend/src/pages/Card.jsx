import React from 'react'
import { Link } from 'react-router'

const Card = ({name , image , price , id , size}) => {
  return<>
  <Link to={`/product/${id}`}>
  <div>
    <img src={image} alt="" />
    <h1 className='mt-2' >{name}</h1>
    <h1 className='mt-2' >Rs : <span className='text-red-600'>{price}</span> </h1>
  </div>
  </Link>
  </>
}

export default Card