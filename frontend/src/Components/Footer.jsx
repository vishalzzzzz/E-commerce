import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo}   className='w-32 mb-5' alt=""/>
          <p className='w-full md:w-2/3 text-gray-600'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPNY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>

          </ul>
        </div>

        <div>
          <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1 234 567 890</li>
            <li>9qE5o@example.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>

          Copyright  2025@ forever.com All rights reserved

        </p>
      </div>
    </div>
  )
}

export default Footer