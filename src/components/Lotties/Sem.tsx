'use client'

import Lottie from 'lottie-react'
import sem from '../../assets/sem.json'
import './Lotties.css'

const Sem = () => {
  return (
    <div>
        <Lottie className='md' animationData={sem} loop={true} />
    </div>
  )
}

export default Sem;