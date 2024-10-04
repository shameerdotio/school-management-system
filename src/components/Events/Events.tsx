import React from "react";
import EventCard from "../Cards/EventCard/EventCard";
import Link from "next/link";

const Events = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl"> Events</h2>
        <Link href="/admin" className="underline text text-xs md:text-sm">
          View all
        </Link>
      </div>
      <EventCard color="border-t-primary/50" />
      <EventCard color="border-t-chart-2/50" />
      <EventCard color="border-t-chart-4/50" />
    </div>
  );
};

export default Events;
