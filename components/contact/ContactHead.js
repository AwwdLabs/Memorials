import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import Search from "../header/Search";
import Socials from "../header/Socials";

export default function ContactHead() {
  return (
    <div className="flex">
      <div className="flex md:hidden">
        <a href="tel:+447739616" className="hover:text-slate-700">
          <IoCall className="inline-block mr-2 text-2xl text-slate-700" />
        </a>
        <a
          href="mailto:
            info@marcosmemorials.com"
          className="hover:text-slate-700"
        >
          <MdEmail className="inline-block mr-2 text-2xl text-slate-700" />
        </a>
      </div>
      <div className="hidden md:inline-block">
        <Socials />
      </div>
    </div>
  );
}
