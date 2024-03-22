import Image from "next/image"
const Article = ({image,Title,Description}) => {
    
    
  return (
    
   <section>
    

     <div className="flex flex-col w-[65%] gap-4">
        <Image
        src={image}
        width={400}
        height={200}
        />
        <div className="shadow-md p-6 rounded-lg">
        <h1 className="font-bold text-xl">
     {Title}
     </h1>
     <p className="font-Mulish text-[#7D7987] text-md leading-7">
         {Description}
     </p>
       <div className="flex gap-4">
         <p className="text-blue-500 font-Mulish">
    
             Read more
         </p>
         <Image
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