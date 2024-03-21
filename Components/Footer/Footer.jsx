import Image from "next/image"
import FooterLinks from "./Constants"
import Link from "next/link"
const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-b flex relative flex-col from-[#67C3F3] to-[#5A98F2] p-16">
        <div className="flex justify-around">
          <div className="flex flex-col gap-4 w-1/4  ">
             <div className="flex items-center gap-2">
               <Image
               src={"Assets/Logo-white.svg"}
               width={40}
               height={40}
               alt="logo"
               />
               <p className="text-white font-bold text-lg font-Mullish">
               Trafalgar
               </p>
             </div>
                <p className=" text-white font-Mulish font-light text-[18px] leading-10 ">
                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
                 for everyonee
                </p>
                <p className="mt-10 text-white font-Mulish  ">
                ©Trafalgar PTY LTD 2020. All rights reserved
                </p>
          </div>
          <ul className="flex gap-28">
               {
                  FooterLinks.map((item,index)=>{
                    return(
                      <li key={index}>
                        <h1 className="font-Mulish font-bold text-xl text-white">
                          {item.title}
                        </h1>
                        <ul className="flex flex-col gap-4 mt-4">
                        {
                          item.links.map((Subitem,index)=>{
                            return(
                              <li key={index}>
                              <Link href={Subitem.path} className="font-thin font-Mulish text-gray-200 text-lg">
                              {Subitem.name}
                             </Link> </li>
                             
                            )
                          }
                             
                          )
                          }
                        </ul>
                       
      
                      </li>
                    )
                  })
               }
      
          </ul>
        </div>
      
      </div>
    </div>
  )
}

export default Footer