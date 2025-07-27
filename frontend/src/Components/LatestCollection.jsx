import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext';
import Titel from './Title';
import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
// import {setLatestProducts} from '../context/Shopcontext';



const LATEST = 'Latest';
const COLLECTIONS = 'Collections';


const LatestCollection = () => {

const  {products}  = useContext(ShopContext);
const [latestProduct, setLatestProducts] = useState([]);

useEffect(() => {
 setLatestProducts(products.slice(0,10));
}, []);

  return (

    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Titel text1={LATEST} text2={COLLECTIONS}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      {/* Rendering products  */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:grid-cols-3 lg:grid-cols-5  gap-y-6'>

        {
          latestProduct.map((item , index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    
    </div>
  )
}

export default LatestCollection