import React, { useRef, createContext } from 'react'
export const StateContext = createContext();

export const StateProvider = ({children}) => {
    const scrollExperience = useRef(null);
    const scrollEducation = useRef(null);
    const scrollProjects = useRef(null);
    const scrollContact = useRef(null);
    const scrollSkills = useRef(null);
    const scrollAbout = useRef(null);
  return (  
    <StateContext.Provider value={{scrollExperience, scrollProjects, scrollSkills, scrollAbout, scrollContact, scrollEducation}}>
        {children}
    </StateContext.Provider>
  )
}