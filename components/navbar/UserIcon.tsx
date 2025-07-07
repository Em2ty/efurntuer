
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { LuUser } from 'react-icons/lu';

async function UserIcon() {
  const user= await currentUser();
  const profile_img = user?.imageUrl;
  
  
 if(profile_img){
    return (
    <div>
      <img src={profile_img} className='w-6 h-6  rounded-full object-cover'/>
    </div>
  )
}
  return <LuUser className='w-6 h-6 bg-blue-400 rounded-full text-white'/>
 
}

export default UserIcon