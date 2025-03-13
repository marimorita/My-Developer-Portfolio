import React from 'react'
import { NavBar } from "../../Layouts/NavBar/Navbar.jsx"
import { Header } from "../../Layouts/Header/Header.jsx"
import { Skills } from "../Skills/Skills.jsx";
import { Footer } from "../../Layouts/Footer/Footer.jsx";
import { AboutMe } from "../AboutMe/AboutMe.jsx"
import { Proyects } from "../Proyects/Proyects.jsx";
import { ContactMe } from "../ContactMe/ContactMe.jsx";
import { Education } from "../Education/Education.jsx";
import { Experience } from "../Experience/Experience.jsx";

export const Main = () => {
  return (
    <>
      <section id='main' className='min-h-screen mx-auto max-w-[92%] px-4 py-2'>
        <Header />
        <AboutMe />
        <Skills />
        <Proyects />
        <Experience />
        <Education />
        <ContactMe />
      </section>
      <Footer />
    </>
  )
}