import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className='bg-[#DC676F] h-min-screen p-[1px] mt-26'>
        <div className="flex flex-wrap-reverse gap-16 m-10 justify-end items-center">
          <p className='text-white text-[30px] mr-[30rem] hover:underline hover:scale-105 duration-300'> ©Mariana Méndez </p>
          <FaGithub className='text-white h-[60px] w-[60px] hover:scale-115 transition duration-300'/>
          <IoIosMail className='text-white h-[60px] w-[60px] hover:scale-115 transition duration-300'/>
          <FaWhatsapp className='text-white h-[60px] w-[60px] hover:scale-115 transition duration-300'/>
          <FaLinkedin className='text-white h-[60px] w-[60px] hover:scale-115 transition duration-300'/>
        </div>
      </div>
    </>
  )
}