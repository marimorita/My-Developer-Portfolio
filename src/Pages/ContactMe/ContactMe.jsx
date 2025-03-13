import React from 'react'
import { IoIosMail } from "react-icons/io";
import { AiFillSmile } from "react-icons/ai";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const ContactMe = () => {
  return (
    <section id='contactMe'>
      <div className='flex flex-wrap mt-26 '>
        <AiFillSmile className='text-[#DC676F] text-[45px] mt-2.5' />
        <h1 className='h1 text-[#DC676F] text-[50px] ml-1'>Contact Me</h1>
      </div>
      <div className=" flex flex-col gap-x-20 gap-10">
        <div className='flex flex-wrap gap-32 justify-center'>
          <div className='flex gap-2 items-center'>
            <IoIosMail className='text-[#DC676F] text-[40px] mt-3' />
            <p className='text-[#DC676F] text-[30px]'> marimm0927@gmail.com</p>
          </div>
          <div className='flex gap-2'>
            <FaWhatsapp className='text-[#DC676F] text-[40px] mt-1' />
            <p className='text-[#DC676F] text-[30px]'> +57 310-876-8617</p>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-center'>
          <FaLinkedin className='text-[#DC676F] text-[40px] mt-2' />
          <p className='text-[#DC676F] text-[30px]'> mari morita 123</p>
        </div>
      </div>
    </section>)
}
