import React from 'react'
import mari from "../../assets/Images/m.png";

export const AboutMe = ({refAboutMe}) => {
    return (
        <section ref={refAboutMe}>
            <div className='flex relative pt-18'>
                <div className='absolute'>
                    <div className='rounded-[100%] w-[20rem] h-[20rem] z-10 relative shadow-[#DC676F] drop-shadow-lg bg-[#ffcccb] hover:scale-90 transition duration-300'>
                        <img src={mari} alt="Mariana" className='absolute left-[-12px] w-[340px] max-w-none rounded-b-full top-[-1.9rem] object-cover object-bottom' />
                    </div>
                </div>
                <div className="ml-[207px] bg-[#ffcccb] rounded-2xl w-[65rem] h-[20rem] px-4 rounded-r-[20px] relative">
                    <div className='absolute left-[-355px] w-[237px] h-[320px]  bg-[#FFFAFA] rounded-r-full ml-[18rem]'> </div>
                    <h1 className='h1 text-[#DC676F] text-[60px] ml-[10rem]'>Hi, I'm Mariana </h1>
                    <p className='text-[#DC676F] text-[23px] ml-[11rem]'>I'm a Full Stack Developer, 19 years old, from Quindío, Colombia. I started my software career at 16 with a technician degree in analysis and software development. Later, I pursued a technology degree in the same field, and currently, I'm studying Software Engineering. I'm a natural leader, and I love learning and creating. As a passionate developer, I'm always looking for opportunities to grow, collaborate, and build impactful applications.</p>
                </div>
            </div>
        </section>)
}
