import React from "react";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className="items-center lg:flex lg:min-h-[80vh] w-[90%] mx-auto lg:w-[80%] relative lg:px-10 text-center lg:text-left" id="#welcome">
      
      <div className="px-5 lg:w-1/2">
      <Image
        src="/2.png"
        width={200}
        height={100}
        className="ml-[120px] lg:hidden"
        
      />
        <h2 className="pb-2 mt-[-50px] mb-5 text-3xl text-slate-600 lg:text-5xl">
          Welcome to Marcos Memorials
        </h2>
        <p className="pb-2 text-xl text-slate-600">
          We are a family run business with over 30 years experience in the
          memorial industry. We pride ourselves on our quality of work and
          customer service.
        </p>
        <p className="pb-2 text-xl text-slate-600">
          Based in the heart of the West Midlands and cover all areas of
          the UK. We offer a wide range of memorials and headstones in various
          colours and materials.
        </p>
        <p className="pb-2 text-xl text-slate-600">
          Renovation and cleaning service for existing
          memorials and headstones also available.
        </p>
        <p className="pb-2 text-xl text-slate-600">
          Here to help you through the process of choosing a memorial for
          your loved one. We will guide you through the process from choosing a
          memorial to the installation.
        </p>
        <p className="pb-2 mb-5 text-xl text-slate-600">
          Offering a free no obligation quote and can arrange a home visit if
          required.  Please feel free to contact us for any further information.
        </p>
      
      </div>
      <div className="px-5 lg:w-1/2">
        <Image
          src="/headstones-a.png"
          width={1920}
          height={1080}
          className="z-0 object-cover  h-[250px] mb-2"
        />
        <div className="grid grid-cols-2 gap-2">
          <Image src="/headstones-a.png" width={420} height={1080} />
          <Image src="/headstones-a.png" width={420} height={1080} />
        </div>
      </div>
    </section>
  );
}
