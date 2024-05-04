import React from 'react';
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import {BiLogoInstagram} from "react-icons/bi";

const Footer = () => {
    return (
        <div className=" p-5 lg:px-20 lg:py-8 md:px-20 md:py-8 flex flex-col items-center gap-5 md:flex-row justify-between ">
            <div>
                <Link href="/" className="font-bold text-3xl border-b-2 border-primary-primary2">Deliver It</Link>
            </div>
            <div className="flex flex-col ">
                <span className="font-bold text-2xl text-center">Links</span>
                <div className="flex flex-col items-center gap-5 mt-4 xl:flex-row">
                    <Link href="/" >Home</Link>
                    <Link href="/about" >About</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="/contact">Contact</Link>

                </div>
            </div>
            <div>
                <span className="font-bold text-2xl text-center">Social Links</span>
                <div className="flex flex-col items-center justify-center gap-5 mt-4 text-xl cursor-pointer xl:flex-row ">
                    <a href="" className='hover:text-red-400'>
                        <AiFillInstagram/>
                    </a>
                    <a href="" className='hover:text-blue-600'>
                        <FaFacebook/>
                    </a>
                    <a href="" className='hover:text-black-600'>
                        <FaTiktok/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;