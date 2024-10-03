// src/components/Navbar.tsx
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";



export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Home
        </Link>
        <div className="space-x-4">
          <Link href="/blog" className="text-gray-300 hover:text-white">
            Explore Blogs
          </Link>
          {/* Add the Dark Mode Toggle button in the navbar */}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
