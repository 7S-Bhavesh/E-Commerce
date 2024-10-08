import React from 'react'

const NewsLetterBox = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off Now</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam voluptates, aut, totam culpa voluptatum nemo id odio quas molestiae corporis at. Nostrum distinctio voluptates sit qui placeat magni voluptas?
      </p>
      <form onSubmit={handleSubmit}className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type='email' className='w-full sm:flex-1 outline-none 'placeholder='Enter your EMail' required></input>
        <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
