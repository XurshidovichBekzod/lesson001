import Header from '@/components/Header'
import Image from 'next/image'

interface IRecipes{
  image: string
  id: string
  name: string
  cuisine: string
  rating: number
  mealType: string
}

import React from 'react'

const Recipes = async() => {
  const res = await fetch("https://dummyjson.com/recipes")
  const data = await res.json()
  console.log(data);
  

  return (
    <>
    
    <div className='container mx-auto grid grid-cols-4 gap-[16px]'>
      {
        data?.recipes?.map((recipes: IRecipes) => (
          <div className='container ml-[10px] mb-[30px] mt-[30px] w-[345px] pb-[30px] bg-[#1e1e1e] text-white pt-[10px] rounded-[3px] border pl-[20px]' key={recipes.id}>
            <Image width={300} height={300} src={recipes.image} alt={recipes.name}/>
            <div className='line-clamp-1 mb-[10px] text-[20px] font-bold'>{recipes.name}</div>
            <p><span className='text-red-800'>Cuisine:</span> {recipes.cuisine}</p>
            <div>
              <p className='text-red-800'>{recipes.rating}</p>
              <p>{recipes.mealType}</p>
            </div>
          </div>
        ))
      }
    </div>
    </>
    
  )
}

export default Recipes