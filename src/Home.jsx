import React from 'react'
import Navbar1 from './components/navbar1/Navbar1'
import Navbar2 from './components/navbar2/navbar2'
import Part1 from './components/part1/Part1'

export default function Home() {
  return (
    <div className='h-screen'>
        <Navbar1/>
        <Navbar2/>
        <Part1/>
    </div>
  )
}
