"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Pagination_s from "@/components/Pagination/Pagination";
import Search from "../Search/Search";
import { Button } from "../ui/button";
import { Filter, Plus, SortAsc } from "lucide-react";

const List = ({
  list,
  tableHeaders,
  title,
  itemsPerPage = 5, // Default items per page
}: {
  list: any[];
  tableHeaders: any[];
  title: string;
  itemsPerPage?: number; // Optional prop for items per page
}) => {
  const [search, setSearch] = useState<string>(""); // Search state
  const [currentPage, setCurrentPage] = useState<number>(1); // Pagination state
  const [filteredData, setFilteredData] = useState<any[]>(list); // Filtered list data

  // Filter logic for search
  useEffect(() => {
    const filtered = list.filter(
      (item) => item.name.toLowerCase().includes(search.toLowerCase()) // You can update this for other fields too
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page after search
  }, [search, list]);

  // Pagination logic
  const indexOfLastStudent = currentPage * itemsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - itemsPerPage;
  const currentStudents = filteredData.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Search Bar */}
      <div className="flex justify-between md:flex-row flex-col gap-4">
        <h2 className="font-semibold text-xl">{title}</h2>
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

      {/* Table of Students */}
      {currentStudents && currentStudents.length > 0 ? (
        <>
          <Table className="lg:w-full w-[845px] text">
            <TableHeader>
              <TableRow>
                {tableHeaders.map((header) => (
                  <TableHead
                    key={header.key}
                    className={header.key === "address" ? "text-right" : ""}
                  >
                    {header.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentStudents.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="flex items-center gap-2 w-48">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      className="object-cover w-10 h-10 rounded-full"
                      width={40}
                      height={40}
                    />
                    <div className="leading-none">
                      <span className="block font-semibold">{item.name}</span>
                      <small>{item.email}</small>
                    </div>
                  </TableCell>
                  <TableCell>{item.id}</TableCell>
                  {item.subjects && (
                    <TableCell>{item.subjects.join(", ")}</TableCell>
                  )}
                  <TableCell>{item.phone}</TableCell>
                  {item.grade && <TableCell>{item.grade}</TableCell>}
                  {item.class && <TableCell>{item.class}</TableCell>}
                  {item.classes && (
                    <TableCell>{item.classes.join(", ")}</TableCell>
                  )}
                  <TableCell className="text-right">{item.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <Pagination_s
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <h6 className="text text-xs py-5 sm:text-sm">
          Nothing matched your search.
        </h6>
      )}
    </>
  );
};

export default List;
