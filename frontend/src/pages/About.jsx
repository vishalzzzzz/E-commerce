import React from 'react'
import Titel from '../Components/Title'
import { assets } from '../assets/assets'


const About = () => {

  const onSubmitHaandler = (event) =>{
        event.preventDefault();
    }

  return (
    <idv>
    <div className='text-2xl text-center pt-8 border-t'>
       <Titel text1={"ABOUT"} text2={"US"} />
    
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p> Forever was born out of a deep passion for the art of fashion and a commitment to creating unique and timeless pieces that reflect the individuality and style of every woman. At Forever, we believe that fashion should be more than just a way to express yourself; it should be a reflection of your unique personality and personality.</p>
        <p>Since our inception ,  we ve working tirelessly to curate a divers selection of fashion pieces that reflect the latest trends and styles. Whether you re looking for a statement piece to make a statement or a piece to add to your wardrobe, we ve got you covered.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at Forever is to empoweer customers to express their individuality through fashion. We believe that fashion should be more than just a way to express yourself; it should be a reflection of your unique personality and personality.</p>

      </div>

    </div>

    <div className='text-xl py-4 '>
       <Titel text1={"WHY"} text2={"CHOOSE US"} />

    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600' >We take pride in our products and ensure that they meet the highest standards of quality and craftsmanship.</p>

      </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shoping with us is a breeze.</p>


      </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Our team of dedicated customer service representatives are always ready to assist you with any questions or concerns you may have.</p>


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

    </idv>
  )
}

export default About