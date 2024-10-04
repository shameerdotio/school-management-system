"use client";
import Link from "next/link";
import React from "react";

const Navbar_s = () => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center h-screen">
      <h2 className="font-bold text-5xl text-center">
        School Management System
      </h2>
      <ul className="flex gap-3 text-sm md:text-base justify-center flex-wrap py-10">
        <li
          onClick={() => localStorage.setItem("user", JSON.stringify("admin"))}
        >
          <Link
            href="/admin"
            className="text-blue-400/80 border border-border hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg"
          >
            Admin
          </Link>
        </li>
        <li
          onClick={() => localStorage.setItem("user", JSON.stringify("parent"))}
        >
          <Link
            href="/parent"
            className="text-blue-400/80 border border-border hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg"
          >
            Parent
          </Link>
        </li>
        <li
          onClick={() =>
            localStorage.setItem("user", JSON.stringify("student"))
          }
        >
          <Link
            href="/student"
            className="text-blue-400/80 border border-border hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg"
          >
            Student
          </Link>
        </li>
        <li
          onClick={() =>
            localStorage.setItem("user", JSON.stringify("teacher"))
          }
        >
          <Link
            href="/teacher"
            className="text-blue-400/80 border border-border hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg"
          >
            Teacher
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar_s;
