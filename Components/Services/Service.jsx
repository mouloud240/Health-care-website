import Image from "next/image";



function Card({ title, description, image }) {
  return (
    <div className="card w-[350px] h-[354px] rounded-lg bg-white flex flex-col justify-start mt-[80px] mx-[34px] sh">
      <Image
        src={image}
        alt={title}
        width={91.98}
        height={90}
        className="mt-[3.375rem] ml-[34px] mb-[22.1px]"
      />
      <div className="card-content font-mulish ">
        <span className="font-bold text-2xl ml-[34px] leanding-[56px] ">
          {title}
        </span>
        <p className="ml-[39px] mt-2 leanding-[28px] font-light w-[250px] text-pcolor">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;