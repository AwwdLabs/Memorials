import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="relative z-10 flex flex-col w-full py-5 mt-10 lg:pb-10  lg:w-[80%] lg:mx-auto px-10 ">
      <Image
        src="/marco-design-a.png"
        width={500}
        height={100}
        className="absolute left-[-200px] z-0 top-[-50px]"
      />
      <h2 className="pb-2 mt-40 mb-3 text-3xl text-center lg:text-5xl text-slate-700">
        Our Work
      </h2>
      <p className="pb-2 mb-8 text-2xl text-center text-zinc-600">
        Unveiling timeless tributes, our memorial mason portfolio immortalizes
        cherished legacies in stone
      </p>
      <div className="mt-5 lg:flex lg:items-center lg:justify-center">
        <div className="lg:w-1/2 lg:pr-10">
          <h3 className="mb-5 text-4xl">
            In reverent remembrance, we honor the souls departed
          </h3>
          <p className="mb-5 text-xl text-zinc-600">
            Step into a sacred realm where memories intertwine, celebrating
            lives lived and commemorating their impact. Our unique memorial
            services portfolio captures tender moments, heartfelt tributes, and
            the resilience of the human spirit. Experience the power of healing,
            unity, and eternal legacies, woven into a tapestry of love and
            remembrance. Welcome to a sanctuary where stories of departed souls
            resonate forever.
          </p>
          <p className="mb-10 text-xl text-zinc-600">
            In this portfolio, we do not dwell solely on sorrow, for grief and
            loss are but threads woven into the intricate tapestry of life.
            Instead, we seek to paint vibrant portraits of celebration,
            resilience, and love. Through our unique lens, we illuminate the
            luminous stories of those who have journeyed beyond this earthly
            plane, illuminating their profound impact on the lives they touched.
          </p>
          <button className=" w-[125px] bg-slate-500 py-2 px-5 text-white  mb-10 font-bold">
          <Link href="/portfolio" className="text-xl">Portfolio</Link>
          </button>
        </div>
        <div className="lg:w-1/2 lg:px-5">
          <div className="gap-2 md:grid-cols-2 md:grid">
            <Image
              src="/headstone-8.JPEG"
              width={1920}
              height={1080}
              className="z-0 object-cover  h-[500px] mt-2 mb-5"
            />
            <Image
              src="/headstone-9.JPEG"
              width={1920}
              height={1080}
              className="z-0 object-cover  h-[500px] mt-2"
            />
          </div>
        </div>
      </div>
      <div className="gap-4 mt-8 lg:grid lg:grid-cols-4 md:grid-cols-2 md:grid">
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
    </section>
  );
}
