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
    <div className="h-screen flex">
      {/* side bar */}
      <div className="h-screen overflow-y-auto px-[2px] py-4 lg:p-4 w-[20%] md:w-[10%] lg:w-[18%] xl:w-[16%] dark:bg-gradient-to-tr from-card to-secondary">
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
