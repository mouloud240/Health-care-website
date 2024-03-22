import Article from "./Article"
import ArticlesData from "./Constants"

const Articles = () => {
  return (
<section className="flex flex-col gap-10">
 <div className="flex flex-col gap-4">
   <h1 className="font-bold font-Mulish text-5xl text-center">
         Check out our latest Articles
     </h1>
    <div className="flex justify-center">
      <div className="bg-black w-[56px] h-[2px]">
      </div>
    </div>
 </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
        <ul className="flex  ">
       {
      ArticlesData.map((item,index)=>{
        return(
        <li key={index}>
            <Article
            Title={item.title}
            image={item.picture}
            Description={item.description}
            />
        </li>
        )
      })
  }
       </ul>
        </div>
  
   
    <div>
      
    </div>
  </div>
</section>
  )
}
export default Articles;