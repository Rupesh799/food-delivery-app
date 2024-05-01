import React from 'react';
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
const CartIcon = () => {
    return (
        <div className="flex ">
            <Link href="/cart" className="flex gap-3 items-center">
                <FaShoppingCart /> (1)
            </Link>
        </div>
    );
};

export default CartIcon;