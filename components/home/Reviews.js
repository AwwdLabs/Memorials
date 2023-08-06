import React from "react";
import Image from "next/image";

export default function Reviews() {
  return (
    <section className="relative z-10 flex flex-col w-full px-10 py-12 mt-10 lg:mb-20 ">
      <h2 className="pb-2 mt-8 mb-3 text-3xl text-center lg:text-5xl text-slate-700">
        Reviews
      </h2>
      <p className="pb-2 mb-8 text-2xl text-center text-zinc-600 lg:w-2/3 lg:mx-auto">
      Reflecting on our endeavors, heartfelt testimonials etch the essence of our craftsmanship, preserving treasured memories in stone
      </p>
      {/* <Image
        src="/floral-underflow-slate.png"
        width={200}
        height={200}
        alt="floral underflow"
        className="mx-auto mt-[-10px] mb-10"
      /> */}
      <div className="lg:w-[80%] lg:mx-auto lg:grid lg:grid-cols-3 gap-5">
        <div className="text-center">
          <h3 className="mb-5 text-2xl text-slate-700">
            Exceptional Attention to Detail
          </h3>
          <p className="mb-5 text-xl text-zinc-600">
            I recently used the services of the Marcos Memorials, and I must
            say, I am extremely impressed. The craftsmanship displayed in the
            memorial stone I ordered was exceptional. Every intricate detail was
            carefully carved, resulting in a truly beautiful and meaningful
            tribute to my loved one
          </p>
        </div>
        <div className="text-center">
          <h3 className="mb-5 text-2xl text-slate-700">
            A Compassionate Experience
          </h3>
          <p className="mb-5 text-xl text-zinc-600">
            I want to express my gratitude  for providing such a
            sincere and compassionate experience during a difficult time. They
            understood the importance of the memorial stone and ensured that
            every detail reflected the personality and memories of my beloved
            family member
          </p>
        </div>
        <div className="text-center">
          <h3 className="mb-5 text-2xl text-slate-700">
            Professionalism at its Best!
          </h3>
          <p className="mb-5 text-xl text-zinc-600">
            I am thoroughly impressed with the professionalism displayed by the
            team. The ordering process was straightforward, and the customer
            support was attentive and responsive. The memorial stone I received
            was meticulously crafted, showcasing the skill and expertise of the
            masons
          </p>
        </div>
      </div>
    </section>
  );
}
