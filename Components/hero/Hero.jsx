import Image from "next/image"
const Hero = () => {
  return (
    <div className="flex justify-around">
      <div className="w-1/4 flex flex-col gap-4 self-center">
          <h1 className="font-Mullish text-4xl font-bold">
          Virtual healthcare &nbsp; for you
          </h1>
          <p className="text-lg font-light font-Mulish text-[#7D7987] leading-8">
          Trafalgar provides progressive, and affordable 
healthcare, accessible on mobile and online &nbsp; 
for  everyone
          </p>
          <div>
            <button className="text-white bg-[#458FF6] p-3 px-8 rounded-3xl">
            Consult today
            </button>
          </div>
      </div>
      <div >
      <Image
      src={"Assets/heroPicture.svg"}
      alt=""
      height={500}
      width={500}
      />
      </div>
    </div>
  )
}

export default Hero