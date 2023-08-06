import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import Contact from "@/components/home/Contact";
import Footer from "@/components/footer/Footer";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function portfolio() {
  return (
    <>
      <div className="h-full mb-40">
        <h1 className="mt-20 text-4xl text-center lg:text-5xl text-zinc-600">Portfolio</h1>
        <Image
          src="/floral-underflow-slate.png"
          alt="About Us"
          width={400}
          height={500}
          className="w-[350px] h-[50px] mx-auto text-center"
        />
      </div>
      <div className="gap-4 mt-8 lg:grid lg:grid-cols-4 md:grid-cols-2 md:grid lg:w-[80%] lg:m-auto">
        <Image
          src="/headstone-8.JPEG"
          width={1920}
          height={1080}
          className="z-0 object-cover  h-[500px] mt-2"
          />
        <Image
          src="/headstone-9.JPEG"
          width={1920}
          height={1080}
          className="z-0 object-cover  h-[500px] mt-2"
        />
        <Image
          src="/headstone-11.png"
          width={1920}
          height={1080}
          className="z-0 object-cover  h-[500px] mt-2"
        />
        <Image
          src="/headstone-12.png"
          width={1920}
          height={1080}
          className="z-0 object-cover  h-[500px] mt-2"
        />
        <Image
          src="/headstone-13.png"
          width={1920}
          height={1080}
          className="z-0 object-cover  h-[500px] mt-2"
        />
        <Image
          src="/headstone-14.png"
          width={1920}
          height={1080}
          className="z-0 object-cover  h-[500px] mt-2"
        />
      </div>
      <section className="relative z-10 min-h-[1540px] lg:min-h-[1200px] bg-slate-800 mt-40">
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
