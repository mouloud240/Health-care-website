

const Description = ({title,description,buttonText}) => {
  return (
    <div className="w-1/4 flex flex-col  gap-4 justify-center">
    <h1 className="font-medium font-Mulish text-3xl ">
    {title}
    </h1>
    <div className="bg-black  w-[56px] h-[2px]">
    </div>
    
    <p className="text-lg font-light font-Mulish text-[#7D7987] leading-8">
    {description}
    </p>
    <button className=" text-blue-500 font-Mulish rounded-3xl border-2 border-blue-500 w-1/3 p-3 px-4 ">
   {buttonText}
    </button>
   </div>
  )
}

export default Description