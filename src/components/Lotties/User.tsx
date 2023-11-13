
'use client'

import Lottie from 'lottie-react'
import user from '../../assets/user.json'
import './Lotties.css'

const User = () => {
  return (
    <div>
        <Lottie className='ce' animationData={user} loop={true} />
    </div>
  )
}

export default User;