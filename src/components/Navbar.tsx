// src/components/Navbar.tsx
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import MobileNav from "./MobileNav";
import SearchButton from "./SearchButton";
import siteMetadata from "../data/siteMetadata";

const headerNavLinks = [
  { title: "Home", href: "/" },
  { title: "Blogs", href: "/blog" },
  { title: "About", href: "/about" },
];

const Navbar = () => {
  let headerClass =
    "flex items-center w-full bg-white dark:bg-gray-950 justify-between py-4 ";
  if (siteMetadata.stickyNav) {
    headerClass += "sticky top-0 z-50";
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          {typeof siteMetadata.headerTitle === "string" ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))}
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
