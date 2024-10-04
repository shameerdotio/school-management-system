"use client";
import { usePathname } from "next/navigation";

export default function Loading() {
  const pathname = usePathname();
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="animate-spin border-[15px] border-t-blue-500 rounded-full w-16 h-16"></div>
    </div>
  );
}
