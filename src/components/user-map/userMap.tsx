import React from 'react'

const userMap = async () => {
    const res = await fetch('https://dummyjson.com/comments')
    const data = await res.json()
    console.log(data);
    
    return (
        <div>userMap</div>
    )
}

export default userMap