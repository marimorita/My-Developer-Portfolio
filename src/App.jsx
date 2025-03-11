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
import { Footer } from './Layouts/Footer/Footer';
import mari from './assets/m.png'

function App() {
  return (
    <>
      <section id='main' className='min-h-screen mx-auto max-w-[92%] px-4 py-2'>
        <div className='mt-6 flex justify-center items-center '><Header /></div>
        <section id='available' className='flex justify-end'>
          <div className='bg-[#ffe7e6] rounded-2xl mt-10 mb-10 w-[20%] '>
            <p className='text-[#DC676F] text-center text-[20px] p-1'>Available to work</p>
          </div>
        </section>
        <section id='about me'>
          <div className='flex relative'>
            <div className='absolute'>
            <div className='bg-[#ffcccb] rounded-[100%] w-[20rem] h-[20rem] z-50 relative shadow-[#DC676F] drop-shadow-lg'>
            <img src={mari} alt="Mariana" className='absolute left-[-12px] w-[340px] max-w-none rounded-b-full top-[-8.6rem] object-cover object-bottom'/>
            </div>
            </div>
            <div className="ml-[207px] bg-[#ffcccb] rounded-2xl w-[65rem] h-[20rem] px-4 rounded-r-[20px] relative">
            <div className='absolute left-[-355px] w-[237px] h-[320px]  bg-white rounded-r-full ml-[18rem]'> </div>
              <h1 className='h1 text-[#DC676F] text-[60px] ml-[10rem]'>Hi, I'm Mariana </h1>
              <p className='text-[#DC676F] text-[23px] ml-[11rem]'>I'm a Full Stack Developer, 19 years old, from Quindío, Colombia. I started my software career at 16 with a technician degree in analysis and software development. Later, I pursued a technology degree in the same field, and currently, I'm studying Software Engineering. I'm a natural leader, and I love learning and creating. As a passionate developer, I'm always looking for opportunities to grow, collaborate, and build impactful applications.</p>
            </div>
          </div>
        </section>
        <section id='skills'>
          <div className='grid grid-cols-2 items-center mt-18'>
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
                  <li className='text-[#DC676F] text-[23px] relative'>TeamWork</li>
                  <div className='h-[20px] w-[20px] absolute bg-[#DC676F]  rounded-[100%] left-[-11px] top-[4.3rem]'></div>
                  <li className='text-[#DC676F] text-[23px] relative'>Critical thinking</li>
                  <div className='h-[20px] w-[20px] absolute bg-[#DC676F]  rounded-[100%] left-[-11px] top-[7.8rem]'></div>
                  <li className='text-[#DC676F] text-[23px] '>Effective communication</li>
                  <div className='h-[20px] w-[20px] absolute bg-[#DC676F]  rounded-[100%] left-[-11px] top-[11.5rem]'></div>
                  <li className='text-[#DC676F] text-[23px]'>Adaptability </li>
                  <div className='h-[20px] w-[20px] absolute bg-[#DC676F] rounded-[100%] left-[-11px] top-[15.2rem]'></div>
                  <li className='text-[#DC676F] text-[23px]'>Willingness to learn</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
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
        <section id='experience'>
          <div className='grid grid-cols-2 mt-26'>
            <div className='col-span-1'>
              <div className='flex flex-wrap '>
                <GiBriefcase className=' text-[#DC676F] text-[60px]' />
                <h1 className='h1 text-[#DC676F] text-[50px]'>Experience</h1>
              </div>
              <div className="flex flex-col">
                <div className='h-min-screen w-min-screen border-l-2 border-[#F2B5B9] relative'>
                <div className='h-[20px] w-[20px] absolute bg-[#DC676F] rounded-[100%] left-[-11px] top-2'></div>
                <div className='ml-4'>
                  <h2 className='text-[#DC676F] text-[25px]'>Full Stack Developer</h2>
                  <h3 className='text-[#FF949B] text-[20px]'>EDUA (Empresa de desarrollo urbano de Armenia) Armenia's City Hall</h3>
                  <p className='text-[#776969] text-[18px]'> 2024-2025</p>
                </div>
                </div>
              </div>
            </div>
            <div className=' mt-18'>
              <p className='text-[#DC676F] text-[20px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum corrupti cupiditate tempore, optio consequatur, voluptate delectus quisquam quia enim, in architecto nostrum. Quas est, nostrum ipsam iste minima nihil laudantium?</p>
            </div>
          </div>
        </section>
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
                  <h2 className='text-[#DC676F] text-[25px]'>Technical High School Diploma in Software Analysis and Development"</h2>
                  <h3 className='text-[#E8868D] text-[20px]'>SENA</h3>
                  <p className='text-[#776969] text-[18px]'>2021-2022</p>
                  </div>
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
                </div>
                </div>
              </div>
              <div className='mt-26 mb-5 flex flex-col gap-18 mx-4'>
                <p className='text-[#DC676F] text-[20px] mr-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non sint, excepturi ratione impedit possimus nesciunt odit veritatis voluptatem repudiandae, pariatur commodi, tempora id autem velit sequi quia nostrum. Neque? </p>
                <p className='text-[#DC676F] text-[20px] mr-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non sint, excepturi ratione impedit possimus nesciunt odit veritatis voluptatem repudiandae, pariatur commodi, tempora id autem velit sequi quia nostrum. Neque? </p>
                <p className='text-[#DC676F] text-[20px] mr-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non sint, excepturi ratione impedit possimus nesciunt odit veritatis voluptatem repudiandae, pariatur commodi, tempora id autem velit sequi quia nostrum. Neque? </p>
              </div>
            </div>
          </section>
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
          </section>
      </section>
      <Footer/>
    </>
  )
}

export default App