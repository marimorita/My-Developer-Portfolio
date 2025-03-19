import React, { useContext } from 'react';
import { BsTranslate } from "react-icons/bs";
import { ButtonsNavbar } from '../../components/ButtonsNavbar/ButtonsNavbar';
import { StateContext } from '../../components/Context/Context';

export const NavBar = () => {
  const { scrollExperience, scrollProjects, scrollSkills, scrollAbout, scrollContact, scrollEducation } = useContext(StateContext);

  const ExperienceButton = () => {
    scrollExperience.current.scrollIntoView({ behavior: "smooth" });
  }
  const SkillsButton = () => {
    scrollSkills.current.scrollIntoView({ behavior: "smooth" });
  }
  const ProjectsButton = () => {
    scrollProjects.current.scrollIntoView({ behavior: "smooth" });
  }
  const aboutMeButton = () => {
    scrollAbout.current.scrollIntoView({ behavior: "smooth" }); 
  }
  const EducationButton = () => {
    scrollEducation.current.scrollIntoView({ behavior: "smooth" });
  }
  const ContactMeButton = () => {
    scrollContact.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className='flex items-center justify-center w-[100%] ml-16'>
      <ul className='p-2 px-10 list-none bg-[#ffe7e6] rounded-2xl flex justify-center gap-12 text-[#DC676F] text-[22px] z-50 shadow-2xs'>
        <ButtonsNavbar clickButton={aboutMeButton} buttonName={'About Me'} />
        <ButtonsNavbar clickButton={SkillsButton} buttonName={'Skills'} />
        <ButtonsNavbar clickButton={ProjectsButton} buttonName={'Projects'} />
        <ButtonsNavbar clickButton={ExperienceButton} buttonName={'Experience'} />
        <ButtonsNavbar clickButton={EducationButton} buttonName={'Education'} />
        <ButtonsNavbar clickButton={ContactMeButton} buttonName={'Contact Me'} />
        <ButtonsNavbar classButton={'hover: p-[6px]  mt-1'} buttonName={<BsTranslate/>}/>
      </ul>
    </div>
  )
}