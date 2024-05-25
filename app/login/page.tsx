"use client"
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginPage = () => {

    const {data, status} = useSession();
    const router = useRouter()

    console.log("data is", data);
    console.log("status is", status);
    

    if(status === 'loading'){
        return <div>Loading...</div>
    }

    if(status === 'authenticated'){
        router.push('/');
    }
    // if(status === 'unauthenticated'){
    //     return <h1>Failed to login</h1>
    // }

    return (
        <div className='p-2 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center w-full'>
          {/* box */}
          <div className='h-full shadow-2xl rounded-md p-4 flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-[50%]'>
            {/* image container */}
            <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
                <Image src="/temp/login.jpg" alt='' fill className='rounded object-cover'/>
            </div>

            {/* form container */}
            <div className='p-10 flex flex-col gap-4 md:w-1/2'>
                <h1 className='font-bold text-2xl'>Welcome</h1>
                <p>Login with you social Accounts</p>
                <button className='flex items-center gap-3 bg-primary-primary2 px-3 py-2 rounded-md font-bold' onClick={()=>signIn("google")}>
                    <Image src="/temp/Google.png" alt='' width={20} height={20} className='object-contain'/> 
                    <span>Login with Google</span>
                </button>
                <button className='flex gap-3 bg-primary-primary2 px-3 py-2 rounded-md font-bold'>
                    <Image src="/temp/fb.png" alt='' width={20} height={20} className='object-contain'/> 
                    <span>Login with Facebook</span>
                </button>
            </div>
          </div>
        </div>
    );
};

export default LoginPage;