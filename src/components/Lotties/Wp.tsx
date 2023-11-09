import Lottie from 'lottie-react'
import wp from '../../assets/wp.json'


const Wp = () => {
  return (
    <div>
        <Lottie style={{width:80}} animationData={wp} loop={true} />
    </div>
  )
}

export default Wp;