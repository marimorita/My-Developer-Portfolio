import React from "react";
import { GiBriefcase } from "react-icons/gi";
import { experienceObj } from "../../Objects/Objects";

export const Experience = ({ refExperience }) => {
  return (
    <section ref={refExperience}>
      <div className="mt-18 mb-[8rem]">
        <div className='flex flex-wrap'>
          <GiBriefcase className='text-[55px] text-[#DC676F] mt-3 ml-4 mr-2' />
          <h1 className='h1 text-[50px] text-[#DC676F]'>Experience</h1>
        </div>
        <div className="border-l-2 ml-6 border-[#F2B5B9] mt-4 flex flex-col gap-[8rem]">
          {experienceObj.map((objectData) => (
            <div className='relative flex'>
              <div className="h-[20px] w-[20px] absolute bg-[#DC676F] rounded-full left-[-10px] top-6 "></div>
              <div className="ml-4 mr-20 mt-4">
                <div className='w-[25rem]'>
                  <h2 className="text-[#DC676F] text-[25px]">{objectData.role}</h2>
                  <h3 className="text-[#FF949B] text-[20px]">{objectData.place}</h3>
                  <p className="text-[#776969] text-[18px]">{objectData.date}</p>
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
  );
};