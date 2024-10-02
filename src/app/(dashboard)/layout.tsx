import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "School management system dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex p-2 pr-0">
      {/* side bar */}
      <div className="h-full border rounded-xl overflow-y-auto px-[2px] py-4 lg:p-4 w-[20%] md:w-[10%] lg:w-[18%] xl:w-[16%] bg-card  shadow-d z-10">
        <Sidebar />
      </div>
      {/* children */}
      <div className="w-[84%] md:w-[90%] lg:w-[84%] xl:w-[84%] bg-zinc-50 dark:bg-black overflow-y-auto p-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
