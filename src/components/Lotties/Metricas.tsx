'use client'

import Lottie from 'lottie-react'
import metricas from '../../assets/metricas.json'
import './Lotties.css'

const Metricas = () => {
  return (
    <div>
        <Lottie className='ce' animationData={metricas} loop={true} />
    </div>
  )
}

export default Metricas;