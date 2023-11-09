import React from 'react'
import './Loader.css'
import logo from '../../assets/logo1.svg'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className='loader'>
     <div className="cube-container">
        <div className="cube">
          <div className="face front"><Image className='logoCubic' src={logo} alt="logo" /></div>
          <div className="face back"><Image className='logoCubic' src={logo} alt="logo" /></div>
          <div className="face right"><Image className='logoCubic' src={logo} alt="logo"/></div>
          <div className="face left"><Image className='logoCubic' src={logo} alt="logo" /></div>
          <div className="face top"><Image className='logoCubic' src={logo} alt="logo" /></div>
          <div className="face bottom"><Image className='logoCubic' src={logo} alt="logo" /></div>
        </div>
    </div>

    </div>


  )
}

export default Loader