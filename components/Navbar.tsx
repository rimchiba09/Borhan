import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LOGO from '../public/assist/logo.png'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-[#020818]" role="navigation" aria-label="main navigation">
        <div className="navbar-brand ">
          <a className="flex align-middle my-auto " href="https://bulma.io">
            <Image
                src={LOGO}
                width="112"
                height="312"
                alt="logo"
                className="w-[7rem] h-[6rem] my-auto"
            />
            <p className="font-bold text-3xl flex align-middle my-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">BOURHAN</p>
          </a>
          

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
