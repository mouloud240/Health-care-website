import Image from "next/image"

const Testimonial = ({name,position,description,picture}) => {
  return (
   <section className="px-10">
     <div className="bg-gradient-to-t cursor-pointer from-[#67C3F3] py-24 to-[#5A98F2] flex flex-col gap-4 p-12 mx-10   rounded-2xl ">
       
    <div className="flex justify-center">
      <h1 className="Font-Mullish text-white text-6xl font-bold">
      What our customer are saying
      </h1>
    </div>
    <div className="flex justify-center ">
     <div className=" bg-white w-14 h-[2px]">
     </div>
    </div>
    <div className="flex items-center justify-around mt-14 ">
      <div className="flex gap-5">
       
       <Image
       className="rounded-full border-4 order-white"
       src={picture}
       height={141}
       width={141}
       alt=""
       />
       <div className="flex flex-col justify-center">
          <h1 className="font-Mullish font-bold text-xl text-white "> {name}</h1>
          <p className="font-Mullish font-light text-lg text-white">
           {position}
          </p>
       </div> 
       
      </div>
      <div className="  text-white w-1/4">
        <p className="font-Mullish text-xl   font-light ">
      {description}
        </p>
      </div>
    </div>
       </div>
   </section>
  )
}

export default Testimonial