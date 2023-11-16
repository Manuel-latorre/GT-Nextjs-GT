import Image from "next/image";
import logo from '../../assets/logo.svg'
import Link from "next/link";

export default function Logo (){
    return(
        <Link href='/'>
            <div>
                <Image width={300} src={logo} alt="logo"/>
            </div>
        </Link>
    )
}