import React from 'react'
import { Header } from './Layouts/Header/Header'
import { FaLink } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { IoCodeSlash } from "react-icons/io5";
import { RiPlantLine } from "react-icons/ri";
import { GiBriefcase } from "react-icons/gi";
import { AiFillSmile } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

function App() {
  return (
    <>
      <section id='main' className='min-h-screen mx-auto max-w-[92%] px-4 py-2'>
          <div className='mt-6 flex justify-center items-center '><Header/></div>
          <section id='available' className='flex justify-end'>
            <div className='bg-[#ffe7e6] rounded-2xl m-4 w-[20%] '>
              <p className='text-[#DC676F] text-center text-[20px] p-1'>Available to work</p>
            </div>
          </section>
        <section id='about me'>
          <div className='flex flex-wrap'>
            <div className='bg-[#ffcccb] rounded-[100%] w-[20rem] h-[20rem]'>
            </div>
            <div className="bg-[#ffcccb] rounded-2xl w-[55rem] h-[20rem]">
              <h1>Hola</h1>
              <p>Mundo</p>
            </div>
          </div>
        </section>
        <section id='skills'>
          <div className='grid grid-cols-2 items-center'>
            <div className='col-span-1'>
            <div className='flex items-center justify-center mt-20'>
              <FaLaptopCode className='text-[#DC676F] text-[50px] mr-2 mb-2'/>
              <p className='h1 text-[50px] text-[#DC676F]'>Hard Skills</p>
            </div>
            <div className='text-[#DC676F] m-6 flex flex-wrap gap-24 justify-evenly mt-10'>
              <FaJava className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300'/>
              <IoLogoJavascript className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300'/>
              <SiMysql className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300'/>
              <FaReact className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300'/>
              <RiTailwindCssFill className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300'/>
              <SiTypescript className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300'/>
              <FaNodeJs className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300'/>
              <FaFigma className='w-12 h-12 cursor-pointer hover:scale-125 transition duration-300'/>
            </div>
            </div>
            <div className='bg-amber-50 '>
             <div className='flex items-center justify-center mt-20'>
              <RiPlantLine className='text-[#DC676F] text-[50px]'/>
              <p className='h1 text-[50px] text-[#DC676F]'>Soft Skills</p>
             </div>
            <div className='bg-black h-[192px] w-full mt-10 border-l-2 border-red-400'>
              
            </div>
            </div>
          </div>
        </section>
        <section id='proyects'>
          <div className='bg-[#ffe7e6] rounded-2xl mt-18'>
            <div className='flex flex-wrap'>
            <h1 className='h1 text-[50px] text-[#DC676F] ml-4'>Proyects </h1>
            <IoCodeSlash className='text-[#DC676F] text-[50px] m-2'/>
            </div>
            <div className='flex gap-[20rem] justify-center'>
              <div className=''>
              1st proyect 
              <div className='flex flex-wrap gap-10 text-[#DC676F] text-[40px]'>
                <FaLink/>
                <FaGithub/>
              </div>
              </div>
              <div className=''>
              2nd proyect 
              <div className='flex flex-wrap gap-10 text-[#DC676F] text-[40px]'>
                <FaLink/>
                <FaGithub/>
              </div>
              </div>
            </div>
          </div>
        </section>
        <section id='experience'>
          <div className='grid grid-cols-2 mt-18'>
            <div className='col-span-1'>
              <div className='flex flex-wrap '>
                <GiBriefcase className=' text-[#DC676F] text-[60px]'/>
                <h1 className='h1 text-[#DC676F] text-[50px]'>Experience</h1>
              </div>
                <div className="flex flex-col">
                  <h2>Full Stack Developer</h2>
                  <h3>EDUA (Empresa de desarrollo urbano de Armenia) Armenia's City Hall</h3>
                  <p>2024-2025</p>
                </div>
            </div>
            <div className=' mt-16'>
            <p className='text-[#DC676F] text-[20px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum corrupti cupiditate tempore, optio consequatur, voluptate delectus quisquam quia enim, in architecto nostrum. Quas est, nostrum ipsam iste minima nihil laudantium?</p>
            </div>
          </div>
          <section id='education'>
            <div className='bg-[#ffd4d3] rounded-2xl mt-16 grid grid-cols-2'>
             <div className='col-span-1'>
              <div className='flex flex-wrap'>
              <FaBook className='text-[45px] text-[#DC676F] mt-2.5 ml-4 mr-2'/>
              <h1 className='h1 text-[50px] text-[#DC676F]'>Education</h1>
              </div>
              <div className="flex flex-col">
                  <h2>Tecnico en desarrollo y analisis de software</h2>
                  <h3>SENA</h3>
                  <p>2023-2024</p>
              </div>
             </div>  
              <div className='mt-16'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non sint, excepturi ratione impedit possimus nesciunt odit veritatis voluptatem repudiandae, pariatur commodi, tempora id autem velit sequi quia nostrum. Neque?
              </div>
            </div>
          </section>
          <section id='contactMe'>
          <div className='flex flex-wrap mt-16 '>
              <AiFillSmile className='text-[#DC676F] text-[45px] mt-2.5'/>
              <h1 className='h1 text-[#DC676F] text-[50px] ml-1'>Contact Me</h1>
          </div>
              <div className='flex gap-10 flex-col w-[50%]'>
                <IoIosMail className='text-[#DC676F] text-[45px]'/>
                <FaWhatsapp className='text-[#DC676F] text-[45px]'/>
                <FaLinkedin className='text-[#DC676F] text-[45px]'/>
            </div>
                <div className='flex flex-col w-[50%]'>
                  <p className='text-[#DC676F] text-[40px]'> marimm0927@gmail.com</p>
                  <p className='text-[#DC676F] text-[40px]'> +57 310-876-8617</p>
                  <p className='text-[#DC676F] text-[40px]'> mari morita 123</p>
                </div>
          </section>
        </section>
      </section>
    </>
  )
}

export default App