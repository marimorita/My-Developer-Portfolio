import React from 'react'
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

export const Proyects = () => {
  return (
    <section id='proyects'>
      <div className='bg-[#ffe7e6] rounded-2xl mt-26 '>
        <div className='flex flex-wrap '>
          <h1 className='h1 text-[50px] text-[#DC676F] ml-4'>Proyects </h1>
          <IoCodeSlash className='text-[#DC676F] text-[50px] m-2' />
        </div>
        <div className='flex gap-[20rem] justify-center'>
          <div className=''>
            1st proyect
            <div className='flex flex-wrap gap-10 text-[#DC676F] text-[40px]'>
              <FaLink />
              <FaGithub />
            </div>
          </div>
          <div className=''>
            2nd proyect
            <div className='flex flex-wrap gap-10 text-[#DC676F] text-[40px]'>
              <FaLink />
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
