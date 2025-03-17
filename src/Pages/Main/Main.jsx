import React, { useContext, useRef } from 'react'
import { Header } from "../../Layouts/Header/Header.jsx"
import { Skills } from "../Skills/Skills.jsx";
import { Footer } from "../../Layouts/Footer/Footer.jsx";
import { AboutMe } from "../AboutMe/AboutMe.jsx"
import { Projects } from "../Projects/Projects.jsx";
import { ContactMe } from "../ContactMe/ContactMe.jsx";
import { Education } from "../Education/Education.jsx";
import { Experience } from "../Experience/Experience.jsx";
import { StateContext } from '../../components/Context/Context.jsx';

export const Main = () => {
  const { scrollExperience, scrollProjects, scrollSkills, scrollAbout, scrollContact, scrollEducation } = useContext(StateContext);
  return (
    <>
      <div className='bg-[#FFFAFA]'>
        <section id='main' className='min-h-screen mx-auto max-w-[92%] px-4 py-2'>
          <Header />
          <AboutMe refAboutMe ={scrollAbout}/>
          <Skills refSkills={scrollSkills} />
          <Projects refProjects ={scrollProjects} />
          <Experience refExperience={scrollExperience} />
          <Education refEducation={scrollEducation} />
          <ContactMe refContactMe={scrollContact} />
        </section>
        <Footer />
      </div>
    </>
  )
}