import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/forever-assets/assets/frontend_assets/assets'
import { shopContext } from '../Context/shopContext'

const PlaceOrder = () => {
  const[method,setMethod]=useState('cod')
  const{ navigate} =useContext(shopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIEVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3  '>
          <input type="text" className='border border-gray-300 py-1.5 px-3.5 w-full rounded' placeholder='First Name' />
          <input type="text" className='border border-gray-300 py-1.5 px-3.5 w-full rounded' placeholder='Last Name' />
        </div>
        <input type="email" className='border border-gray-300 py-1.5 px-3.5 w-full rounded' placeholder='Email Address' />
        <input type="email" className='border border-gray-300 py-1.5 px-3.5 w-full rounded' placeholder='Street ' />
        <div className='flex gap-3  '>
          <input type="text" className='border border-gray-300 py-1.5 px-3.5 w-full rounded' placeholder='City' />
          <input type="text" className='border border-gray-300 py-1.5 px-3.5 w-full rounded' placeholder='State' />
        </div>
        <div className='flex gap-3  '>
          <input type="number" className='border border-gray-300 py-1.5 px-3.5 w-full rounded' placeholder='Zip-Code' />
          <input type="text" className='border border-gray-300 py-1.5 px-3.5 w-full rounded' placeholder='Country' />
        </div>
        <div className='flex gap-3  '>
          <input type="number" className='border border-gray-300 py-1.5 px-3.5 w-full rounded' placeholder='Phone' />
          <input type="text" className='border border-gray-300 py-1.5 px-3.5 w-full rounded' placeholder='Last Name' />
        </div>

      </div>
        {/* Right side */}
        <div className='mt-8'>
          <div className='mt-8 min-w-80'>
            <CartTotal />
          </div>
          <div className='mt-12'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
            <div className='flex flex-col gap-3 lg:flex-row'>
            <div onClick={()=>{setMethod('stripe')}} className='flex items-center cursor-pointer p-2 px-3 '>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe' ? 'bg-green-400':''}`}></p>
              <img className='h-5 mx-4 ' src={assets.stripe_logo}></img>
            </div>

            <div onClick={()=>{setMethod('razorpay')}} className='flex items-center cursor-pointer p-2 px-3 '>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay' ? 'bg-green-400':''}`}></p>
              <img className='h-5 mx-4 ' src={assets.razorpay_logo}></img>
            </div>

            <div onClick={()=>{setMethod('cod')}} className='flex items-center cursor-pointer p-2 px-3'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod' ? 'bg-green-400':''}`}></p>
              <p className='text-gray-300 text-sm font-medium mx-4 '>Cash on Delievery</p>
            </div>
            </div>
          <div className='w-full text-end mt-8'>

            <button onClick={()=>{navigate('/orders')}} className='bg-black text-white px-16 py-3 text-sm '>PLACE ORDER</button>
          </div>
          </div>

        </div>
    </div>
  )
}

export default PlaceOrder
