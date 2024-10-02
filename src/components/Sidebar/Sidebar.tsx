import logo from "@/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "@/components/Menu/Menu";
import { ThemeToggle } from "../Theme/theme-toggle";

const Sidebar = () => {
  return (
    <>
      <div className="flex items-center 2xl:justify-between w-full 2xl:flex-row flex-col gap-4 ">
        <Link
          className="px-2 flex gap-2 items-center justify-center lg:justify-start"
          href="/"
        >
          <Image src={logo} alt="site-logo" width={30} height={30} />
          <span className="font-bold text-lg lg:block hidden">School MS</span>
        </Link>
        <ThemeToggle />
      </div>

      {/* menu */}
      <Menu />
    </>
  );
};

export default Sidebar;
