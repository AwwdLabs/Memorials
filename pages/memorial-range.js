import React from "react";
import Image from "next/image";
import Link from "next/link";

import dynamic from "next/dynamic";

import Contact from "@/components/home/Contact";
import Footer from "@/components/footer/Footer";

import ProductCategories from "@/products/ProductCategories";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function MemorialRangePage({ categories }) {
  return (
    <>
      <div className="lg:w-[90%] lg:mx-auto mb-20 min-h-screen ">
        <div className="mb-20">
          <h1 className="mt-20 text-4xl text-center lg:text-5xl text-zinc-600">
            Memorial Range
          </h1>
          <Image
            src="/floral-underflow-slate.png"
            alt="About Us"
            width={400}
            height={500}
            className="w-[350px] h-[50px] mx-auto text-center"
          />
        </div>
        <ul className="grid w-full grid-cols-1 gap-2 md:grid-cols-3">
          {categories.map((category) => (
            <li key={Math.random()} className="relative w-full h-[400px] mb-10">
              <Link href={category.href}>
                <Image
                  src={category.coverImage}
                  alt={category.name}
                  width={300}
                  height={100}
                  className="flex items-center justify-center w-[300px] h-[400px] mx-auto text-center]"
                />
                <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-opacity-50 bg-slate-700">
                  <h2 className="text-3xl font-semibold text-center text-white">
                    {category.name}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
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

export async function getStaticProps() {
  const categories = ProductCategories;

  return {
    props: {
      categories,
    },
  };
}
