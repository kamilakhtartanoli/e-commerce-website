import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import Heading from './Heading'
import Card from './card'
import Footer from './Footer'


const Products = () => {
  const item = useSelector((state)=>state.allcart)
  console.log(item.items)
  return<>
  <Navbar/>
  <div className='mt-20'>
    <Heading  heading={'All-Products'}/>
  </div>
   <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5'>
    {
        item.items.map((item , index)=>
        <Card key={index} name={item.name} size={item.size} image={item.image[0]} price={item.price} id={item.id} />
        ) 
    }
    </div> 
    <Footer/>
  </>

}

export default Products