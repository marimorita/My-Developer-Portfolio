import React from 'react'
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const Card = ({ imgApp }) => {
    return (
        <div className='w-[33rem] h-[16rem] rounded-2xl'>
            <div className='w-full h-full relative '>
                <img src={imgApp} alt="proyectImg" className='w-full h-full border-[1px] rounded-[40px] object-cover shadow-2xl' />
                <div className="w-full h-full absolute top-0 opacity-0 hover:opacity-100  transition duration-500">
                    <div className='w-full h-full flex justify-center flex-col items-center bg-[#00000081]  rounded-[40px] '>
                    <h1 className='text-amber-50 text-[35px] h1 font-extrabold '>
                        DataSport
                    </h1>
                    <p className='mx-10 font-semibold text-amber-50 text-[18px] text-justify
                    '>
                        DataSport is the final project of my technology. Is a project to managmente better gyms and spaces sports
                    </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-12 justify-center mt-[2rem] text-[#DC676F] text-[40px]'>
                <FaLink className='hover:scale-125 transition duration-300 cursor-pointer' />
                <FaGithub className='hover:scale-125 transition duration-300 cursor-pointer' />
            </div>
        </div>
    )
}