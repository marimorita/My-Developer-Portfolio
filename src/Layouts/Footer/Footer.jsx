import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className='bg-[#DC676F] h-min-screen p-[1px] mt-24'>
        <div className="flex flex-wrap-reverse gap-16 m-10 justify-end items-center">
          <p className='text-white text-[30px] mr-[30rem] hover:underline hover:scale-105 duration-300'> ©Mariana Méndez </p>
          <a href="https://github.com/marimorita" target="_blank">
            <FaGithub className='text-white h-[60px] w-[60px] hover:scale-115 transition duration-300' />
          </a>
          <a href="mailto:marimm0927@gmail.com?Subject=Vi%20tu%20portafolio.%20Estoy%20intresado/a" target="_blank">
            <IoIosMail className='text-white h-[60px] w-[60px] hover:scale-115 transition duration-300' />
          </a>
          <a href="https://wa.me/3108768617?text=Vi%20tu%20portafolio.%20Estoy%20intresado/a" target="_blank">
            <FaWhatsapp className='text-white h-[60px] w-[60px] hover:scale-115 transition duration-300' />
          </a>
          <a href="https://www.linkedin.com/in/marianamendezmorales/" target="_blank">
            <FaLinkedin className='text-white h-[60px] w-[60px] hover:scale-115 transition duration-300' />
          </a>
        </div>
      </div>
    </>
  )
}