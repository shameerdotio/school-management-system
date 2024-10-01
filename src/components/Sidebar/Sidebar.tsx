import logo from "@/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "@/components/Menu/Menu";

const Sidebar = () => {
  return (
    <>
      <Link
        className="px-2 flex gap-2 items-center justify-center lg:justify-start"
        href="/"
      >
        <Image src={logo} alt="site-logo" width={30} height={30} />
        <span className="font-bold text-lg lg:block hidden">School MS</span>
      </Link>

      {/* menu */}
      <Menu />
    </>
  );
};

export default Sidebar;
