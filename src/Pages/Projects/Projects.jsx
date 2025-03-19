import React from 'react'
import ds from '../../assets/Images/DS.svg'
import edua from '../../assets/Images/EduaAt.svg'
import { Card } from '../../components/Card/Card';
import { IoCodeSlash } from "react-icons/io5";

export const Projects = ({ refProjects }) => {
  return (
    <section ref={refProjects}>
      <div className='bg-[#faecec] rounded-2xl mt-26 h-[28rem]'>
        <div className='flex flex-wrap'>
          <h1 className='h1 text-[50px] text-[#DC676F] ml-4'>Projects </h1>
          <IoCodeSlash className='text-[#DC676F] text-[50px] m-2' />
        </div>
        <div className='flex flex-wrap gap-[5rem] justify-center mt-6 '>
          <Card imgApp={ds} h1={'DataSport'} text={'DataSport is the final project of my technology. Is a project to managmente better gyms and spaces sports'} linkRepo={'https://github.com/marimorita/DataSportFront.git'} linkDemo={'https://datasporrt.vercel.app/'} />
          <Card imgApp={edua} h1={'EDUA AT'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi atque saepe maxime nihil, labore vitae cumque ad dolore quo iusto praesentium, id ipsam odit rem error fugiat. Similique, delectus?'} linkRepo={'https://github.com/marimorita/EDUA'} linkDemo={'https://eduaalcaldia.netlify.app/'}/>
        </div>
      </div>
    </section>
  )
}