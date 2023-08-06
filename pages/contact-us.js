import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import Contact from "@/components/home/Contact";
import Footer from "@/components/footer/Footer";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function ContactUs() {
  return (
    <>
      <div className="h-full mb-40">
        <h1 className="mt-20 text-4xl text-center lg:text-5xl text-zinc-600">Contact</h1>
        <Image
          src="/floral-underflow-slate.png"
          alt="About Us"
          width={400}
          height={500}
          className="w-[350px] h-[50px] mx-auto text-center"
        />

        <div className="mx-auto mt-10 w-[80%] lg:text-center">
          <p className="mb-3 text-xl lg:mt-20 lg:mb-5">
            At our memorial mason company, we understand that preserving the
            memory of your loved ones is a deeply personal and meaningful
            endeavor. We take pride in providing exquisite craftsmanship and
            dedicated service to create lasting tributes that honor their
            legacy.
          </p>
          <p className="mb-3 text-xl lg:mb-5">
            Whether you have a specific design in mind or need guidance in
            choosing the perfect memorial, our team of skilled artisans and
            compassionate professionals is here to assist you every step of the
            way. We believe in fostering a warm and welcoming environment where
            you can comfortably share your ideas and aspirations.
          </p>
          <p className="mb-3 text-xl lg:mb-5">
            By reaching out to us, you're taking the first step towards creating
            a cherished memorial that beautifully reflects the life and essence
            of your loved one. We value open communication and will listen
            attentively to your unique requirements, ensuring that we create a
            memorial that exceeds your expectations
          </p>
          <p className="mb-3 text-xl lg:mb-5">
            Please don't hesitate to get in touch using the contact information
            provided below. We look forward to connecting with you, discussing
            your vision, and collaborating to create a memorial that stands as a
            testament to the lives we hold dear.
          </p>
          <p className="mb-3 text-xl lg:mb-2">Warm Regards</p>
          <h2 className="text-xl font-bold">Marcos Memorials</h2>
        </div>
      </div>

      <section className="relative z-10 h-[1600px] lg:h-[1100px] bg-slate-800">
        <div className=" flex flex-col w-full px-10 py-12 mt-10 lg:w-[80%] lg:m-auto">
          <h1 className="mb-5 text-4xl text-center text-slate-400 lg:text-5xl lg:mb-20 lg:mt-20">
            Contact
          </h1>
          <div className="h-[500px] lg:flex justify-between ">
            <div className="w-full h-full lg:mr-5 lg:w-1/2 lg:flex lg:flex-col-reverse">
              <div className="mb-10 text-center lg:text-left">
                <div className="mt-5 text-xl text-white">
                  <p className="mt-10 mb-5 text-2xl font-semibold">
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
