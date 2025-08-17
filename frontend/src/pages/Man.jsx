import React, { useState } from "react";
import Navbar from "./Navbar";
import Heading from "./Heading.jsx";
import { useSelector } from "react-redux";
import Card from './Card.jsx'
import Footer from './Footer.jsx'

const Man = () => {
  const products = useSelector((state)=>state.allcart.items)
  const categorybuttons = ['ALL' , 'FORMAL-SHOES' , 'SHIRTS' , 'TROUSERS' , 'MALE-BAGS' ,'MAN-SNEAKERS']
  const [selectedcategory , setselectedcategory] = useState('ALL')
  const filterproducts = selectedcategory === 'ALL' ?
  products.filter((item)=>item.gender==='male')
  : products.filter((item)=>item.category === selectedcategory) 
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Heading heading={"Man"} />
      </div>
      <div className="text-center">
       {
       categorybuttons.map((item,index)=>(
        <button 
        key={index}
        onClick={()=>setselectedcategory(item)}
        className={`mt-2 mr-5 md:mr-7 bg-black text-white px-4 py-1 rounded-2xl transition ease-in 
          ${selectedcategory === item ? "focus:bg-[#fdd700] focus:text-black " : ""}`}
        >{item}</button>
       ))
       }
      </div>
      <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 my-5'>
        {
          filterproducts.map((item,index)=>(
          <Card price={item.price} key={index} image={item.image[0]} id={item.id} name={item.name} description={item.description}/>
          ))
        }
      </div>
      <Footer />
    </>
  );
};

export default Man;
