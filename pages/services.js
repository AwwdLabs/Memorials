import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import Contact from "@/components/home/Contact";
import Footer from "@/components/footer/Footer";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Services() {
  return (
    <>
      <div className="h-full mb-10">
        <h1 className="mt-20 text-4xl text-center lg:text-5xl text-zinc-600">Services</h1>
        <Image
          src="/floral-underflow-slate.png"
          alt="About Us"
          width={400}
          height={500}
          className="w-[350px] h-[50px] mx-auto text-center"
        />
      </div>
      <section className="relative z-10 flex flex-col items-center justify-center w-full py-5 mt-10 lg:pb-10 min-h-[40vh]">
      
      <p className="pb-5 mx-10 mb-5 text-2xl text-center ">
        We offer a wide range of services to help you through the process of
        choosing a memorial for your loved one
      </p>
      <div className=" lg:flex-col lg:w-[90%] lg:mx-auto px-10 ">
        <div className="gap-2 lg:grid-cols-4 md:grid md:grid-cols-2">
          <div className="relative w-full px-2 py-2 mb-5 text-center">
            <h2 className="mb-5 text-2xl ">Memorial Installation</h2>
            <p className="pb-5 text-xl ">
              Crafting timeless tributes, capturing legacies through captivating
              installations, preserving cherished memories for generations to
              come
            </p>
          </div>
          <div className="relative w-full px-2 py-2 mb-5 text-center">
            <h2 className="mb-5 text-2xl ">Headstone Design</h2>
            <p className="pb-10 text-xl ">
              Personalized elegance etched in stone, honoring lives with bespoke
              headstone designs that reflect their unique spirit and remembrance
            </p>
          </div>
          <div className="relative w-full px-2 py-2 mb-5 text-center">
            <h2 className="mb-5 text-2xl">Maintenance & Cleaning</h2>
            <p className="pb-5 text-xl ">
              Dedicated care ensures pristine memorials, preserving their beauty
              for future generations through meticulous maintenance and
              cleaning
            </p>
          </div>

          <div className="relative w-full px-2 py-2 mb-5 text-center md:text-center lg:mb-20">
            <h2 className="mb-5 text-2xl ">Restoration & Repair</h2>{" "}
            <p className="pb-5 text-xl ">
              Expert restoration and repair services breathe new life into
              memorials, safeguarding legacies with meticulous craftsmanship 
            </p>
          </div>
        </div>

        {/* <div className="lg:w-1/2">Right</div> */}
      </div>
    </section>
      <section className="relative z-10 h-[1600px] lg:h-[1100px] bg-slate-800">
        <div className=" flex flex-col w-full px-10 py-12 mt-10 lg:w-[80%] lg:m-auto">
          <h1 className="mb-5 text-4xl text-center text-slate-400 lg:text-5xl lg:mb-20 lg:mt-20">
            Contact
          </h1>
          <div className="h-[500px] lg:flex justify-between ">
            <div className="w-full h-full lg:mr-5 lg:w-1/2 lg:flex lg:flex-col-reverse">
              <div className="mb-10 text-center lg:text-left">
                <div className="mt-5 text-xl text-white">
                  <p className="mt-10 mb-5 font-semibold ">
                    Marcos Memorials LTD
                  </p>
                  <p>Ashby Road</p>
                  <p>Loughborough</p>
                  <p>Leicestershire</p>
                  <p>LE11 3AB</p>
                </div>
                <div className="mt-5 text-xl text-white">
                  <p>07770876967679</p>
                  <p>info@marcosmemorials.com</p>
                </div>
              </div>
              <MapWithNoSSR />
            </div>
            <div className="w-full h-full mt-40 lg:mt-0 lg:ml-5 lg:w-1/2">
              <Contact />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
