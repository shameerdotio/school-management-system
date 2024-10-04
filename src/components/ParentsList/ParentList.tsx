"use client";

import React, { useEffect, useState } from "react";
import Pagination_s from "@/components/Pagination/Pagination";
import { Filter, Plus, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { parentsData } from "@/lib/data";
import List from "../List/List";
import useSearch from "@/hooks/useSearch";
import Search from "../Search/Search";

const parentTableHeaders = [
  { label: "Name", key: "name" },
  { label: "parent ID", key: "parentId" },
  { label: "Subjects", key: "subjects" },
  { label: "Phone", key: "phone" },
  { label: "Classes", key: "classes" },
  { label: "Address", key: "address" },
];

const ParentList = () => {
  const { search, setSearch, filteredData } = useSearch(parentsData);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Reset the current page to 1 when filteredData changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  const indexOfLastParent = currentPage * itemsPerPage;
  const indexOfFirstParent = indexOfLastParent - itemsPerPage;
  const currentParents = filteredData.slice(
    indexOfFirstParent,
    indexOfLastParent
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 w-full bg-card rounded-xl shadow-d mt-4">
      <div className="flex justify-between md:flex-row flex-col gap-4">
        <h2 className="font-semibold text-xl">parents List</h2>
        <div className="flex gap-3 md:flex-row flex-col ">
          <Search onSearch={setSearch} />
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

      {/* List of parents */}
      <div className="overflow-x-auto">
        <List tableHeaders={parentTableHeaders} list={currentParents} />
      </div>

      {/* Pagination */}
      <Pagination_s
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ParentList;
