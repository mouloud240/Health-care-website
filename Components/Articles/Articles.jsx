"use client"
import Article from "./Article"
import ArticlesData from "./Constants"
import { useState } from "react"
const Articles = () => {
  const [showMoreClicked,setshowMoreClicked]=useState(false)
  const [Btntext,SetBtntext]=useState("View More");
  const handleButtonClick=()=>{
     setshowMoreClicked(!showMoreClicked)
     if (showMoreClicked) {
      SetBtntext("View Less");
     }
     else {
      SetBtntext("View More")
     }
  }
  return (
<section className="flex flex-col gap-10 px-18">
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
        <div className="flex">
        <div className="flex w-full gap-0">
       {
      ArticlesData.map((item,index)=>{
        
          return(
            <div key={index}>
                <Article
                Title={item.title}
                image={item.picture}
                Description={item.description}
                />
            </div>
            )
      })
  }
       </div>
        </div>
    <div>
    </div>
  </div>
  <div className="flex justify-center mb-10 ">
    <button className="ring-blue-500 rounded-full ring-2 p-2 px-10  text-lg text-blue-500" onClick={handleButtonClick}>
      {Btntext}
    </button>
  </div>
</section>
  )
}
export default Articles;