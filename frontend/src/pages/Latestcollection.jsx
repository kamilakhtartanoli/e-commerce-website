import React from 'react'
import Heading from './Heading'
import Card from './card.jsx'
import { useSelector } from 'react-redux'

const Latestcollection = () => {
  const items = useSelector((state)=>state.allcart)
  return<>
  <Heading heading={"LASTEST-COLLECTION"}/>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5'>
    {
        items.items.map((item , index)=>
        item.latest ? <Card key={index} name={item.name} size={item.size} image={item.image[0]} price={item.price} id={item.id} /> : ''
        ) 
    }
    </div>
  </>
}

export default Latestcollection