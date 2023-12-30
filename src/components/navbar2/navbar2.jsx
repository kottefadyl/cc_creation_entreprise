import React from 'react'
import image1 from "./images.jpg";
import './navbar2.css'

export default function Navbar2() {
  return (
    <div className='bg-red-700 py-12'>
      <div className='px-44 flex w-auto justify-around items-center'>
        <div className=''>
          <h2 className='text-5xl font-medium text-gray-100 font-mono py-1'>All BOOKS</h2>
          <p className='text-lg text-gray-200'>
            your complete collection of book in any repository you can find them here and
            enjoy reading time at home or in our libraries by paying a premium subscription
          </p>
        </div>
        <div>
          <div className='flex rounded-md border-black navbar2Card  p-4 shadow-2xl'>
            <div><img src={image1} className='h-28 w-56' alt="" /></div>
            <div className='ml-4 text-zinc-200 '>
              <p className=''>toptal matches you whith top developers who are guaranteed to succeed.</p>
              <h3 className='text-lg font-semibold'>ads via carbon</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
