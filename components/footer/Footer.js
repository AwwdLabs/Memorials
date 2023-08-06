import React from "react";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative pt-10 text-xl text-center text-white border-t bg-slate-800 border-slate-700 lg:text-left">
      <div className="w-full   lg:w-[80%] lg:mx-auto lg:grid lg:grid-cols-4 lg:gap-4 lg:mt-10 mb-20">
        <div>
          <h2 className="mt-5 text-4xl text-slate-500">Our Company</h2>
          <div className="mt-5 text-white">
            <p className="mb-5 font-semibold ">Marcos Memorials LTD</p>
            <p>Ashby Road</p>
            <p>Loughborough</p>
            <p>Leicestershire</p>
            <p>LE11 3AB</p>
          </div>
          <div className="mt-5 text-white">
            <p>07770876967679</p>
            <p>info@marcosmemorials.com</p>
          </div>
        </div>
        <div>
          <h2 className="mt-5 mb-5 text-2xl text-slate-500">Pages</h2>
          <ul className="mb-5">
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Memorial Range</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Contact</li>
            <li className="mb-2">Blog</li>
          </ul>
        </div>
        <div>
          <h2 className="mt-5 text-2xl text-slate-500">Help & Info</h2>
          <ul className="mt-5">
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Terms & Conditions</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Cookie Policy</li>
            <li className="mb-2">Delivery & Returns</li>
          </ul>
        </div>
        <div>
          <h2 className="mt-5 text-2xl text-slate-500">Opening Hours</h2>
          <ul className="mt-5">
            <li className="mb-2">Monday - Friday: 9am - 5pm</li>
            <li className="mb-2">Saturday: 9am - 1pm</li>
            <li className="mb-2">Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center bg-slate-800 mt-[-40px]  lg:mx-auto border-t pt-7 border-slate-700 text-xl  text-gray-300 pb-5 text-center">
        © MARCOSMEMORIALS LTD 2023 · ALL RIGHTS RESERVED ·
      </div>
    </div>
  );
}
