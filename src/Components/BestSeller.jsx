import React, { useContext, useEffect, useState } from 'react'
import {shopContext} from '../Context/shopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const{products}=useContext(shopContext)
    const[BestSeller,setbestSeller]=useState([])

    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestseller))
        setbestSeller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10 '>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p  className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui magnam exercitationem dolores consequuntur voluptatibus doloribus, molestias fuga incidunt tempore aperiam voluptatum nostrum quasi repudiandae consequatur cum eum at soluta?
            </p>


            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols:4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    BestSeller.map((item,index)=>(
                        <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                    ))
                }
            </div>

        </div>
      
    </div>
  )
}

export default BestSeller