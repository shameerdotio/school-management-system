import Link from "next/link";

export default function Home() {
  return (
    <div className="space-x-4">
      <span>Hello, world</span>
      <Link href="/admin" className="text-blue-400 underline">
        Admin
      </Link>
      <Link href="/parent" className="text-blue-400 underline">
        Parent
      </Link>
      <Link href="/student" className="text-blue-400 underline">
        Student
      </Link>
    </div>
  );
}
