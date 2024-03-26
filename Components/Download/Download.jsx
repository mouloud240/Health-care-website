import Image from "next/image"
import Description from "./Description"

const Download = () => {
  return (
    <div className="flex flex-col gap-36">
      <div className="flex justify-around ">
     <div>
      <Image
      src={"Assets/Download1.svg"}
      width={550}
      height={500}
      alt=""
      />
     </div>
   <Description title="Leading healthcare providers" description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver" buttonText="Learn More"/>
      </div>
        <div className="flex justify-around ">
            <Description
            title={"Download our mobile apps"}
            description={"Our dedicated patient engagement app and  web portal allow you to access information instantaneously (no tedeous form, long calls,or administrative hassle) and securely"}
            buttonText={"Download"}
            />
          <div className="">
            <Image
            src={"Assets/Download2.svg"}
            alt=""
            width={550}
            height={500}
            />
          </div>
        </div>
    </div>
  )
}

export default Download