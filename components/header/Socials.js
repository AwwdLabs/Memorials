import React from "react";
import Link from "next/link";

import { BsInstagram, BsFacebook } from "react-icons/bs";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { GrFacebook, GrInstagram } from "react-icons/gr";

export default function Socials() {
  return <div className="flex items-center">
    <Link href="https://www.instagram.com/marcosmemorials/" legacyBehavior>
      <a className="mr-2 text-2xl text-slate-600 hover:text-slate-700">
        <GrInstagram />
      </a>
    </Link>
    <Link href="https://www.facebook.com/marcosmemorials" legacyBehavior>
      <a className="text-2xl text-slate-600 hover:text-slate-700">
        <GrFacebook />
      </a>
    </Link>
  </div>;
}
