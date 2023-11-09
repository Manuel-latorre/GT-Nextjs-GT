'use client'

import Lottie from 'lottie-react'
import hosting from '../../assets/hosting1.json'
import './Lotties.css'


const Hosting = () => {
  return (
    <div>
        <Lottie className='hosting' animationData={hosting} loop={true} />
    </div>
  )
}

export default Hosting;