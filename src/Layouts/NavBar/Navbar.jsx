import React from 'react';
import { BsTranslate } from "react-icons/bs";
import { useNavbarAnimation } from '../../components/NavbarAnimation/NavbarAnimation.js';

export const NavBar = () => {
      const ExperienceButton = () => {
        scrollExperience.current.scrollIntoView({ behavior: "smooth" });
      }
      const SkillsButton = () => {
        scrollProjects.current.scrollIntoView({ behavior: "smooth" });
      }
      const ProjectsButton = () => {
        scrollSkills.current.scrollIntoView({ behavior: "smooth" });
      }
      const aboutMeButton = () => {
        scrollAbout.current.scrollIntoView({ behavior: "smooth" });
      }
        const EducationButton = () => {
        scrollEducation.current.scrollIntoView({ behavior: "smooth" });
      }
      const ContactMeButton = () => {
        scrollContactMe.current.scrollIntoView({ behavior: "smooth" });
      }
        const { navbarAnimationClasses } = useNavbarAnimation();
      

    return (
        <div className='flex items-center justify-center w-[100%] ml-16'>
        <ul className='p-1 px-10 list-none bg-[#ffe7e6] rounded-2xl flex justify-center gap-12 text-[#DC676F] text-[22px]'>
            <li onClick={aboutMeButton} className='cursor-pointer hover:scale-110 transition duration-300 hover:bg-[#DC676F] hover:text-white rounded-2xl px-[5px]'>About Me</li>
            <li onClick={ContactMeButton} className='cursor-pointer hover:scale-110 transition duration-300 hover:bg-[#DC676F] hover:text-white rounded-2xl px-[5px]'>Contatc Me</li>
            <li onClick={ExperienceButton} className='cursor-pointer hover:scale-110 transition duration-300 hover:bg-[#DC676F] hover:text-white rounded-2xl px-[5px]'>Experiencie</li>
            <li onClick={ProjectsButton} className='cursor-pointer hover:scale-110 transition duration-300 hover:bg-[#DC676F] hover:text-white rounded-2xl px-[5px]'>Projects</li>
            <li onClick={SkillsButton} className='cursor-pointer hover:scale-110 transition duration-300 hover:bg-[#DC676F] hover:text-white rounded-2xl px-[5px]'>Skills</li>
            <li onClick={EducationButton} className='cursor-pointer hover:scale-110 transition duration-300 hover:bg-[#DC676F] hover:text-white rounded-2xl px-[5px]'>Education
            </li>
            <li onClick={aboutMeButton} className='cursor-pointer hover:scale-110 transition duration-300 hover:bg-[#DC676F] hover:text-white rounded-2xl p-[6px]'><BsTranslate/></li>
        </ul>
    </div>
    )
  }
  