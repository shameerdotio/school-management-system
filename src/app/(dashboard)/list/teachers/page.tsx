import { RadialChart } from "@/components/Charts/RadialChart";
import AddTeacher from "@/components/Forms/AddTeacher";
import TeacherList from "@/components/TeachersList/TeacherList";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <TeacherList />
      <div className="flex gap-4 md:flex-row flex-col">
        <div className="md:w-full lg:w-1/2 xl:w-1/3">
          <RadialChart total={500} male={300} female={200} />
        </div>
        <div className="md:w-full lg:w-1/2 xl:w-1/3">
          <AddTeacher />
        </div>
      </div>
    </div>
  );
};

export default page;
