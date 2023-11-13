'use client'

import Lottie from 'lottie-react'
import mc from '../../assets/marketContent.json'
import './Lotties.css'

const MarketingContent = () => {
  return (
    <div>
        <Lottie className='md' animationData={mc} loop={true} />
    </div>
  )
}

export default MarketingContent;