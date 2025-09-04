import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

interface IProducts{
  thumbnail: string
  id: string
  brand: string
  description: string
  price: number
  rating: number
}

const Products = async() => {
  const res = await fetch("https://dummyjson.com/products")
  const data = await res.json()
  console.log(data);

  return (
    <>

      <div className='container mx-auto grid grid-cols-4 gap-[16px]'>
        {
          data?.products?.map((products: IProducts) => (
            <div className='container ml-[10px] mb-[30px] pb-[30px] mt-[30px] w-[345px]  bg-[#1e1e1e] text-white pt-[10px] rounded-[3px] border pl-[20px]' key={products.id}>
              <Image width={300} height={300} src={products.thumbnail} alt={products.brand}/>
              <h1 className='line-clamp-1 mb-[10px] text-[20px] font-bold'>{products.brand || "No brand"}</h1>
              <p className='line-clamp-2 mb-[15px]'>{products.description}</p>
              <div className='flex justify-between mr-[20px] text-red-800'>
                <p>{products.price}</p>
                <p>{products.rating}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>

  )
}

export default Products