import React from 'react'
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


export const Card = ({ imgApp }) => {
    return (
        <div className='border-amber-600 border-4 w-[33rem] h-[16rem] rounded-2xl'>
            <div className="w-full h-full object-fill">
                <div className="">
                    <img src={imgApp} alt="proyectImg" className='rounded-2xl object-fill'/>
                </div>
                <div className="">
                </div>
            </div>
            <div className='flex flex-wrap gap-12 justify-center mt-[2rem] text-[#DC676F] text-[40px]'>
                <FaLink />
                <FaGithub />
            </div>
        </div>
    )
}
