"use client";

import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { HiDotsVertical } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { useState } from "react";
const sidebarItems = [
  {
    icon: <MdDashboard size={24} />,
    text: "Dashboard",
    alert: true,
  },
  {
    icon: <FaRegUserCircle size={24} />,
    text: "Profile",
    alert: false,
  },
  {
    icon: <MdOutlineInsertChartOutlined size={24} />,
    text: "Reports",
    alert: true,
  },
];

function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`h-screen ${
        expanded ? "w-2/12" : "w-16"
      } transition-all duration-300`}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/325.svg"
            alt="user's photo"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <HiChevronLeft size={20} />
            ) : (
              <HiChevronRight size={20} />
            )}
          </button>
        </div>

        <ul className="flex-1 px-3">
          {sidebarItems.map((item, index) => (
            <SideBarItem
              key={index}
              icon={item.icon}
              text={item.text}
              alert={item.alert}
              expanded={expanded}
            />
          ))}
        </ul>
        <div className="border-t  flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=random"
            alt="User's photo"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center w-52 ml-3 overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Alexander Yordanov</h4>
              <span className="text-xs text-gray-600">
                a.yordanow70@gmail.com
              </span>
            </div>
            <HiDotsVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SideBarItem({ icon, text, alert, expanded }) {
  return (
    <li
      className={`flex items-center p-2 my-2 font-medium rounded-md cursor-pointer transition-colors relative group 
   `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3 " : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}
      {!expanded && (
        <div
          className={`absolute left-full round-mb px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-xc-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export default Sidebar;
