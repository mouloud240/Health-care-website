import Image from "next/image"
import navbLinks from "./Constants"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex justify-around mx-12 mt-12">
      <Link href={'/'}>
      <div className="flex items-center gap-2">
        
      
        <Image
        src={'Assets/Logo.svg'}
        height={40}
        width={40}
        alt="logo"
        />
        <p className="font-Mullish font-semibold text-xl text-[#233348]">
          Traflgar
        </p>
        
      </div>
      </Link>
      <div className="flex gap-12 items-center">
        {
          navbLinks.map((item,index)=>{
            return(
             <Link href={item.path} key={index}>
               <p className="text-gray-500 hover:text-black font-Mulish font-medium text-lg" key={index}>
                     {item.name}
               </p>
             </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Navbar