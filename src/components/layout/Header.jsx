import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-6 border-b-2 border-black">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">React E-Commerce Kit</div>
        <ul className="flex space-x-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/components">Components</Link>
          </li>
          <li>
            <Link href="/packages">Packages</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
