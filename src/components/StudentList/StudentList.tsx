import React from "react";
import { Filter, Plus, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { studentsData } from "@/lib/data";
import List from "../List/List";

const studentTableHeaders = [
  { label: "Name", key: "name" },
  { label: "Student ID", key: "studentId" },
  { label: "Phone", key: "phone" },
  { label: "Grade", key: "grade" },
  { label: "Class", key: "class" },
  { label: "Address", key: "address" },
];

const StudentList = () => {
  return (
    <div className="p-4 w-full bg-card rounded-xl shadow-d mt-4">
      {/* List of Students */}
      <div className="overflow-x-auto">
        <List
          title="Student List"
          tableHeaders={studentTableHeaders}
          list={studentsData}
        />
      </div>
    </div>
  );
};

export default StudentList;
