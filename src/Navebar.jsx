import React from 'react'
import logo from './Image/LOGO.png'

const Navebar = () => {
  return (
     <nav className=" shadow-lg  bg-white">
      <div className=" flex items-center justify-between px-18 py-4">
        {/* Logo */}
        <div className="flex w-[153px]  ">
          <img src={logo}  />
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 ">
          <a href="#" className="text-[#707070] text-[20px] font-semibold">
            Doctors
          </a>
          <a href="#" className="text-[#c0c0c0] text-[20px]  font-semibold">
            Treatment Centers
          </a>
          <div className=' flex justify-center items-center gap-3 -mr-4 font-medium'>
          <a href="#" className="text-[#666767] text-[13px]">
            Sign Up
          </a>
          <button className="bg-indigo-900 text-white text-[13px] px-[16px] py-1 cursor-pointer rounded-full">
            Sign In
          </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navebar
