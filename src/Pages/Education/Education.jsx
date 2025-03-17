import React from 'react'
import { FaBook } from "react-icons/fa";

export const Education = ({refEducation}) => {
  return (
    <section ref={refEducation}>
      <div className='bg-[#ffd4d3] rounded-2xl mt-26 grid grid-cols-2'>
        <div className='col-span-1'>
          <div className='flex flex-wrap mt-4'>
            <FaBook className='text-[45px] text-[#DC676F] mt-3 ml-4 mr-2' />
            <h1 className='h1 text-[50px] text-[#DC676F]'>Education</h1>
          </div>
          <div className='h-min-screen w-min-screen border-l-2 ml-6 border-[#F2B5B9] relative mb-4 mt-4 mr-6'>
            <div className='h-[20px] w-[20px] absolute bg-[#DC676F] rounded-[100%] left-[-11px] top-2'></div>
            <div className='h-[20px] w-[20px] absolute bg-[#DC676F] rounded-[100%] left-[-11px] top-[20.5rem]'></div>
            <div className='h-[20px] w-[20px] absolute bg-[#DC676F] rounded-[100%] left-[-11px] top-[35.5rem]'></div>
            <div className="flex flex-col ml-4 gap-16">
              <div>
                <h2 className='text-[#DC676F] text-[25px]'>Technologist in Software Analysis and Development</h2>
                <h3 className='text-[#E8868D] text-[20px]'>SENA</h3>
                <p className='text-[#776969] text-[18px]'>2023-2024</p>
              </div>
              <div>
                <h2 className='text-[#DC676F] text-[25px] mt-[7.5rem]'>English B1</h2>
                <h3 className='text-[#E8868D] text-[20px]'>American School Way</h3>
                <p className='text-[#776969] text-[18px]'>2023-2025</p>
              </div>
              <div>
                <h2 className='text-[#DC676F] text-[25px] mt-[5.2rem]'>Technical High School Diploma in Software Analysis and Development"</h2>
                <h3 className='text-[#E8868D] text-[20px]'>SENA</h3>
                <p className='text-[#776969] text-[18px]'>2021-2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-26 mb-5 flex flex-col gap-18 mr-4'>
          <p className='text-[#DC676F] text-[20px] mr-4 text-justify'> I started my technology in software development in 2023, where I reaffirmed my passion and enthusiasm for programming. In our final project, we developed a management system in which I took on the roles of database developer and Scrum Master. Through this experience, I discovered my skills in leadership and programming logic. This program has been a key motivation for me to continue growing as a professional and advancing in the world of software development.</p>
          <p className='text-[#DC676F] text-[20px] mr-4 text-justify'>English has always been one of my passions, and in 2023, I decided to take the step of enrolling in an English academy to improve my skills. Currently, I am training at the B1 level, with the goal of reaching C1. My objective is to master the language to enhance my software development skills and expand my job opportunities.</p>
          <p className='text-[#DC676F] text-[20px] mr-4 text-justify'>In 2021, I was in the tenth grade and I had the opportunity to access the technical bachelor's degree in Software Analysis and Development. It was there where my interest in programming was born, a passion that grew rapidly. This experience marked the beginning of my career and consolidated my taste for software development.</p>
        </div>
      </div>
    </section>)
}
