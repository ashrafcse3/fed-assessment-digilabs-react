import React from 'react';
import { Bars2Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const menuItems = (
        <>
            <li><a href="#index">About</a></li>
            <li><a href="#index">Blog</a></li>
            <li><a href="#index">Pricing</a></li>
            <li><a href="#index">Careers</a></li>
            <li><a href="#index">Contact</a></li>
        </>
    );

    return (
        <div className="navbar max-w-[1350px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href="#index" className="btn btn-ghost normal-case text-xl">
                    <Bars2Icon className="h-6 stroke-[3px] rounded-md text-white bg-purple-600 p-1 mr-2 " />
                    <p>Pepper</p>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="#index" className="text-digilabs flex mr-3">
                    <ShoppingCartIcon className="h-7 stroke-[3px] rounded-md  p-1 mr-1" />
                    <p className='text-md'>Cart</p>
                </a>
                <a href="#index" className="btn hover:bg-purple-700 btn-outline border-digilabs text-digilabs mr-2 rounded-xl font-normal capitalize">Login</a>
                <a href="#index" className="btn hover:bg-purple-700 bg-digilabs text-white rounded-xl font-normal">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;