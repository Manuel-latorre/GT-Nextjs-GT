'use client'

import Lottie from 'lottie-react'
import audiweb from '../../assets/audiWeb.json'
import './Lotties.css'

const AudiWeb = () => {
  return (
    <div>
        <Lottie className='ce' animationData={audiweb} loop={true} />
    </div>
  )
}

export default AudiWeb;