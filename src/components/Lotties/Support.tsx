'use client'

import Lottie from 'lottie-react'
import support from '../../assets/support.json'
import './Lotties.css'


const Support = () => {
  return (
    <div>
        <Lottie className='ds'animationData={support} loop={true} />
    </div>
  )
}

export default Support;