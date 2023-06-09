import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decrementCart, getTotal, incrementCart, removeFromCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {

  const cartItems=useSelector(state=>state.cart.cartItems);
const cart=useSelector(state=>state.cart)
const total=useSelector(state=>state.cart);

const dispatch =useDispatch();
useEffect(()=>{

dispatch(getTotal())
},[cart])
  return (
    <div className='p-4 mb-12 '>
      <div className='text-center font-bold text-md '>My Cart</div>
      {
        cartItems.length<1 && <div className='flex flex-col items-center text-xs justify-center h-[60vh] font-bold text-red-700'>No items found in the cart
        <Link to="/" className='text-xs my-4 text-slate-500'>Click here to shop</Link>
        </div>
      }
      <div>
        
        {
          cartItems.map(item=>
            <div className='flex flex-row items-start p-4 space-x-2 border-b '>
            <img src={item.image} className='w-[5rem] h-[5rem]  rounded-md' alt="" />
            <div className=''>
              <h1 className='text-sm font-bold'>{item.title}</h1>
              <div>
                <p className=''>
                  <span className='font-bold text-xs'>Price:</span>
                  <span className='text-xs'>{item.price}</span>
                </p>
                <p className=''>
                  <span className='font-bold text-xs'>TotalPrice:</span>
                  <span className='text-xs'>$   {(item.price)*(item.quantity)}</span>
                </p>
            

                <div className='border rounded w-1/2 my-2 flex items-center justify-center space-x-4 '>
                  <span className='' onClick={()=>dispatch(incrementCart(item))}>+</span>
                  <span className='text-md'>{item.quantity}</span>
                  <span className=''onClick={()=>dispatch(decrementCart(item))}>-</span>
                </div>
                <button className='text-xs bg-red-600 rounded text-white p-1 flex space-x-1'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">

                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                  </span>

                  <span onClick={()=>dispatch(removeFromCart(item))}>Remove</span>
                </button>
              </div>
            </div>


          </div>)
        }
          
          
        
        {/* bottom */}
        {
          cartItems.length>0 &&
          <> <button className='text-xs p-2 transition-all duration-700 rounded  text-slate-600 border-2 border-red-500 hover:bg-red-500 hover:text-white' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
          <div className='p-4'>
            {/* flex__container */}
            <div className='flex justify-between text-sm border-b my-2'>
              {/* left */}
              <div>
                <p>Sub Total</p>
  
              </div>
              {/* right */}
              <div>
  
                <p>${total.totalAmount}</p>
              </div>
            </div>
            {/* flex__container */}
            <div className='flex justify-between text-sm border-b my-2'>
              {/* left */}
              <div>
                <p>Delievery Fee</p>
  
              </div>
              {/* right */}
              <div>
  
                <p>$1</p>
              </div>
            </div>
            {/* flex__container */}
            <div className='flex justify-between text-sm border-b my-2'>
              {/* left */}
              <div>
                <p>Total</p>
  
              </div>
              {/* right */}
              <div>
  
                <p>${total.totalAmount}</p>
              </div>
            </div>
            <button className='w-full  text-center p-3 text-xs bg-purple-600 rounded text-white    flex space-x-1'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
  
              </span>
  
              <span>Check out</span>
            </button>
          </div></>

        }
       
      </div>
    </div>

  )
}

export default Cart