"use client";
import { menuItems } from "@/lib/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Menu = () => {
  const [path, setPath] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    console.log("Menu Mounted");
    setPath(pathname.split("/")[1]);

    return () => console.log("Menu UnMounted");
  }, []);

  return (
    <div className="flex flex-col">
      {menuItems.map((item) => (
        <div key={item.title}>
          <h2 className="text-xs md:text-base text-center lg:text-start py-4 text-muted-foreground font-semibold">
            {item.title}
          </h2>

          <div className="flex flex-col">
            {/* listing links */}
            {item.items.map((link) =>
              link.visible.includes(path) ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="gradient rounded-lg focus:bg-zinc-300/30 py-2 md:p-3 hover:bg-zinc-300/30 flex gap-3 justify-center lg:justify-start text"
                >
                  <link.icon />
                  <span className="hidden lg:block"> {link.label}</span>
                </Link>
              ) : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
