










import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaBars,
  FaBuilding,
  FaUsers,
  FaBriefcase,
  FaInfoCircle
} from "react-icons/fa";

const About = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col bg-gray-100">

{/* 
      <header className="bg-white shadow p-6 text-center sticky top-0 z-50">
        <h1 className="text-3xl font-bold">About Our Company</h1>
      </header> */}

      {/* Takes remaining height after header */}
      <div className="flex flex-1 overflow-hidden">

        <aside
          className={`bg-gray-800 text-white transition-all duration-300 
          ${isOpen ? "w-64" : "w-20"} h-full p-4 flex flex-col`}
        >

          {/* Collapse Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mb-6"
          >
            <FaBars size={20} />
          </button>

          <nav className="space-y-4 flex-1">

            <NavLink
              to="overview"
              end
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition
                ${isActive ? "bg-gray-700" : ""}`
              }
            >
              <FaInfoCircle />
              {isOpen && <span>Overview</span>}
            </NavLink>

            <NavLink
              to="company"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition
                ${isActive ? "bg-gray-700" : ""}`
              }
            >
              <FaBuilding />
              {isOpen && <span>Company</span>}
            </NavLink>

            <NavLink
              to="team"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition
                ${isActive ? "bg-gray-700" : ""}`
              }
            >
              <FaUsers />
              {isOpen && <span>Team</span>}
            </NavLink>

            <NavLink
              to="career"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition
                ${isActive ? "bg-gray-700" : ""}`
              }
            >
              <FaBriefcase />
              {isOpen && <span>Career</span>}
            </NavLink>

          </nav>
        </aside>


       
        {/* Only this area scrolls */}
        <main className="flex-1 p-6 overflow-y-auto">

          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>

        </main>

      </div>
    </div>
  );
};

export default About;
