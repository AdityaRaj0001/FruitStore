import React from 'react'

const ProductCard = (props) => {

    const {item}=props

    const  {id:price_id,unit_amount:cost, product:productInfo }=item
    const {name,description}=productInfo
  return (
    <div className='w-full md:w-[45%] lg:w-[30%] flex border-black border-2 p-4 flex-col bg-white hover:shadow-lg cursor-point'>
        <img src={productInfo.images[0]} alt={name} className='w-full h-full object-cover'/>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold text-xl'>{name}</h1>
            <h1 className='font-bold text-xl'>₹ {parseInt(cost)/100}</h1>
        </div>
        <h1 className='font-semi-bold text-xl mt-4'>Description: {description}</h1>
    </div>

  )
}

export default ProductCard