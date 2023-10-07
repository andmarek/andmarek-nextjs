import Link from "next/link";
import React from "react";
import NavLink from "./navLink";

export default function NavBar(): React.JSX.Element {
  const links = [
    ["home", "/"],
    ["about", "/about"],
    ["resume", "/resume"],
    ["projects", "/projects"],
  ];

  return (
    <nav className="bg-raisin-black text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link className="text-2xl hover:text-3xl font-bold transition-all duration-500" href="/">
            Andrew
          </Link>
        </div>
        <div className="space-x-4">
          {links.map(([linkText, destination], index) => (
            <NavLink
              key={index}
              linkText={linkText}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
