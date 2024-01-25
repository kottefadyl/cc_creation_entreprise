import Navbar1 from './components/navbar1/Navbar1'
import Navbar2 from './components/navbar2/navbar2'
import Part1 from './components/part1/Part1'
import Pied from './components/pied/Pied'
import Cartbook from './components/cartbook/cartbook'
import React from 'react';
import { useEffect } from 'react';
import Part2 from './components/part2/Part2'
import { useNavigate } from 'react-router-dom'; 
export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) {
      navigate('/');
    }
  }, []);
  
  return (
    <div className='h-screen'>
      <Navbar1 />
      <Navbar2 />
      <Part1 />
      <Part2 />
      <Pied />
      <Cartbook />
    </div>
  )
}
