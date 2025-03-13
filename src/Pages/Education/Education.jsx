import React from 'react'
import { FaBook } from "react-icons/fa";

export const Education = () => {
  return (
    <section id='education'>
      <div className='bg-[#ffd4d3] rounded-2xl mt-26 grid grid-cols-2'>
        <div className='col-span-1'>
          <div className='flex flex-wrap mt-4'>
            <FaBook className='text-[45px] text-[#DC676F] mt-3 ml-4 mr-2' />
            <h1 className='h1 text-[50px] text-[#DC676F]'>Education</h1>
          </div>
          <div className='h-min-screen w-min-screen border-l-2 ml-6 border-[#F2B5B9] relative mb-4 mt-4 mr-6'>
            <div className='h-[20px] w-[20px] absolute bg-[#DC676F] rounded-[100%] left-[-11px] top-2'></div>
            <div className='h-[20px] w-[20px] absolute bg-[#DC676F] rounded-[100%] left-[-11px] top-[13rem]'></div>
            <div className='h-[20px] w-[20px] absolute bg-[#DC676F] rounded-[100%] left-[-11px] top-[25rem]'></div>
            <div className="flex flex-col ml-4 gap-16">
              <div>
                <h2 className='text-[#DC676F] text-[25px]'>Technologist in Software Analysis and Development</h2>
                <h3 className='text-[#E8868D] text-[20px]'>SENA</h3>
                <p className='text-[#776969] text-[18px]'>2023-2024</p>
              </div>
              <div>
                <h2 className='text-[#DC676F] text-[25px]'>English B1</h2>
                <h3 className='text-[#E8868D] text-[20px]'>American School Way</h3>
                <p className='text-[#776969] text-[18px]'>2023-2025</p>
              </div>
              <div>
                <h2 className='text-[#DC676F] text-[25px] mt-8'>Technical High School Diploma in Software Analysis and Development"</h2>
                <h3 className='text-[#E8868D] text-[20px]'>SENA</h3>
                <p className='text-[#776969] text-[18px]'>2021-2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-26 mb-5 flex flex-col gap-18 mx-4'>
          <p className='text-[#DC676F] text-[20px] mr-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non sint, excepturi ratione impedit possimus nesciunt odit veritatis voluptatem repudiandae, pariatur commodi, tempora id autem velit sequi quia nostrum. Neque? </p>
          <p className='text-[#DC676F] text-[20px] mr-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non sint, excepturi ratione impedit possimus nesciunt odit veritatis voluptatem repudiandae, pariatur commodi, tempora id autem velit sequi quia nostrum. Neque? </p>
          <p className='text-[#DC676F] text-[20px] mr-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non sint, excepturi ratione impedit possimus nesciunt odit veritatis voluptatem repudiandae, pariatur commodi, tempora id autem velit sequi quia nostrum. Neque? </p>
        </div>
      </div>
    </section>)
}
