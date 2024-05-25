"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

const UserLinks = () => {
    const {status} = useSession();
  return (
    <div>
         {status === 'authenticated' ?
        ( <div className='flex gap-4'>
         <Link href="/orders" className=' focus:text-yellow-500'>Orders</Link> 
         <span onClick={()=>signOut()} className='cursor-pointer'>Logout</span>
         </div>):
         <Link href="/login" className=' focus:text-yellow-500'>Login</Link>
                    
                }
    </div>
  )
}

export default UserLinks

