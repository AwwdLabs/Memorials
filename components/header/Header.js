import {useState, useEffect } from "react";

import ContactHead from "../contact/ContactHead";
import ContactCard from "../contact/ContactCard";
import Logo from "../branding/Logo";
import Toggle from "./Toggle";
import Navmenu from "./Navmenu";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <div className="w-full bg-white">
     <div className="flex items-center justify-between px-5 py-3 border-b lg:w-[70%] lg:m-auto z-50 bg-white">
      <ContactHead className="z-10" />
      <Logo />
      <Toggle setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
      <ContactCard />
    </div>
   {menuOpen && <Navmenu setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>}
   </div>
  );
}
