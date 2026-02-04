"use client"
import Image from 'next/image';

import {Clock } from "lucide-react"
import {motion} from "framer-motion"

const RightSide = () => {

  return (
    <div className=''>
        <div className='md:w-70 md:h-105 md:text-sm bg-white inset-shadow-sm mt-8 ml-3.5  mr-3.5 '>
      <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.2}}
      >    
      <Image src="/images/nature.jpg" width={350} height={250} alt="" className=''/>
      </motion.div> 
            <a className='z-50 relative bottom-45 px-1.5 py-1 bg-yellow-400 text-white ml-7.5 text-[12px] font-poppins  '>OPINION</a>
         
            <h2 className='font-bold  space-x-3.5 text-[18px] px-3.5 font-poppins '>Democratic Party politician calls Prabowo 'cardboard general'</h2>
            <div className='flex items-center mt-2.5'>
          <p className='font-bold text-sm flex items-center '><span className='text-gray-600 font-bold text-sm pl-3.5 font-poppins'>by</span >JOHN DOE <span className='text-gray-600 font-bold text-sm flex font-poppins'><Clock className=' p-1.5' /> August 10,2026 </span></p>
            </div>
            <p className=' text-sm text-gray-700 px-3.5 py-2.5'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...</p>
        </div>

        <div className='  md:w-70 md:h-110 bg-white mt-7.5 ml-3.5 mr-3.5'>
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duraition:.2}}
          >
            <Image src="/images/girl.jpg" width={290} height={250} alt=""/>
              </motion.div>
              <a className='z-50 relative bottom-45 px-1 py-1 bg-pink-400 text-white ml-9 text-[12px] font-bold'>LIFESTYLE</a>
             <div className='m-2'>
             <h2 className='font-bold text-xl px-3'>Google tracks location data even when users turn service </h2>
             <div className='flex items-center mt-3.5'>
          <p className='font-bold text-sm flex items-center '><span className='text-gray-600 font-bold text-sm pl-3.5'>by</span >JOHN DOE <span className='font-poppins text-gray-600 font-bold text-sm flex'><Clock className=' p-1.5 font-poppins' /> August 10,2026 </span></p>
            </div>
            <p className=' text-sm text-gray-700 px-3.5 py-2.5 mt-1.5 font-poppins'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...</p>
        </div>
        </div>
    </div>
  )
}

export default RightSide;
