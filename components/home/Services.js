import React from "react";

export default function Services() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center w-full py-5 mt-10 lg:pb-10 min-h-[40vh] bg-slate-700 ">
      <h2 className="pb-2 mt-10 mb-3 text-3xl text-center text-white lg:text-5xl lg:mt-20">
        Our Services
      </h2>
      <p className="pb-5 mx-10 mb-5 text-2xl text-center text-zinc-300">
        We offer a wide range of services to help you through the process of
        choosing a memorial for your loved one
      </p>
      <div className=" lg:flex-col lg:w-[90%] lg:mx-auto px-10 ">
        <div className="gap-2 lg:grid-cols-4 md:grid md:grid-cols-2">
          <div className="relative w-full px-2 py-2 mb-5 text-center">
            <h2 className="mb-5 text-2xl text-white">Memorial Installation</h2>
            <p className="pb-5 text-xl text-slate-300">
              Crafting timeless tributes, capturing legacies through captivating
              installations, preserving cherished memories for generations to
              come
            </p>
          </div>
          <div className="relative w-full px-2 py-2 mb-5 text-center">
            <h2 className="mb-5 text-2xl text-white">Headstone Design</h2>
            <p className="pb-10 text-xl text-slate-300">
              Personalized elegance etched in stone, honoring lives with bespoke
              headstone designs that reflect their unique spirit and remembrance
            </p>
          </div>
          <div className="relative w-full px-2 py-2 mb-5 text-center">
            <h2 className="mb-5 text-2xl text-white">Maintenance & Cleaning</h2>
            <p className="pb-5 text-xl text-slate-300">
              Dedicated care ensures pristine memorials, preserving their beauty
              for future generations through meticulous maintenance and
              cleaning
            </p>
          </div>

          <div className="relative w-full px-2 py-2 mb-5 text-center md:text-center lg:mb-20">
            <h2 className="mb-5 text-2xl text-white">Restoration & Repair</h2>{" "}
            <p className="pb-5 text-xl text-slate-300">
              Expert restoration and repair services breathe new life into
              memorials, safeguarding legacies with meticulous craftsmanship 
            </p>
          </div>
        </div>

        {/* <div className="lg:w-1/2">Right</div> */}
      </div>
    </section>
  );
}
