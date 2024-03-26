
import Link from "next/link";
import Card from "./Service";

function Services() {
  return (
    <main className="font-mulish backServices ">
      <div className="services flex items-center flex-col ">
        <div className="flex items-center flex-col ">
          <a href="#">
            <h2 className="font-extrabold text-3xl my-5 [56px]">
              Our services
            </h2>
          </a>
          <div className="h-1 w-12 border border-black bg-black rounded mb-5"></div>
          <p className="w-3/5 text-pcolor">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className="mb-[4.313rem] ">
          <div className="grid  md:grid-cols-2 lg:grid-cols-3">
         {
          servicesData.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))
         }
          </div>
        </div>
        <Link
          href={"#"}
          className="button flex hover:bg-btncolor hover:text-white"
        >
          Learn more
        </Link>
      </div>
    </main>
  );
}
export default Services;