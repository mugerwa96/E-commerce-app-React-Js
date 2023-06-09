
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams} from 'react-router-dom'
import { addToCart } from '../../features/cartSlice';


const Details = () => {

  const dispatch= useDispatch()
  const [item,setItem]=useState({})
  const{ image,title,price,description,category}=item
const {id}=useParams();
useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res=>setItem(res.data))
    .catch(error=>console.log(error))
},[])


  return (
    <div className="relative  space-y-4  group mx-auto  p-6   mb-12  rounded-md ">
      <div className='flex items-center justify-center'>
      
          <img src={image}alt="shoes" className='group-hover:scale-110 transition-all duration-700  w-[50%] h-[12rem] object-fit' />
    
     

      </div>
      <div className='space-y-2'>
        <h1 className='text-xl font-bold '>{title}</h1>

        <p className=''>
          <span className='font-bold text-sm'>Price:</span> <br />
          <span className='text-sm'>$:{price}</span>
        </p>

        <p className=''>
          <span className='font-bold text-sm'>Category:</span> <br />
          <span className='text-sm'>89</span>
        </p>
     
        <p className=''>
          <span className='font-bold text-sm'>Description:</span> <br />
          <span className='text-xs'>{description}</span>
        </p>
        <div className='  w-full'>

          <div className='flex space-x-2'>

          <button className='text-xs bg-green-600 rounded text-white p-2 w-full items-center justify-center flex space-x-1' 
                 onClick={()=>dispatch(addToCart(item))}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">

                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </span>
                    <span>Add To Cart</span>
                </button>

          </div>
        </div>
      </div>

      {/* back button */}
      <div className='absolute bg-orange-800 text-white rounded-md top-0  '>
        <Link to="/">
          <span className='flex items-center justify-center w-6 h-6  '>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">

              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>


          </span>
        </Link>
      </div>
    </div>
  )
}

export default Details