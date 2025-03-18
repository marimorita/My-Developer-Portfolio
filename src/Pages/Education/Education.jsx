import React from 'react'
import { FaBook } from "react-icons/fa";
import { educationObj } from "../../Objects/Objects";

export const Education = ({ refEducation }) => {
  return (
    <section ref={refEducation}>
      <div className='bg-[#ffd4d3] rounded-2xl pb-[6rem] '>
        <div className='flex flex-wrap mt-4'>
          <FaBook className='text-[45px] text-[#DC676F] mt-3 ml-4 mr-2' />
          <h1 className='h1 text-[50px] text-[#DC676F]'>Education</h1>
        </div>
        <div className="h-min-screen w-min-screen border-l-2 ml-6 border-[#F2B5B9] mt-4 flex flex-col gap-[8rem] ">
          {educationObj.map((objectData) => (
            <div className='relative flex'>
              <div className="h-[20px] w-[20px] absolute bg-[#DC676F] rounded-full left-[-10px] top-6 "></div>
              <div className="ml-4 mr-20 mt-4">
                <div className='w-[25rem]'>
                  <h2 className="text-[#DC676F] text-[25px]">{objectData.qualification}</h2>
                  <h3 className="text-[#FF949B] text-[20px]">{objectData.institution}</h3>
                  <p className="text-[#776969] text-[18px]">{objectData.time}</p>
                </div>
              </div>
              <div >
                <div className="flex mr-10">
                  <p className="text-[#DC676F] text-[20px] text-justify mt-4">{objectData.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
