import React from 'react'
import { Router } from 'react-router-dom'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import PalceOrder from './pages/PalceOrder'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import LatestCollection from './Components/LatestCollection'
import BestSeller from './Components/BestSeller'
import  OuprPolicy from './Components/OurPolicy'
import NewsletterBox from './Components/NewsletterBox'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import About from './pages/About'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
        <Navbar />
        <SearchBar/>
      
        <Hero/>
        <LatestCollection />
        <BestSeller />
        <OuprPolicy />
        <NewsletterBox />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/palce-order" element={<PalceOrder />} />



          <Route path="/orders" element={<Orders />} />
          {/* <Route path="/product/:id" element={<Product />} />' */}
          <Route path ='/product/:productId' element={<Product />} />
          <Route path="/Collection/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About/>} />
          {/* <Route path="/Home" element={<Home />} /> */}

{/* 
          <Route path='/' element={<Home />} />
          <Route path ='/collection' element={<Collection />} />
          <Route path='/about' element ={<About/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path = '/product/:productId'element={<Product />} />
          <Route path = '/cart' element={<Cart />} />
          <Route path = '/login' element={<Login />} />
          <Route path = '/place-order' element={<PlaceOrder />} />
          <Route path = '/order' element={<Order />} /> */}

          


        </Routes>

        <Footer />

    </div>
  )
}

export default App