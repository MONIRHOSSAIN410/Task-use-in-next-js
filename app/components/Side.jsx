'use client'
import React from 'react'
import Image from 'next/image';
import SideArticale from "./SideArticale";
import {motion, scale} from 'framer-motion'

const Side = () => {
  
    return (
        <div>
        <div className='md:w-83 md:h-155 h-170 mt-8 ml-4.5 mr-3.5 shadow-amber-50   inset-shadow-sm  bg-white'>
            <div className='ml-3.5 mr-1'>
                <div className='border-b-2 mb-5.5 border-gray-200'>
                <h1 className='font-bold text-xl py-2'>The Latest</h1>
                </div>
                <div className=''>
              <div className='flex items-center mb-5'>
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:.8}}
         
        
         >
            
                <Image src="/images/demo-25-750x375.jpg" width={330} height={20} alt="" className='' />
      
                   
            
       </motion.div>
 <p className=' font-poppins font-bold cursor-pointer ml-3 '>Unconventional Workouts That Torch Fat And Sculpt Muscle</p>

       </div>
                <div className='flex items-center mb-5'>
<motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:.8}}
         
        
         >
                <Image src="/images/image2.jpg" width={350} height={450} alt="" className='' />
</motion.div>
                    <p className=' font-poppins font-bold cursor-pointer   ml-3 space-y-2.5'>Millions of Indigenous People May Lose Voting Rights:Alliance</p>
                    
                </div>
                <div className='flex items-center mb-5'>

<motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:.8}}
         
        
         >
                <Image src="/images/image3.jpg" width={350} height={100} alt="" className='' />
</motion.div>

                    <p className=' font-poppins font-bold cursor-pointer  ml-3 space-y-2.5'>Crismoita Dwi Putri, RI`s Track Cycling Athlete for Asian Games</p>
                </div>
                <div className='flex items-center mb-5'>
<motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:.8}}
         
        
         >

                <Image src="/images/image4.jpg" width={325} height={450} alt="" className='' />
</motion.div>
                    <p className=' font-poppins font-bold cursor-pointer  ml-3 space-y-2.5'>President Joko "Jokowi" Widodo Refuses to Sign MD3 Law</p>
                </div>
                <div className='flex items-center mb-5'>
<motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:.8}}
         
        
         >
                <Image src="/images/image5.jpg" width={330} height={450} alt="" className='' />
</motion.div>
                    <p className=' font-poppins font-bold cursor-pointer  ml-3'>Garuda operates larger planes for Jakarta-Palembang route</p>
                </div>
                </div>

                
            </div>
            
        </div>
<SideArticale/>
        </div>
    )
}

export default Side;
