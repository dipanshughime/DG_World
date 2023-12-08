import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='header'>
    <NavLink to='/' className="w-40 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className='blue-gradient_text text-xl'>Dipanhu</p>
    {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
    </NavLink>
    <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
        About
      </NavLink>
      <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
        Projects
      </NavLink>
    </nav>
  </header>
  )
}

export default Navbar