import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/forever-assets/assets/frontend_assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT '} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 ext-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempora est, numquam aliquam assumenda architecto explicabo maiores sint commodi dolorum odio eaque illo enim sapiente aspernatur error officia, dolor ipsa?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero enim repellendus voluptatum! Officiis perferendis ducimus reiciendis molestias qui illo, omnis necessitatibus iste explicabo facere ab nesciunt enim. Fuga, doloribus!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to give new fashion to our users</p>
      </div>
      </div>
      <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
<b>Quality Assurance</b>
<p className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam neque tempora sint corporis totam animi atque dolore, officia ipsa quidem tempore eius! Cumque at minus a explicabo facere quam facilis.</p>
</div>
<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
<b>Conviennice</b>
<p className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam neque tempora sint corporis totam animi atque dolore, officia ipsa quidem tempore eius! Cumque at minus a explicabo facere quam facilis.</p>
</div>
<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
<b>Exceptional Customer service</b>
<p className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam neque tempora sint corporis totam animi atque dolore, officia ipsa quidem tempore eius! Cumque at minus a explicabo facere quam facilis.</p>
</div>
      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default About
