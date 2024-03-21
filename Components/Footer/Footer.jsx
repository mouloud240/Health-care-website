import Image from "next/image"

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#67C3F3] to-[#5A98F2] p-10">
      <div className="flex justify-center">
        <div className="flex flex-col gap-4  ">
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
              <p className=" text-white font-Mulish font-light text-[18px] leading-7 ">
              Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
               for everyonee
              </p>
              <p className="mt-10 text-white font-Mulish  ">
              ©Trafalgar PTY LTD 2020. All rights reserved
              </p>
        </div>
      </div>
    </div>
  )
}

export default Footer