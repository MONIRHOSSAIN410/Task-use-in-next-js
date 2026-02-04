import React from 'react'
import Navbar from "./components/Navbar"
import Side from "./components/Side"
import Section from "./components/Section"
import RightSide from "./components/RightSide"

const App = () => {
  return (
    <div >
      <Navbar/>
      <div className='flex flex-col sm:flex-row md:flex-nowrap   gap-3.5'>
      <Side/>
     <Section/>
     <RightSide/>
      </div>
    </div>
  )
}

export default App;