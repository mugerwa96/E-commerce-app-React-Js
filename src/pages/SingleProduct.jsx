import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/cartSlice';

const SingleProduct = (props) => {
const{id,title,price, description,image ,category} =props.data;
const  dispatch= useDispatch();
    return (
    <div className="relative w-[10rem] space-y-2 h-[14rem] overflow-hidden group  shadow-md p-3  bg-white rounded-md ">
    <div className='flex items-center justify-center'>

        <img src={image} alt="" className='group-hover:scale-110 transition-all duration-700  w-[6rem] h-[6rem] object-fit' />
    </div>
    <div className=''>
        <h1 className='text-sm font-bold text-center'>{`${title.slice(0,10)}....`}</h1>

        <p className=''>
            <span className='font-bold text-xs'>Category:</span >
            <span className='text-xs block'>{category}</span>
        </p>
        <div className='absolute bottom-2  w-full'>

            <div className='flex space-x-2'>

                    <Link to={`/products/${id}`}>
                <button className='text-xs bg-orange-600 rounded text-white p-1 flex space-x-1'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                    </span>

                    <span>View More</span>
                </button>
                </Link>
                <button className='text-xs bg-green-600 rounded text-white p-1 flex space-x-1' 
                 onClick={()=>dispatch(addToCart(props.data))}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">

                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </span>
                    <span>Cart</span>
                </button>

            </div>
        </div>
    </div>
</div>
  )
}

export default SingleProduct