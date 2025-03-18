import React from 'react'

export const ListSkills = ({listName, icon}) => {
    return (
        <>
            <li className='text-[#DC676F] text-[23px] relative flex flex-wrap items-center'> {listName}
                <div className='h-[20px] w-[20px] absolute bg-[#DC676F] rounded-[100%] left-[-27px]'></div>
                <div className='ml-4'>{icon}</div> 
            </li>
        </>
    )
}