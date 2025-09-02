import Header from '@/components/Header'
import React from 'react'

interface IComments{
  id: string
  body: string
  likes: number
  postId: number
}

const Comments = async() => {
  const res = await fetch("https://dummyjson.com/comments")
  const data = await res.json()
  console.log(data);
  
  return (
    <>
    <div className='container mx-auto grid grid-cols-4 gap-[16px]'>
      {
        data?.comments?.map((comments: IComments)=>(
          <div className='container ml-[10px] mb-[30px] mt-[30px] w-[345px] h-[150px] bg-[#1e1e1e] text-white pt-[10px] rounded-[3px] border pl-[20px]' key={comments.id}>
          <h1 className='line-clamp-1 mb-[10px] text-[20px] font-bold'>{comments.body}</h1>            
          <p><span className='text-red-800'>Like:</span> {comments.likes}</p>
          <p><span className='text-red-800'>Post:</span> {comments.postId}</p>

          </div>
        ))
      }
    </div>
    </>
  )
}

export default Comments