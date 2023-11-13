'use client'

import Lottie from 'lottie-react'
import email from '../../assets/email.json'
import './Lotties.css'

const Email = () => {
  return (
    <div>
        <Lottie className='md' animationData={email} loop={true} />
    </div>
  )
}

export default Email;