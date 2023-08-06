import React from "react";

export default function Info() {
  return (
    <div className="flex justify-center w-full font-light text-white uppercase bg-slate-700 text-[14px] text-xl">
      <div className="flex flex-col py-3 font-medium tracking-widest text-center lg:flex-row ">
        <span className="py-2 lg:mx-5">Family Run</span>
        <span className="py-2 lg:px-5 lg:border-l lg:mx-5 lg:border-r">Custom Memorials</span>
        <span className="py-2 lg:border-r lg:pr-5">Trusted</span>
        <span className="py-2 lg:mx-5">Free Quotes</span>
      </div>
    </div>
  );
}
