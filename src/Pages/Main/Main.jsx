import React, { useRef }  from 'react'
import { Header } from "../../Layouts/Header/Header.jsx"
import { Skills } from "../Skills/Skills.jsx";
import { Footer } from "../../Layouts/Footer/Footer.jsx";
import { AboutMe } from "../AboutMe/AboutMe.jsx"
import { Projects } from "../Projects/Projects.jsx";
import { ContactMe } from "../ContactMe/ContactMe.jsx";
import { Education } from "../Education/Education.jsx";
import { Experience } from "../Experience/Experience.jsx";
import { useLocation } from 'wouter';
import { useNavbarAnimation } from '../../components/NavbarAnimation/NavbarAnimation.js';

export const Main = () => {
  const scrollExperience = useRef(null);
  const scrollProjects = useRef(null);
  const scrollSkills = useRef(null);
  const scrollAbout = useRef(null);
  const scrollContact = useRef(null);
  const scrollEducation = useRef(null);
  const { navbarAnimationClasses } = useNavbarAnimation();

  return (
    <>
    <div className='bg-[#FFFAFA]'>
      <section id='main' className='min-h-screen mx-auto max-w-[92%] px-4 py-2'>
        <Header />
        <AboutMe ref={scrollAbout} className={navbarAnimationClasses()}/>
        <Skills ref={scrollSkills}/>
        <Projects ref={scrollProjects}/>
        <Experience ref={scrollExperience}/>
        <Education ref={scrollEducation}/>
        <ContactMe ref={scrollContact}/>
      </section>
      <Footer />
    </div>
    </>
  )
}