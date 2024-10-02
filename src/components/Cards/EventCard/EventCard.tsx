"use client";
import React from "react";

const EventCard = ({ color }: { color: string }) => {
  return (
    <div
      className={`py-3 px-4 border border-accent-foreground/30 border-t-4 ${color} rounded-lg w-full`}
    >
      <h3 className="font-semibold text-secondary-foreground flex flex-col sm:flex-row justify-between sm:items-center pb-2">
        <span>Lorem ipsum dolor sit.</span>
        <span className="text text-[11px] sm:text-xs">12:00pm - 3:00pm</span>
      </h3>
      <p className="text text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae id,
        perferendis, voluptatum quibusdam accusantium...
      </p>
    </div>
  );
};

export default EventCard;
