import React from 'react'
import { NavLink } from 'react-router-dom'
// import {N_logo} from '../assets/images/index'

const Navbar = () => {
  return (
    <header className='header'>
    <NavLink to ="/" className='w-14 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'> 
        <p className='blue-gradient_text'>N_N</p>
        {/* <img src={N_logo} alt="N_logo" /> */}
    </NavLink>
    <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='about'className={({isActive})=> isActive? 'text-blue-500':'text-black'}>
            About
        </NavLink>
        <NavLink to='projects'className={({isActive})=> isActive? 'text-blue-500':'text-black'}>
            Projects
        </NavLink>
       
    </nav>
    </header>
  )
}

export default Navbar