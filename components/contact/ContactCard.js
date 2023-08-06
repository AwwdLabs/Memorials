import React from "react";

import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function ContactCard() {
  return (
    <div className="hidden lg:flex ">
      {/* tel no: +447739616 */}
      <div className="flex flex-col items-center uppercase justify-centertext-right ">
        <p className="font-bold text-right text-zinc-700">
          <a href="tel:+447739616" className="hover:text-slate-700">
            <IoCall className="inline-block mr-2 text-2xl text-slate-700" />
            
          </a>
        </p>
      </div>
      {/* email */}
      <div className="flex flex-col justify-center text-right uppercase ">
        <p className="mb-5 font-bold text-gray-900 text-[14px]">
          <a
            href="mailto:
            info@marcosmemorials.com"
            className="hover:text-slate-700"
          >
            <MdEmail className="inline-block mr-2 text-2xl text-slate-700" />
          </a>
        </p>
      </div>
    </div>
  );
}
