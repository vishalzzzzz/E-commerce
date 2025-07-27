import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext';
import Titel from './Title';
import { useState , useEffect , BEST , SELLERS , setBestSeller } from 'react';
import ProductItem from './ProductItem';



const  BestSeller = () => {

    const {products}  = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
     const bestProduct = products.filter((item) => item.bestseller);
     setBestSeller(bestProduct .slice(0,5))
    }, []);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
           <Titel text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:grid-cols-3 lg:grid-cols-5  gap-y-6'>
            {
                bestSeller.map((item , index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
     
    </div>
  )
}

export default BestSeller