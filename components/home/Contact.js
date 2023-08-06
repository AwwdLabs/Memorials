import React from "react";

import Image from "next/image";

import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <div className="bg-slate-800 lg:ml-5">
      <Image
        src="/floral-reverse.png"
        alt="Picture of the author"
        width={400}
        height={200}
        className="absolute right-0 top-0 hidden xl:top-[540px] xl:left-[430px] xl:block z-0 opacity-80 rotate-[90deg]"
      />
      <h2 className="text-2xl text-white">Message Us</h2>
      <ContactForm />
    </div>
  );
}
