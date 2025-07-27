import React from 'react'
import Titel from '../Components/Title'
import { assets } from '../assets/assets'

const Contact = () => {

   const onSubmitHaandler = (event) =>{
        event.preventDefault();
    }
  return (

    <div>
    <div className='text-center text-2xl pt-10 border-t'>
       <Titel text1={"CONTACT"} text2={" US"} />

    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=""/>

      <div className='flex flex-col justify-center items-start gap-6'>

       <p className='font-semibold text-x1 text-gray-600'> Our Store</p>
       <p className='text-gray-500'> 841234 Darauli market <br/> Darauli , Siwan</p>
       <p className='text-gray-500'> Tel: +91 9989546757 <br/> Email: 6VH6I@example.com</p>
       <p className='font-semibold text-x1 text-gray-600'> Careers at Forever</p>
       <p className='text-gray-500'> Learn more about our teams and job openings</p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

      </div>

    </div>

    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <form onSubmit={onSubmitHaandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
           <input  className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email'  required />
           <button type="submit" className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    
    </div>

    </div>


  )
}

export default Contact