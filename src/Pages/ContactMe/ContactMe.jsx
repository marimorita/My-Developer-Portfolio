import React from 'react'
import { IoIosMail } from "react-icons/io";
import { AiFillSmile } from "react-icons/ai";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const ContactMe = ({refContactMe}) => {
  return (
    <section ref={refContactMe}>
    <div className="flex flex-wrap items-start mt-26">
      <div className="relative w-[50px] p-[19px] h-[80px] overflow-hidden">
        <div className="absolute left-0 animate-bounce">
          <AiFillSmile className="text-[#DC676F] text-[45px]" />
        </div>
      </div>
      <h1 className="text-[#DC676F] text-[50px] h1">Contact Me</h1>
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
    </section>
    )
}
