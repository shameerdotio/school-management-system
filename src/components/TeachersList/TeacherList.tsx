"use client";
import Pagination_s from "@/components/Pagination/Pagination";
import TeacherSearch from "@/components/Search/TeacherSearch";
import { Filter, Plus, SortAsc } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { teachersData } from "@/lib/data";
import List from "../List/List";
import { useDebounce } from "use-debounce";

interface Teacher {
  id: number;
  teacherId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

type TeachersTypes = Teacher[];

const TeacherList = () => {
  const [search, setSearch] = useState<string>("");
  const [filteredTeachers, setFiltered] = useState<TeachersTypes>(teachersData);
  const [debouncedValue] = useDebounce(search, 300);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const lowercaseSearch = search.toLowerCase();
    const filtered = teachersData.filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(lowercaseSearch) ||
        teacher.email.toLowerCase().includes(lowercaseSearch)
    );

    setFiltered(filtered);
    setCurrentPage(1);
  }, [debouncedValue]);

  const indexOfLastTeacher = currentPage * itemsPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - itemsPerPage;
  const currentTeachers = filteredTeachers.slice(
    indexOfFirstTeacher,
    indexOfLastTeacher
  );

  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 w-full bg-card rounded-xl shadow-d mt-4">
      <div className="flex justify-between md:flex-row flex-col gap-4">
        <h2 className="font-semibold text-xl">Teachers List</h2>
        <div className="flex gap-3 md:flex-row flex-col ">
          <TeacherSearch onSearch={setSearch} />

          {/* buttons */}
          <div className="flex gap-4 justify-end">
            <Button className="w-10 h-10 p-2 rounded-full">
              <Filter className="w-11/12 " />
            </Button>
            <Button className="w-10 h-10 p-2 rounded-full">
              <SortAsc className="w-11/12 " />
            </Button>
            <Button className="w-10 h-10 p-2 rounded-full">
              <Plus className="w-11/12 " />
            </Button>
          </div>
        </div>
      </div>

      {/* list of teachers */}
      <div className="overflow-x-auto">
        <List list={currentTeachers} />
      </div>

      {/* pagination */}
      <Pagination_s
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TeacherList;
