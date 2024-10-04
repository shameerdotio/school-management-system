import Announcements from "@/components/Announcements/Announcements";
import EventCalender from "@/components/EventCalender/EventCalender";
import Events from "@/components/Events/Events";
import BigCalendar from "@/components/ui/big-calender";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <div className="py-5 w-full flex gap-4 flex-col md:flex-row">
      {/* left  */}
      <div className="p-4 w-full bg-card rounded-xl shadow-d md:w-2/3 ">
        <h2 className="font-semibold text-xl">Schedule (John Doe)</h2>
        <BigCalendar />
      </div>
      {/* events */}
      <div className="rounded-xl w-full md:w-1/3 bg-card shadow-d h-max">
        <EventCalender />
        <Separator />
        <Events />
        <Separator />
        <Announcements />
      </div>
    </div>
  );
};

export default page;
