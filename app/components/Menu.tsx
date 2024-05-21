'use client'
import React,{useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import CartIcon from "@/app/components/CartIcon";

const links =[
    {
        id:1,
        title:'Home',
        url:'/'
    },
    {
        id:2,
        title:'Menu',
        url:'/menu'

    },
    {
        id:3,
        title:'About',
        url:'/about'
    },
    {
        id:4,
        title:'Contact',
        url:'/contact'
    }
]

const MenuBar = () => {
    const [open , setOpen] =useState(false);
    const user = false
    return (
        <div>
            {!open ?( <Image src="/temp/menu.svg"  alt="logo" height={30} width={30} className="dark:invert" onClick={()=>setOpen(true)}/>):(
            <Image src="/temp/close.png" alt="logo"  height={20} width={20} className="dark:invert"  onClick={()=>setOpen(false)}/>
                )}

            {open && (<div className="w-full bg-primary-primary3 backdrop-blur-xl text-text1 font-bold absolute left-0 top-24 h-[calc(100vh-6rem)] text-2xl flex flex-col justify-center items-center gap-6 z-10 focus:text-yellow-500">
                {
                    links.map((link)=>(
                        <Link href={link.url}  key={link.id} onClick={()=>setOpen(false)}>{link.title}</Link>
                    ))
                }
                {!user? (<Link href="/login" onClick={()=>setOpen(false)} className=' focus:text-yellow-500'>Login</Link>):
                    (<Link href="/orders" onClick={()=>setOpen(false)} className=' focus:text-yellow-500'>Orders</Link>)}


                    <div className="flex gap-2 justify-center items-center" onClick={()=>setOpen(false)}>
                        <CartIcon />
                    </div>

            </div>
                )}
        </div>
    );
};

export default MenuBar;