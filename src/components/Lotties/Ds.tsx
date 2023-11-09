'use client'

import Lottie from 'lottie-react'
import ds from '../../assets/ds1.json'
import './Lotties.css'

const Ds = () => {
  return (
    <div>
        <Lottie className='ds' animationData={ds} loop={true} />
    </div>
  )
}

export default Ds;