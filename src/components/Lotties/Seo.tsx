'use client'

import Lottie from 'lottie-react'
import seo from '../../assets/seo.json'
import './Lotties.css'

const Seo = () => {
  return (
    <div>
        <Lottie className='md' animationData={seo} loop={true} />
    </div>
  )
}

export default Seo;