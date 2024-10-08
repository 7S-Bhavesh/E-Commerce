import React from 'react'
import { assets } from '../assets/forever-assets/assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div >
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt=''></img>
        <p className='font-semibold'> Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer easy and free Exchange</p>
      </div>

      <div >
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt=''></img>
        <p className='font-semibold'> 7 Days return Policy</p>
        <p className='text-gray-400'>We offer 7 days free policy</p>
      </div>

      <div >
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt=''></img>
        <p className='font-semibold'> Best Customer support</p>
        <p className='text-gray-400'>We provide 24/7 Customer support</p>
      </div>
    </div>

    
  )
}

export default OurPolicy
