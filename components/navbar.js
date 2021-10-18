import Link from "next/link";
import Image from "next/image";
import MenuDropdown from "./menu_dropdown";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isCurrentRoute, setRoute] = useState("/");
  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath !== null) {
      setRoute(asPath);
    }
  });

  return (
    <div className="absolute z-20 min-w-full">
      <nav className="flex flex-row px-10 lg:px-28 py-4 justify-between align-center bg-primary">
        <div className="lg:flex-row hidden lg:flex lg:order-2">
          <Link href="/">
            <a
              className={`pr-10 py-0 self-center leading-none font-body ${
                isCurrentRoute === "/" ? `font-semibold` : ``
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/resources">
            <a
              className={`px-10 py-0 self-center font-body ${
                isCurrentRoute === "/resources" ? `font-semibold` : ``
              }`}
            >
              Resources
            </a>
          </Link>
          <button 
            className="bg-secondary hover:bg-red-800 text-white font-body text-sm ml-6 py-1.5 px-4 rounded shadow"
            onClick={() => {
              window.open("https://www.buymeacoffee.com/fullstackdre");
            }}
          >
            Support us
          </button>
        </div>
        <div className="flex lg:hidden self-center">
          <MenuDropdown />
        </div>
        <Link href="/">
          <div className="logo lg:order-1 cursor-pointer">
            <Image alt="logo" src="/logo.png" width="160px" height="34px"></Image>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
