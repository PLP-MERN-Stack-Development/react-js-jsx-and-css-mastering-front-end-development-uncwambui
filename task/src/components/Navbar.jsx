import React from "react";

export default function Navbar({ onNavigate, currentPage, darkMode, toggleDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* App Name */}
        <h1
          onClick={() => onNavigate("home")}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer"
        >
          PLP Task Manager
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <button
              onClick={() => onNavigate("home")}
              className={`hover:text-blue-500 ${
                currentPage === "home" ? "font-semibold text-blue-600 dark:text-blue-400" : ""
              }`}
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => onNavigate("task")}
              className={`hover:text-blue-500 ${
                currentPage === "task" ? "font-semibold text-blue-600 dark:text-blue-400" : ""
              }`}
            >
              Tasks
            </button>
          </li>

          <li>
            <button
              onClick={() => onNavigate("api")}
              className={`hover:text-blue-500 ${
                currentPage === "api" ? "font-semibold text-blue-600 dark:text-blue-400" : ""
              }`}
            >
              API
            </button>
          </li>

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="ml-4 px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded-lg text-sm hover:opacity-80 transition"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
