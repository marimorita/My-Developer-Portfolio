import React from 'react'

export const ButtonsNavbar = ({clickButton, buttonName, classButton}) => {
    return (
        <>
            <li onClick={clickButton} className={`${classButton}cursor-pointer hover:scale-110 transition duration-300 hover:bg-[#DC676F] hover:text-white rounded-2xl px-[5px]`}>{buttonName}</li>
        </>
    )
}
