"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
import MobileNav from "./MobileNav";
import SearchButton from "./SearchButton";
import siteMetadata from "../data/siteMetadata";

const headerNavLinks = [
  { title: "Home", href: "/" },
  { title: "Blogs", href: "/blog" },
  { title: "Tags", href: "/tags" },
  { title: "About", href: "/about" },
];

const Navbar = () => {
  let headerClass =
    "flex items-center w-full bg-white dark:bg-gray-950 justify-between py-4 ";
  if (siteMetadata.stickyNav) {
    headerClass += "sticky top-0 z-50";
  }

  const pathname = usePathname() || "";

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          {typeof siteMetadata.headerTitle === "string" ? (
            <div className="text-gradient-blue text-2xl font-semibold">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="hidden max-w-40 items-center space-x-4 sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => {
              // Check if the route is active or if it's a nested route under the current section
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`block font-medium ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 underline" // Active route styles
                      : "text-gray-900 hover:text-blue-600 hover:underline dark:text-gray-100 dark:hover:text-blue-400"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
        </div>

        {/* Search Button */}
        <SearchButton />

        {/* Dark Mode Switch */}
        <ThemeSwitch />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
