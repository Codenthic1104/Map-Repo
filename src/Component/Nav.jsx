import React from 'react'
import { NavLink } from 'react-router-dom'
import pointer from "../Pictures/pointer.png"
function Nav() {
  return (
    <>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-md shadow-gray-300">
    <NavLink to={"/"} className="flex justify-center title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <div>
      <img src={pointer} alt="" className='w-[30px] h-[30px]' />
      </div>
      <div>
      <span className="ml-3 text-l"><b>Sample Demonstration</b></span>
      </div>
    </NavLink>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 gap-3	flex flex-wrap items-center text-base justify-center">
      
    <NavLink to={"/"} className="mr-5 hover:text-gray-900">Home</NavLink>
      <NavLink to={"/fullmap"} className="mr-5 hover:text-gray-900">See Full Map</NavLink>
    </nav>
   
  </div>
</header>
    </>
  )
}

export {Nav}