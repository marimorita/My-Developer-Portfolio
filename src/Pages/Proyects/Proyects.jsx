import React from 'react'
import { Card } from '../../components/Card/Card';
import { IoCodeSlash } from "react-icons/io5";
import ds from '../../assets/Images/DS.svg'
import edua from '../../assets/Images/EduaAt.svg'

export const Proyects = () => {
  return (
    <section id='proyects'>
      <div className='bg-[#ffe7e6] rounded-2xl mt-26 h-[28rem]'>
        <div className='flex flex-wrap'>
          <h1 className='h1 text-[50px] text-[#DC676F] ml-4'>Proyects </h1>
          <IoCodeSlash className='text-[#DC676F] text-[50px] m-2' />
        </div>
        <div className='flex flex-wrap gap-[5rem] justify-center mt-6 '>
          <Card imgApp={ds} />
          <Card imgApp={edua}/>
        </div>
      </div>
    </section>
  )
}
