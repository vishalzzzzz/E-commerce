import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext';
import Titel from './Title';

const CartTotal = () => {

  const {currency , delivery_fee,getCartAmount} = useContext(ShopContext);


  return (
    <div className='w-foll'>

      <div className='text-2x1'>
          <Titel text1={"CART"} text2={"TOTALS"} />

      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flexx-justify-between'>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>

        </div>
        <hr/>
        <div>
          <p>Delivery fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr/>
        <div className='flexx-justify-between'>
          <b>Total</b>
          <b>{currency}{getCartAmount()===0 ? 0 : getCartAmount() + delivery_fee}.00</b>
        </div>


      </div>
    
    </div>
  )
}

export default CartTotal