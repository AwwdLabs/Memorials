import React from 'react'
import Image from 'next/image'


export default function Header() {
  return (
    <div className="relative top-0 flex items-center justify-center w-full">
          <Image
            src="/memorial.jpg"
            width={2020}
            height={1600}
            className="z-0 object-cover  h-[470px] lg:h-[600px]"
          />
          <div className="absolute z-0 mx-5 mt-20 rounded-sm lg:mt-5 bg-slate-800 top-10 bg-opacity-80">
            <div className="flex flex-col items-center lg:w-[70%] lg:mx-auto lg:my-[100px] ">
              <h1 className="relative z-20 mt-5 text-3xl font-light text-center text-white opacity-100 lg:text-5xl">
                Headstones, Memorials and Gravestones
              </h1>
              <p className="relative z-20 px-5 pb-5 mt-5 text-xl text-center opacity-100 text-zinc-300 lg:px-20">
                We are a family run business with over 10 years experience in
                the memorial industry. We pride ourselves on our quality of work
                and customer service.
              </p>
              <button className="px-5 py-2 mb-8 font-bold text-white lg:mb-2 bg-slate-600 lg:mt-10">
                View Our Range
              </button>
            </div>
          </div>
        </div>
  )
}
