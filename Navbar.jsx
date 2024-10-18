import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPaperAirplane, HiMiniMusicalNote, HiMiniPlay } from "react-icons/hi2";
import { HiPlus, HiDotsVertical, HiMap, HiStatusOnline, HiVolumeUp } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        { name: 'HOME', icon: HiHome, path: '/' },
        // { name: 'SEARCH', icon: HiMagnifyingGlass },
        { name: 'MUSIC', icon: HiMiniMusicalNote,path:'/music' },
        { name: 'TRENDING', icon: HiMiniPlay,path:'/trend' },
        { name: 'ALL GENRES', icon: HiPlayCircle, path: '/movies' },
        { name: 'PAYMENT', icon:  HiPlus  , path : '/payment'}
    ];

    return (

        <div className='bg-black flex items-center justify-between p-5'>
            <div className='flex gap-8 items-center'>
                <Link to="/"> {/* Link to the home page */}
                    <img src="moviewave.png" className='w-[80px] md:w-[115px] object-cover' alt="Stream Logo" />
                </Link>
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <Link key={item.name} to={item.path || '#'}> {/* Link to each menu item */}
                            <HeaderItem name={item.name} Icon={item.icon} />
                        </Link>
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <Link key={item.name} to={item.path || '#'}> {/* Link to each menu item */}
                            <HeaderItem name={''} Icon={item.icon} />
                        </Link>
                    ))}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle && <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                            {menu.map((item, index) => index > 2 && (
                                <Link key={item.name} to={item.path || '#'}> {/* Link to each menu item */}
                                    <HeaderItem name={item.name} Icon={item.icon} />
                                </Link>
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
            <Link to="/login">
                <img src="https://png.pngtree.com/png-vector/20220427/ourmid/pngtree-vector-login-icon-login-design-shadow-vector-png-image_13266424.png" className='w-[40px] rounded-full' alt="User Avatar" />
            </Link>
        </div>
    );
}

export default Navbar;
