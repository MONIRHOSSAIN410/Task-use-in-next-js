"use client"
import Image from 'next/image';
import React from 'react'
import {Clock} from 'lucide-react'
import  CarouselSize  from "./CarouselSize"
import {motion} from 'framer-motion'
const Section = () => {
  return (
    <div className=''>
      <CarouselSize/>
    <div className='mt-5 ml-1 '>
      <div className='md:w-[650]  mr-3.5 h-140 bg-white mt-3.5'>
<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:.8}}
>
        <Image src="/images/police.jpg" width={800} height={650} alt=""/>
        </motion.div>
        <div className='bg-white md:w-[610] mr-3.5 md:text-xl inset-shadow-xs z-50 relative bottom-19 ml-5  '>
          <div className='p-6'>
          <span className='text-sm text-gray-400'>POLITICS</span>
         <h1 className='font-bold text-2xl'>'Election was rigged' says opposition,police confirm three dead </h1>
         <p className='font-bold text-sm md:flex md:items-center '><span className='text-gray-300 font-bold text-sm '>by</span >JOHN DOE <span className='text-gray-400 py-4.5 font-bold text-sm pl-1.5'> and 1 others </span> <span className='text-gray-300 font-bold text-sm md:flex'><Clock className=' p-1.5' /> August 10,2026 </span></p>
      <p className='mt-3.5 text-gray-400 text-sm'>When we get out of the glass bottle of our ego and when we escape like the squirrels in the...</p>
        <button className='mt-6 text-sm text-gray-400 border border-gray-200 px-3 py-1.5'>READ MORE</button>
        </div>
        </div>
        
        </div>
        
      <div className='flex flex-col md:flex-row '>
        <div className='mt-8 '>
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:.2}}
          
          >
        <Image src="/images/sea.jpg" width={380} height={250} alt=""/>
      </motion.div>
      </div>
      <div className='mt-8 mr-4.5 ml-6'>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:.2}}
        >
        <Image src="/images/book.jpg" width={380} height={250} alt=""/>
      </motion.div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Section;