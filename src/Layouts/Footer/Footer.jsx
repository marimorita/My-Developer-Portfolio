import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <div className='bg-[#DC676F] h-min-screen p-[1px] mt-26'>
        <div className="flex flex-wrap-reverse gap-16 m-10 justify-end items-center">
          <p className='text-white text-[30px] mr-[30rem]'> ©Mariana Méndez </p>
          <FaGithub className='text-white h-[60px] w-[60px]' />
          <IoIosMail className='text-white h-[60px] w-[60px]' />
          <FaWhatsapp className='text-white h-[60px] w-[60px]' />
          <FaLinkedin className='text-white h-[60px] w-[60px]' />
        </div>
        <div className='flex justify-start'>
        </div>
      </div>
    </>
  )
}
