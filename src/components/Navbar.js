import React, { useState } from 'react';
import logo from './logo3.png'
import logo0 from './s2.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Exibition' },
        { id: 2, text: 'Visitor' },
        { id: 3, text: 'Conference' },
        { id: 4, text: 'Branding' },
        { id: 5, text: 'Contact us' },
    ];
  return (
    <>
      
         < div className='bg-[#12123e] flex justify-between items-center h-28 w-full mx-auto pl-7 text-[#00df9a] zindex'>
            <div  className='h-full w-620 flex titleimgb'>

            <img src={logo0} alt="" srcset="" className='h-full w-30 titleimg'  />

            <img src={logo} alt="" srcset="" className='h-full w-72 mt-2 titleimg' />
            </div>
            

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 hover:bg-[#00df9a] rounded-xl m-2 justify-between items-center pt-4 cursor-pointer duration-300 hover:text-black'
                    >
                       <div  className="align-middle ">
                       {item.text}
                        </div>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 zindex'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
                }
            >
                {/* Mobile Logo */}
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
                <img src={logo} alt="" srcset="" className='h-full w-50' />
                </h1>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
   </>


  )

}

export default Navbar;