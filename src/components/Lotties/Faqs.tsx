'use client'

import Lottie from 'lottie-react'
import faqs from '../../assets/faqs.json'
import './Lotties.css'


const Faqs = () => {
  return (
    <div>
        <Lottie className='ds' animationData={faqs} loop={true} />
    </div>
  )
}

export default Faqs;