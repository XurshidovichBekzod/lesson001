import Header from '@/components/Header'
import React from 'react'

interface IUsers {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  username: string
}

const User = async () => {
  const res = await fetch('https://dummyjson.com/users')
  const data = await res.json()
  console.log(data);

  return (
    <>
      <div className="container mx-auto grid grid-cols-4 gap-[16px]">
        {
          data?.users?.map((user: IUsers) => (
            <div className='container ml-[10px] mb-[30px] mt-[30px] w-[345px] h-[150px] bg-[#1e1e1e] text-white pt-[10px] rounded-[3px] border pl-[20px]' key={user.id}>
              <h1 className='mb-[20px] text-[20px] font-bold'>{user.firstName} {user.lastName}</h1>
              <p>Tel: {user.phone}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default User