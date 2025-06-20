import React from "react";
import home from "../../src/Assets/Home.svg";
import edit from "../../src/Assets/EditBlue.svg";

export default function Sidebar() {
  return (
    <aside className="w-48 sm:w-56 md:w-60 lg:w-64 mt-10  fixed top-0 left-0 z-10   ">
      <nav className="mt-4">
        <ul>
          <li className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3">
            <img src={home} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Home</span>
          </li>
          <li className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 text-blue-600">
            <img src={edit} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Application</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
