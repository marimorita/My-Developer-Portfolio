import React from 'react'
import { Card } from '../../components/Card/Card';
import { IoCodeSlash } from "react-icons/io5";
import ds from '../../assets/Images/DS.svg'
import edua from '../../assets/Images/EduaAt.svg'

export const Projects = () => {
  return (
    <section id='projects'>
      <div className='bg-[#faecec] rounded-2xl mt-26 h-[28rem]'>
        <div className='flex flex-wrap'>
          <h1 className='h1 text-[50px] text-[#DC676F] ml-4'>Projects </h1>
          <IoCodeSlash className='text-[#DC676F] text-[50px] m-2' />
        </div>
        <div className='flex flex-wrap gap-[5rem] justify-center mt-6 '>
          <Card imgApp={ds} h1={'EDUA AT'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi atque saepe maxime nihil, labore vitae cumque ad dolore quo iusto praesentium, id ipsam odit rem error fugiat. Similique, delectus?'}/>
          <Card imgApp={edua} h1={'DataSport'} text={'                        DataSport is the final project of my technology. Is a project to managmente better gyms and spaces sports'}/>
        </div>
      </div>
    </section>
  )
}
