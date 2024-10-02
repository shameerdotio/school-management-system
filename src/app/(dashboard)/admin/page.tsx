import Announcements from "@/components/Announcements/Announcements";
import CardWrapper from "@/components/CardWrapper/CardWrapper";
import { Barchart } from "@/components/Charts/BarChart";
import { Linechart } from "@/components/Charts/LineChart";
import { RadialChart } from "@/components/Charts/RadialChart";
import EventCalender from "@/components/EventCalender/EventCalender";
import Events from "@/components/Events/Events";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <div className="py-5 w-full flex gap-4 flex-col md:flex-row">
      {/* left  */}
      <div className="w-full md:w-2/3">
        {/* cards */}
        <CardWrapper />
        {/* charts */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 py-4">
          <div className="md:w-full lg:w-1/2 xl:w-1/3">
            <RadialChart />
          </div>
          <div className="md:w-full lg:w-1/2 xl:w-2/3">
            <Barchart />
          </div>
        </div>
        <div>
          <Linechart />
        </div>
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
