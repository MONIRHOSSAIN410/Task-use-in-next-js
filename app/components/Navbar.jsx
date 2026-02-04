"use client"
import Link from 'next/link';
import React,{useState} from 'react'
import {X , Menu} from "lucide-react";


const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false)
const [hovered , setHovered]=useState(false);

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className='bg-white shadow-black'>
      <div className='border-b bg-white'>
      <h1 className='text-3xl text-center p-7.5 text-shadow-2xs font-bold font-poppins'>THE DOWNTOWN</h1>
</div>
<div className='container mx-auto  items-center'>
      <div className='md:hidden lg:hidden'>
<button onClick={toggleMenu} className='focus:outline-none focus:text-white'>
  <svg className='h-6 w-6 m-1.5'>
{
  isMenuOpen ?(
    <X/>
  ):(<Menu/>)
}
  </svg>
</button>
      </div>
<div className='hidden text-xm  font-bold md:flex lg:flex font-poppins space-x-4 justify-center p-3.5'>
  <ul className='flex gap-3.5'>
     <li className='  cursor-pointer font-poppins '>
    <Link href="/" className="  relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before-rounded-all 
    before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:block before:to-black hover:before:w-12 hover:before:opacity-100 ">HOME </Link></li>
    <li className='  cursor-pointer font-poppins '>
    <Link href="/" className="  relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before-rounded-all 
    before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:block before:to-black hover:before:w-11.5 hover:before:opacity-100 ">NEWS </Link></li>
<li className='  cursor-pointer font-poppins '>
    <Link href="/" className="  relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before-rounded-all 
    before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:block before:to-black hover:before:w-18 hover:before:opacity-100 ">POLITICS </Link></li>
   <li className='  cursor-pointer font-poppins '>
    <Link href="/" className="  relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before-rounded-all 
    before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:block before:to-black hover:before:w-20.5 hover:before:opacity-100 ">BUSINESS </Link></li>
    <li className='  cursor-pointer font-poppins '>
    <Link href="/" className="  relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before-rounded-all 
    before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:block before:to-black hover:before:w-20.5 hover:before:opacity-100 ">NATIONAL</Link></li>
    <li className='  cursor-pointer font-poppins '>
    <Link href="/" className="  relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before-rounded-all 
    before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:block before:to-black hover:before:w-18.5 hover:before:opacity-100 ">CULTURE </Link></li>
   <li className='  cursor-pointer font-poppins '>
    <Link href="/" className="  relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before-rounded-all 
    before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:block before:to-black hover:before:w-16.5 hover:before:opacity-100 ">OPINION </Link></li>
    <li className='  cursor-pointer font-poppins '>
    <Link href="/" className="  relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before-rounded-all 
    before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:block before:to-black hover:before:w-21.5 hover:before:opacity-100 ">LIFESTYLE</Link></li>
   <li className='  cursor-pointer font-poppins '>
    <Link href="/" className="  relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before-rounded-all 
    before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:block before:to-black hover:before:w-16 hover:before:opacity-100 ">SPORTS </Link></li>
    </ul>
    </div>
    </div>
 <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-500`}>
    <Link href="/" className=' font-poppins  block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  '>HOME</Link>
    <Link href="/"  className=' font-poppins  block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md '>NEWS</Link>
    <Link href="/" className=' font-poppins  block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md '>POLITICS</Link>
    <Link href="/" className='  font-poppins block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md '>BUSINESS</Link>
    <Link href="/" className=' font-poppins  block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md '>NATIONAL</Link>
    < Link href="/" className=' font-poppins  block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md '>CULTURE</Link>
    <Link href="/"  className=' font-poppins  block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md '>OPINION</Link>
    < Link href="/" className='  font-poppins block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md '>LIFESTYLE</Link>
    < Link href="/" className=' font-poppins  block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md '>SPORTS</Link>
    </div>
</nav>
  
  )
}

export default Navbar;