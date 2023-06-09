import React from 'react'
import { useSelector } from 'react-redux'
import SingleProduct from '../SingleProduct';

const Home = () => {


    const { items, status } = useSelector(state => state.products);

    return (
        <div className=' bg-slate-100'>

            <p className='font-bold text-center p-2 text-md'>
                Trending Products
            </p>

            {

                status === "pending" ?
                    <div className=' text-center flex flex-col items-center justify-center h-[60vh] '>
                        <p className='text-orange-700 font-bold rounded w-fit text-sm px-3 '>Please wait loading.....</p> <br />

                    </div>
                    : status === "rejected" ?
                        <div className=' text-center flex flex-col items-center justify-center h-[60vh] '>
                            <p className='text-red-700 font-bold rounded w-fit text-sm px-3 '>Internet disconnected</p> <br />

                        </div>
                        :
                        <div className='grid grid-cols-2 gap-4 px-4 mb-16'>
                            {
                                items.map(item=>  <SingleProduct key={item.id} data={item}/>)
                            }
                         
                        </div>
            }






        </div>
    )
}

export default Home