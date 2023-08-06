import dynamic from "next/dynamic";

import { Inter } from "next/font/google";

import Header from "@/components/home/Header";
import PhotoRef from "@/components/home/PhotoRef";
import Welcome from "@/components/home/Welcome";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Reviews from "@/components/home/Reviews";
import Footer from "@/components/footer/Footer";

import Contact from "@/components/home/Contact";

const inter = Inter({ subsets: ["latin"] });

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen">
      <div className="relative top-0 left-0 right-0 ">
        {/* image and over lay */}
        <Header />
        {/* Photo Reference */}
        <PhotoRef />
        {/* Welcome */}
        <Welcome  />
        {/* Services */}
        <Services />
        {/* Portfolio */}
        <Portfolio />
        {/* Reviews */}
        <Reviews />
        {/* location */}
        <section className="relative z-10 h-[1600px] lg:h-[1100px] bg-slate-800">
          <div className=" flex flex-col w-full px-10 py-12 mt-10 lg:w-[80%] lg:m-auto">
            <h1 className="mb-5 text-4xl text-center text-slate-400 lg:text-5xl lg:mb-20 lg:mt-20">Contact</h1>
            <div className="h-[500px] lg:flex justify-between ">
              <div className="w-full h-full lg:mr-5 lg:w-1/2 lg:flex lg:flex-col-reverse">
                <div className="mb-10 text-center lg:text-left">
                  <div className="mt-5 text-xl text-white">
                    <p className="mt-10 mb-5 font-semibold ">Marcos Memorials LTD</p>
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
      </div>
      <Footer />
    </main>
  );
}
