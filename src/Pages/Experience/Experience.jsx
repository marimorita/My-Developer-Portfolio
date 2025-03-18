import React from "react";
import { GiBriefcase } from "react-icons/gi";
import { experienceObj } from "../../Objects/Objects";

export const Experience = ({ refExperience }) => {
  return (
    <section ref={refExperience}>
      <div className="grid grid-cols-2 gap-8 mt-26">
        <div className="col-span-1">
          <div className="flex flex-wrap">
            <GiBriefcase className="text-[#DC676F] text-[60px]" />
            <h1 className="h1 text-[#DC676F] text-[50px]">Experience</h1>
          </div>
          <div className="border-l-2 border-[#F2B5B9] pl-4">
            {experienceObj.map((objectData) => (
              <div className="mb-38 ">
                <div className='relative'>
                  <div className="h-[20px] w-[20px] absolute bg-[#DC676F] rounded-full left-[-27px] top-2 "></div>
                  <h2 className="text-[#DC676F] text-[25px]">{objectData.role}</h2>
                </div>
                <h3 className="text-[#FF949B] text-[20px]">{objectData.place}</h3>
                <p className="text-[#776969] text-[18px]">{objectData.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          {experienceObj.map((objectData) => (
            <div className="flex mt-[4rem]">
              <p className="text-[#DC676F] text-[20px] text-justify mt-4">
                {objectData.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
