import React from "react";
import Link from "next/link";
import AnnouncementCard from "../Cards/AnnouncementCard/AnnouncementCard";

const Announcements = () => {
  return (
    <div className="py-3 px-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl"> Announcements</h2>
        <Link href="/admin" className="underline text text-xs md:text-sm">
          View all
        </Link>
      </div>
      <AnnouncementCard color="bg-primary/70" />
      <AnnouncementCard color="bg-chart-3/70" />
      <AnnouncementCard color="bg-chart-4/70" />
    </div>
  );
};

export default Announcements;
