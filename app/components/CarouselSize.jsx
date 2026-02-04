"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const CarsourselSize = () => {
  return (
    <div className='    shadow-amber-50 rounded  inset-shadow-sm bg-white ml-1  md:w-[650]  mt-8 '>
     <Swiper
      spaceBetween={20}
      slidesPerView={3}
      modules={[Navigation,Autoplay]}
     
      autoplay={{delay:2000}}
      loop={true}
    >
        <div className=''>
            
      <SwiperSlide >
        <div className='flex gap-2    m-2.5 '>
        <img src="/images/girl2.jpg" width={70} height={50} alt=""className=''/>
        <p className='text-sm p-.5 font-poppins mt-0.5'>The Chinese smartphone upstarts taking  Apple and Samsung</p>
        </div>
       </SwiperSlide>
      
      <SwiperSlide>
        <div className='flex gap-2   m-2.5'>
        <img src="/images/girl3.jpg" width={70} height={65} alt="" className=''/>
      <p className='text-sm  font-poppins mt-0.5'>A Digital Media Startup Growing Up With Millennial Women</p>
      </div>
      </SwiperSlide>
       <SwiperSlide>
        <div  className='flex gap-2   md:m-2.5 text-sm'>
        <img src="/images/train.jpg" width={60} height={10} alt=""/>
       <p className='text-sm  font-poppins mt-0.5'>Presidential Train Now Available For Jakartans Traveling To Bandung</p>
       </div>
       </SwiperSlide>
        <SwiperSlide>
          <div  className='flex gap-2  m-2.5'>
          <img src="/images/mobile.jpg" width={60} height={60} alt=""/>
          <p className='text-sm  font-poppins mt-0.5'>Indonesia To Offer Infrastructure Projects At IMF-World Bank Meeting</p>
          </div>
          </SwiperSlide>
         <SwiperSlide>
          <div  className='flex gap-2  m-2.5'>
          <img src="/images/man.jpg" width={70} height={65} alt=""/>
          <p className='text-sm  font-poppins mt-0.5'>Ngurah Rai International Airport To Close For 24 Hours For Nyepi</p>
          
          </div>
          </SwiperSlide>
      
</div>

    </Swiper>
    </div>
  )
}

export default CarsourselSize;
