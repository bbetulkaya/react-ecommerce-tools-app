import Link from "next/link";
import React, { useState } from "react";

export default function HeaderTest() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="border-b border-gray-400">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between h-16 px-5">
        <div className="">
          {/* Left Side Icon/Name */}
          <Link href={"#"} className="text-lg font-mono">
            React E-commerce Kit
          </Link>
        </div>
        <div>
          <div className="hidden sm:block">
            <ul className="flex gap-5">
              <li>
                <Link href={"/components"}>Components</Link>
              </li>
              <li>
                <Link href={"/packages"}>Packages</Link>
              </li>
            </ul>
          </div>
          <button className="sm:hidden" onClick={handleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-400 z-50">
          <Link
            href={"/components"}
            className="block px-5 py-3 hover:bg-gray-200"
          >
            Components
          </Link>
          <Link
            href={"/packages"}
            className="block px-5 py-3 hover:bg-gray-200 "
          >
            Packages
          </Link>
        </div>
      )}
    </header>
  );
}
