import Image from "next/image"
const Article = ({image,Title,Description}) => {
    
    
  return (
    
   <section className="p-6 px-10 h-[512p]">
     <div className="flex flex-col shadow-md rounded-xl gap-6 w-[80%]">
        <Image
        src={image}
        width={400}
        height={200}
        />
        <div className=" p-6 flex flex-col  rounded-3xl w-[80%]">
        <h1 className="font-bold text-2xl">
     {Title}
     </h1>
     <p className="font-Mulish text-[#7D7987] text-xl leading-7">
         {Description}
     </p>
       <div className="flex gap-4 mt-4" >
         <p className="text-blue-500 font-Mulish cursor-pointer text-lg">
    
             Read more
         </p>
         <Image
         className="cursor-pointer"
         src={"Assets/Arrow.svg"}
         height={20}
         width={20}
         alt="arrow"
         />
       </div>
     </div>
        </div>
   </section>
  
  )
}

export default Article