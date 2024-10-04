"use client";
import { Badge } from "@/components/ui/badge";
import React from "react";

const AnnouncementCard = ({ color }: { color: string }) => {
  return (
    <div className={`py-3 px-4  ${color} rounded-lg w-full`}>
      <h3 className="font-semibold text-secondary-foreground flex flex-col sm:flex-row justify-between items-start pb-2 sm:items-center">
        <span>Lorem ipsum dolor sit.</span>
        <Badge className="shadow-none bg-white/80 text-[11px] sm:text-xs">
          1/12/2024
        </Badge>
      </h3>
      <p className="text text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae id,
        perferendis, voluptatum quibusdam accusantium...
      </p>
    </div>
  );
};

export default AnnouncementCard;
