import React from 'react'
import { NavBar } from '../NavBar/Navbar'

export const Header = () => {
  return (
    <div className='mx-auto max-w-[92%] px-4 py-2 bg-[#FFFAFA]'>
      <div className='mt-6 flex justify-center items-center '><NavBar/></div>
      <div className='flex justify-end'>
        <div className='rounded-2xl mb-18 '>
          <button className="z-10 border border-[#FFE7E7] relative top-10 font-medium text-[18px]  cursor-pointer text-center rounded-full px-6 py-2 overflow-hidden transition-all duration-300  bg-transparent group hover:border-[#FFE7E7] hover:text-white text-[#DC676F]">
            <p className='px-2'>Available to work</p>
            <span className="absolute top-0 left-[-10%] w-0 h-full bg-[#DC676F] skew-x-[-20] opacity-100 z-[-12] transition-all duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] shadow-[2px_0px_14px_rgba(0,0,0,0.6)] content-[''] group-hover:w-[116%] " />
            <span className="absolute top-0 left-[-10%] w-0 h-full bg-[#FFE7E7] skew-x-[-20] opacity-0 z-[-15] transition-all duration-[400ms] ease-[cubic-bezier(.2,.95,.57,.99)] shadow-[2px_0px_14px_rgba(0,0,0,0.6)] content-[''] group-hover:w-[120%] group-hover:opacity-100 " />
          </button>
        </div>
      </div>
    </div>
  )
}
