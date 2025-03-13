import React from 'react';
import { BsTranslate } from "react-icons/bs";

export const NavBar = () => {
    return (
        <div className='flex items-center justify-center w-[90%] ml-16'>
        <ul className='p-1 px-10 list-none bg-[#ffe7e6] rounded-2xl flex justify-center gap-20 text-[#DC676F] text-[22px]'>
            <li className='cursor-pointer hover:scale-110 transition duration-300'>About Me</li>
            <li className='cursor-pointer hover:scale-110 transition duration-300'>Contatc Me</li>
            <li className='cursor-pointer hover:scale-110 transition duration-300'>Experiencie</li>
            <li className='cursor-pointer hover:scale-110 transition duration-300'>Proyects</li>
            <li className='cursor-pointer hover:scale-110 transition duration-300'>Skills</li>
            <li className='mt-1.5 cursor-pointer hover:scale-110 transition duration-300'><BsTranslate/></li>
        </ul>
    </div>
    )
  }
  