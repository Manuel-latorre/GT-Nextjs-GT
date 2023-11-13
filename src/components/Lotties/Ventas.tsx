
'use client'

import Lottie from 'lottie-react'
import ventas from '../../assets/ventas.json'
import './Lotties.css'

const Ventas = () => {
  return (
    <div>
        <Lottie className='ce' animationData={ventas} loop={true} />
    </div>
  )
}

export default Ventas;