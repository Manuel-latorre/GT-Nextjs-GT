import Lottie from 'lottie-react'
import wp from '../../assets/wp.json'
import Link from 'next/link';


const Wp = () => {
  return (
    <div>
      <Link href="https://wa.me/541150034462?text=¡Hola%20Generacion%20Tech!%20Me%20gustaría%20saber%20acerca%20de..." target="_blank">
        <Lottie style={{width:80}} animationData={wp} loop={true} />
      </Link>
    </div>
  )
}

export default Wp;