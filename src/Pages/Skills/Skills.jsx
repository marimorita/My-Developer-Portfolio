import React from 'react'
import { TfiReload } from "react-icons/tfi";
import { FaLaptopCode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTypescript } from "react-icons/si";
import { FaFigma, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { LuHandshake, LuNotebookPen, LuBrain } from "react-icons/lu";
import { RiTailwindCssFill, RiPlantLine, RiChatVoiceAiLine } from "react-icons/ri";

export const Skills = () => {
  return (
    <section id='skills'>
      <div className='grid grid-cols-2 items-center mt-14'>
        <div className='col-span-1'>
          <div className='flex items-center justify-center mt-20'>
            <FaLaptopCode className='text-[#DC676F] text-[50px] mr-2 mb-2' />
            <p className='h1 text-[50px] text-[#DC676F]'>Hard Skills</p>
          </div>
          <div className='text-[#DC676F] m-6 flex flex-wrap gap-24 justify-evenly mt-10'>
            <FaJava className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300' />
            <IoLogoJavascript className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300' />
            <SiMysql className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300' />
            <FaReact className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300' />
            <RiTailwindCssFill className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300' />
            <SiTypescript className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300' />
            <FaNodeJs className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300' />
            <FaFigma className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300' />
          </div>
        </div>
        <div className='mt-20'>
          <div className='flex items-center justify-center mt-20'>
            <RiPlantLine className='text-[#DC676F] text-[50px] mr-2 mb-2' />
            <p className='h1 text-[50px] text-[#DC676F]'>Soft  Skills</p>
          </div>
          <div className='h-min-screen w-min-screen mt-10 border-l-2 ml-28 border-[#F2B5B9] relative'>
            <ul className='m-4 gap-6 flex flex-col'>
              <div className='h-[20px] w-[20px] absolute bg-[#DC676F] rounded-[100%] left-[-11px] top-2'></div>
              <li className='text-[#DC676F] text-[23px] relative flex flex-wrap items-center '>TeamWork
                <LuHandshake className='ml-4'/>
              </li>
              <div className='h-[20px] w-[20px] absolute bg-[#DC676F]  rounded-[100%] left-[-11px] top-[4.3rem]'></div>
              <li className='text-[#DC676F] text-[23px] flex flex-wrap items-center  '>Adaptability
                <TfiReload className='ml-4' />
              </li>
              <div className='h-[20px] w-[20px] absolute bg-[#DC676F]  rounded-[100%] left-[-11px] top-[7.8rem]'></div>
              <li className='text-[#DC676F] text-[23px] relative flex flex-wrap items-center'> Critical thinking
                <LuBrain className='ml-4' />
              </li>
              <div className='h-[20px] w-[20px] absolute bg-[#DC676F]  rounded-[100%] left-[-11px] top-[11.5rem]'></div>
              <li className='text-[#DC676F] text-[23px] flex flex-wrap items-center'>Willingness to learn
                <LuNotebookPen className='ml-4' />
              </li>
              <div className='h-[20px] w-[20px] absolute bg-[#DC676F] rounded-[100%] left-[-11px] top-[15.2rem]'></div>
              <li className='text-[#DC676F] text-[23px] flex flex-wrap items-center  '>Effective communication
                <RiChatVoiceAiLine className='ml-4' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
