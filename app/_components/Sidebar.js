"use client";

import { HiChevronLeft, HiChevronRight, HiDotsVertical } from "react-icons/hi";
import { MdDashboard, MdOutlineInsertChartOutlined } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

import { useWidth } from "../_hooks/useWidth";

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
  const width = useWidth();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (width < 1000) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }, [width]);

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
            className={`overflow-hidden transition-all duration-300 ${
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
              active={index === 0} // Example: Set the first item as active
              alert={item.alert}
              expanded={expanded}
            />
          ))}
        </ul>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=random"
            alt="User's photo"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
              expanded ? "ml-3" : "ml-0"
            }`}
          >
            {expanded && (
              <div className="leading-4">
                <h4 className="font-semibold">Alexander Yordanov</h4>
                <span className="text-xs text-gray-600">
                  a.yordanow70@gmail.com
                </span>
              </div>
            )}
            <HiDotsVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

function SideBarItem({ icon, text, active, alert, expanded }) {
  return (
    <li
      className={`flex items-center p-2 my-2 font-medium rounded-md cursor-pointer transition-colors relative ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "ml-3" : "ml-0"
        } ${expanded ? "w-auto" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div className="absolute right-2 w-2 h-2 rounded bg-indigo-400"></div>
      )}
    </li>
  );
}

export default Sidebar;
