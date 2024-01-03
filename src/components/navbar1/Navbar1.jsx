import React from 'react'
import { BsCaretDownFill,BsSearch,BsStar } from "react-icons/bs";
import './navbar1.css'

function Navbar1() {
  return (
    <nav className='p-3 text-gray-500 '>
      <div className='flex 2xl:justify-between lg:justify-between md:mx-1 3xl:justify-between  3xl:mx-40 sm:mx-1'>
        <ul className='flex'>
          <li className='font-bold text-lg my-auto mr-4'>Command  </li>
          <li className='mx-5 sm:hidden flex'>Theme<BsCaretDownFill className='text-sm my-auto' /></li>
          <li className='mx-5 sm:hidden flex'>Ressources<BsCaretDownFill className='text-sm my-auto' /></li>
          <li className='mx-5 sm:hidden flex'>Articles<BsCaretDownFill className='text-sm my-auto' /></li>
          <li className='mx-5 sm:hidden flex'>Contact<BsCaretDownFill className='text-sm my-auto' /></li>
        </ul>
        <ul>
          <li className='flex'><BsStar className='my-auto mr-1 sm:hidden' /> <span className='sm:hidden'>premium</span> <BsCaretDownFill className='text-sm my-auto sm:hidden' /><BsSearch className='ml-3 my-auto' /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar1
