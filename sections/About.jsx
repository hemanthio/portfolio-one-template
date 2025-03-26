import React from 'react'
import profile from '../src/assets/profile.svg'
import checkmark from '../src/assets/checkmark.svg'

const About = () => {
  return (
    <div className='relative w-full aspect-square rounded-[18px] bg-[#0A0A0A]'>
<img className='object-cover w-full h-full rounded-[18px]' src={profile} alt="Profile" color='white' />

<div className='details flex flex-col gap-1 absolute bottom-6 right-4'>
<div className='flex gap-1 items-center justify-center'>
  <h1 className='text-xl text-white'>Aryawebly</h1>
  <img src={checkmark} alt="checkmark" />
  </div>
  
  {/* <div className='flex '>
    <p className='text-[#A3A3A3]'>aryawebly</p>
  
  </div> */}

  <h2 className='px-3 text-white py-[6px] border rounded-full border-white dark:border-[#C9FE6E] inline-block'>Creative Developer</h2>
 
</div>

    </div>
  )
}

export default About