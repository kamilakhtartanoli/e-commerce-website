import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { data } from "../assets/data/data";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { addtocart } from "../store/createslice.js";

const Productdetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const foundProduct = data.find((item) => item.id === id);
    setProduct(foundProduct);
    if (foundProduct) {
      setMainImage(foundProduct.image[0]); // Default to first image
    }
  }, [id]);
  const [selectedsize , setselectedsize] = useState(null)
  if (!product)
    return (
      <div className="text-center mt-10 w-full h-[90vh] flex justify-center items-center">
        Product not found
      </div>
    );
  return (
    <>
      <Navbar />
      <div className="max-w-2xl md:max-w-3xl mx-auto p-4 mt-20">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full rounded-xl shadow-md"
            />
            {/* Thumbnails */}
            <div className="flex gap-4 mt-4">
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumb ${index}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                    img === mainImage ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-xl font-semibold text-green-600 mb-4">
              RS:{product.price}
            </p>
            <div>
              {
                product.size?.map((sizes,index)=>(
                  <button
                  key={index}
                  onClick={()=>setselectedsize(sizes)} 
                  className="border px-3 py-1 gap-2 border-gray-300
                  transition ease-in focus:bg-[#fdd700]
                  ">{sizes}</button>
                ))
              }
            </div>
            <button
              className="bg-black text-white px-6 py-2 mt-4 rounded hover:bg-gray-800 transition"
              onClick={() =>
                dispatch(
                  addtocart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 0,
                    size:selectedsize
                  })
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetail;
