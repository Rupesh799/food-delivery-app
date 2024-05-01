import React from 'react';
import MenuItems from "@/app/components/Menu";
import Link from "next/link";
import MenuBar from "@/app/components/Menu";
import CartIcon from "@/app/components/CartIcon";
import Modes from "@/app/components/Modes";

const Navbar = () => {
    const user = false;
    return (
        <div className="h-12  bg-primary-primary1 text-text-text1 flex items-center justify-between px-5 py-3 lg:px-20 lg:py-8 md:px-20 md:py-8">
            {/*left links*/}
            <div className="hidden md:flex gap-5 flex-1">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>

                <Link href="/about">About</Link>
                {/*<Link href="/contact">Contact</Link>*/}
            </div>


            {/*logo*/}
            <div className="font-bold text-2xl md:text-center flex-1 ">
                <Link href="/" >Deliver It</Link>
            </div>

            {/*mobile menu*/}
            <div className="md:hidden ">
                <MenuBar/>
            </div>


            {/*right links*/}
            <div className="hidden md:flex items-center gap-5 flex-1 justify-end">
                <Modes/>
                <Link href="/contact">Contact</Link>
                        <CartIcon/>
                {!user ? <Link href="/login">Login</Link>:
                    <Link href="/order">Orders</Link>
                }
        </div>
        </div>
    );
};

export default Navbar;