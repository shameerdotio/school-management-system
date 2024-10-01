import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Megaphone, MessageCircleMore, Speaker } from "lucide-react";
import { PersonIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Input } from "../ui/input";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex md:justify-between justify-end items-center w-full">
      <div className="hidden md:block">
        <Input placeholder="Search" className="px-4 w-60" />
      </div>

      {/* profile info */}
      <div className="flex gap-4 items-center">
        <Megaphone className="text-muted-foreground cursor-pointer" />
        <MessageCircleMore className="text-muted-foreground cursor-pointer" />
        <Link href="/" className="flex gap-4 cursor-pointer">
          <div className="text-end flex flex-col justify-center items-end">
            <span className="text">John Doe</span>
            <Badge variant="default">Admin</Badge>
          </div>
          <div>
            <Avatar className="w-14 h-14">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
