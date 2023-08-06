import React from "react";

import dynamic from "next/dynamic";

import Image from "next/image";

import Contact from "@/components/home/Contact";
import Footer from "@/components/footer/Footer";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function AboutUs() {

  
  return (
    <>
      <div className="h-full mb-40">
        <h1 className="mt-20 text-4xl text-center lg:text-5xl text-zinc-600">About Us</h1>
        <Image
          src="/floral-underflow-slate.png"
          alt="About Us"
          width={400}
          height={500}
          className="w-[350px] h-[50px] mx-auto text-center"
        />

        <div className="mx-auto mt-10 w-[80%] lg:text-center">
          <p className="mb-3 text-xl lg:mt-20 lg:mb-5">
            Welcome to Marcos Memorials, where craftsmanship and reverence meet
            to honor cherished memories. With a rich heritage spanning over two decades, our founder, Marcos, embarked on his journey as a young
            apprentice, honing his skills alongside three distinguished memorial
            tradesmen. Today, Marcos Memorials stands as a testament to his
            unwavering passion and commitment to providing exceptional memorial
            and headstone services.
          </p>

          <p className="mb-3 text-xl lg:mb-5">
            We understand the importance of commemorating a life lived and the
            significance it holds for those left behind. Our team of skilled
            artisans and compassionate professionals are dedicated to crafting
            personalized memorials that capture the essence of your loved ones.
            From intricately carved headstones to elegantly designed plaques, we
            ensure that every piece is a timeless tribute, preserving precious
            memories for generations to come.
          </p>
          <p className="mb-3 text-xl lg:mb-5">
            At Marcos Memorials, we believe that the process of memorialization
            should be a comforting and seamless experience. We guide you with
            sensitivity and care, offering expert advice, attention to detail,
            and a range of customizable options. Our commitment to quality
            craftsmanship, combined with our deep understanding of your
            emotional needs, sets us apart as a trusted partner in honoring your
            loved one's legacy.
          </p>
          <p className="mb-3 text-xl lg:mb-5">
            As you navigate through our website, you'll discover the diverse
            range of memorial services we offer, each tailored to celebrate and
            remember lives in unique ways. Whether you seek a traditional design
            or a contemporary masterpiece, we strive to exceed your expectations
            by blending artistry with heartfelt dedication.
          </p>
          <p className="mb-3 text-xl lg:mb-5">
            We invite you to explore Marcos Memorials and embark on a journey
            that goes beyond mere stone and inscription. Join us in creating
            lasting memorials that tell stories, evoke emotions, and pay homage
            to lives well-lived. Let us accompany you on this meaningful path of
            remembrance, where every detail is meticulously crafted to honor the
            ones who matter most.
          </p>
          <p className="mb-3 text-xl lg:mb-5">
            Together, let us celebrate life, preserve memories, and ensure that
            legacies live on through the enduring beauty of Marcos Memorials.
          </p>
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
