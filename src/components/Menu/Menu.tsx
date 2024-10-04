"use client";
import { menuItems } from "@/lib/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";

const Menu = () => {
  const [user, setUser] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  });

  return (
    <div className="flex flex-col">
      {menuItems.map((item) => (
        <div key={item.title}>
          {/* <h2 className="text-xs md:text-base text-center lg:text-start py-4 text-muted-foreground font-semibold">
            {item.title}
          </h2> */}
          <div className="py-3">
            <Separator />
          </div>

          <div className="flex flex-col gap-2">
            {/* listing links */}
            {item.items.map((link) =>
              link.visible.includes(user) ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="gradient rounded-lg focus:bg-zinc-300/30 py-2 md:p-3 hover:bg-zinc-300/30 flex gap-3 justify-center items-center flex-col lg:flex-row lg:justify-start w-full text text-wrap"
                >
                  <link.icon />
                  <span className="text-xs lg:text-base"> {link.label}</span>
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
