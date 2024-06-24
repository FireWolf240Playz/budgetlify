"use client";

import UserImage from "@/public/men.jpg";
import Image from "next/image";
import { useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

function Navigation() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white shadow-md">
      <ul className="flex items-center gap-4 ml-auto">
        <li>
          <Image
            src={UserImage}
            alt="User's photo"
            width={28}
            height={28}
            className="rounded-full"
          />
        </li>
        <li>
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-accent-50 transition-all"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? <GoSun size={28} /> : <GoMoon size={28} />}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
