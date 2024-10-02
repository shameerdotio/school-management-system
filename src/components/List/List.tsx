"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

import React from "react";

const List = ({ list }: { list: any }) => {
  return (
    <>
      {list && list.length > 0 ? (
        <Table className="lg:w-full w-[845px] text">
          <TableHeader>
            <TableRow>
              <TableHead className="w-56">Teacher</TableHead>
              <TableHead>TeacherID</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Subjects</TableHead>
              <TableHead>Classes</TableHead>
              <TableHead className="text-right">Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list?.map((item: any) => (
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
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.subjects.join(", ")}</TableCell>
                <TableCell>{item.classes.join(", ")}</TableCell>
                <TableCell className="text-right">{item.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <h6 className="text text-xs py-5 sm:text-sm">
          Nothing matched with your search.
        </h6>
      )}
    </>
  );
};

export default List;
