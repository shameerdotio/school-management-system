"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useState } from "react";
import { calendarEvents } from "@/lib/data";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleView = (selected: View) => {
    setView(selected);
  };

  console.log(calendarEvents);
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      onView={handleView}
      view={view}
      style={{ height: "95%" }}
      min={new Date(2024, 9, 0, 8, 0, 0)} // October 2024, 8 AM
      max={new Date(2024, 9, 0, 18, 0, 0)} // October 2024, 6 PM
    />
  );
};

export default BigCalendar;
