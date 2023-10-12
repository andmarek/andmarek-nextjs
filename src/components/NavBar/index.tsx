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
    <nav className="bg-raisin-black p-4 w-full font-mono">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <Link className="text-2xl text-champagne-pink hover:text-papaya-whip hover:drop-shadow-glow font-bold transition-all duration-500" href="/">
            andmarek
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
