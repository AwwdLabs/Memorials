import React from "react";
import Link from "next/link";

import Toggle from "./Toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/memorial-range", label: "Memorial Range" },

  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact" },
  { href: "/articles", label: "Articles" },
];

export default function Navmenu({ setMenuOpen, menuOpen }) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-40 w-full h-screen bg-gray-800 lg:hidden">
      <div className="flex justify-between p-5">
        <div>Namenu</div>
        <Toggle setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      </div>
      <div className="flex flex-col h-full mt-40">
        <ul className="flex flex-col items-center justify-center">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className="p-2">
              <Link
                href={href}
                className="text-2xl text-slate-400 hover:text-slate-900"

                onClick={() => setMenuOpen(!menuOpen)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
