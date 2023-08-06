import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/memorial-range", label: "Memorial Range" },

  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact" },
  { href: "/articles", label: "Articles" },
];

export default function Navlist() {
  return (
    <div className="hidden w-full px-5 py-2 mt-5 bg-white lg:justify-center lg:flex">
      <ul className="flex flex-row justify-between w-2/4 mx-8 lg:ml-[-50px]">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`} >
            <Link
              href={href}
              className="text-2xl uppercase text-slate-600 hover:text-slate-900"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
