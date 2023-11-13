'use client'

import Lottie from 'lottie-react'
import socialMedia from '../../assets/socialMedia.json'
import './Lotties.css'

const SocialMedia = () => {
  return (
    <div>
        <Lottie className='md' animationData={socialMedia} loop={true} />
    </div>
  )
}

export default SocialMedia;