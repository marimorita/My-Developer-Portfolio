import React from 'react'
import { GiBriefcase } from "react-icons/gi";

export const Experience = () => {
  return (
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
  )
}
