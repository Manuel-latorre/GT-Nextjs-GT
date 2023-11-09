'use client'

import Lottie from 'lottie-react'
import uxui from '../../assets/uxui1.json'
import './Lotties.css'


const UxUi = () => {
  return (
    <div>
        <Lottie className='uxui'  style={{width:250}} animationData={uxui} loop={true} />
    </div>
  )
}

export default UxUi;