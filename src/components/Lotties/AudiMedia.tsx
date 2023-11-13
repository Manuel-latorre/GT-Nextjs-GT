'use client'

import Lottie from 'lottie-react'
import audiMedia from '../../assets/audiMedia.json'
import './Lotties.css'

const AudiMedia = () => {
  return (
    <div>
        <Lottie className='ce' animationData={audiMedia} loop={true} />
    </div>
  )
}

export default AudiMedia;