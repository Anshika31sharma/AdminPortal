import React from "react";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import edit from "../src/Assets/EditBlack.svg";

function App() {
  const [activeTab, setActiveTab] = useState("All");
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setShowSidebar(false);
      }
    };
    if (showSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);

  return (
    <div className="flex relative min-h-screen  ">
      {showSidebar && (
        <div className="fixed inset-0 min-h-screen  bg-opacity-30 z-20 lg:hidden" />
      )}

      <div
        ref={sidebarRef}
        className={`bg-white shadow-md transition-transform duration-300 ease-in-out
    fixed top-0 left-0 z-30 h-screen
    ${showSidebar ? "translate-x-0" : "-translate-x-full"}
    w-48 md:w-60 lg:w-64 lg:translate-x-0`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 w-full lg:ml-64 ">
        <Navbar onMenuClick={() => setShowSidebar(true)} />
        <div className="pt-16 lg:pt-20 px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
            <img src={edit} alt="" className="w-4 h-4 md:w-5 md:h-5" />
            <h1 className="text-xl md:text-2xl font-bold">Applications</h1>
            <span className="text-xs md:text-sm bg-amber-400 text-white py-0.5 md:py-1 px-2 md:px-3 rounded-2xl">
              34 new
            </span>
          </div>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <Table activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default App;
