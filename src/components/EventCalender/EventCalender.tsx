"use client";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

const EventCalender = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="w-full rounded-lg border border-black"
    />
  );
};

export default EventCalender;
