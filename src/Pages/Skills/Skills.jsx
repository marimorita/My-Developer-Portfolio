import React from 'react'
import { TfiReload } from "react-icons/tfi";
import { ListSkills } from '../../components/ListSkills/ListSkills';
import { FaLaptopCode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiTypescript } from "react-icons/si";
import { FaFigma, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { LuHandshake, LuNotebookPen, LuBrain } from "react-icons/lu";
import { RiTailwindCssFill, RiPlantLine, RiChatVoiceAiLine } from "react-icons/ri";

export const Skills = ({ refSkills }) => {
  return (
    <section ref={refSkills}>
      <div className='grid grid-cols-2 items-center mt-10'>
        <div className='col-span-1'>
          <div className='flex items-center justify-center '>
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
        <div>
          <div className='flex items-center justify-center mt-20'>
            <RiPlantLine className='text-[#DC676F] text-[50px] mr-2 mb-2' />
            <p className='h1 text-[50px] text-[#DC676F]'>Soft  Skills</p>
          </div>
          <div className='h-min-screen w-min-screen mt-10 border-l-2 ml-28 border-[#F2B5B9] relative'>
            <ul className='m-4 gap-6 flex flex-col'>
              <ListSkills icon={<LuHandshake />} listName={'TeamWork'} />
              <ListSkills icon={<TfiReload />} listName={'Adaptability'} />
              <ListSkills icon={<LuBrain />} listName={'Critical thinking'} />
              <ListSkills icon={<LuNotebookPen />} listName={'Willingness to learn'} />
              <ListSkills icon={<RiChatVoiceAiLine />} listName={'Effective communication'} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}