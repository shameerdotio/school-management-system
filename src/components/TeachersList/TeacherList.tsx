"use client";

import React, { useEffect, useState } from "react";
import Pagination_s from "@/components/Pagination/Pagination";
import { Filter, Plus, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teachersData } from "@/lib/data";
import List from "../List/List";
import useSearch from "@/hooks/useSearch";
import Search from "../Search/Search";

const teacherTableHeaders = [
  { label: "Name", key: "name" },
  { label: "Teacher ID", key: "teacherId" },
  { label: "Subjects", key: "subjects" },
  { label: "Phone", key: "phone" },
  { label: "Classes", key: "classes" },
  { label: "Address", key: "address" },
];

const TeacherList = () => {
  return (
    <div className="p-4 w-full bg-card rounded-xl shadow-d mt-4">
      {/* List of teachers */}
      <div className="overflow-x-auto">
        <List
          title="Teacher List"
          tableHeaders={teacherTableHeaders}
          list={teachersData}
        />
      </div>
    </div>
  );
};

export default TeacherList;
