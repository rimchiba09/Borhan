import React from 'react'
import {TypewriterEffectDemo} from '@/components/TypewriterEffectDemo'
import Navbar from '@/components/Navbar';
import { GridBackgroundDemo } from '@/components/ui/Background';
const Home = () => {
  return (
    <>
      <div className='w-full h-screen'>
          <Navbar/>
          <TypewriterEffectDemo />
        
        </div>   
    </>
  )
}

export default Home;