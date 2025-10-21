import React, { useState, useEffect } from "react";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Task from "./pages/Task";
import ApiList from "./pages/APIList";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Add/remove dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); 
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <Navbar
        onNavigate={setPage}
        currentPage={page}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main content */}
      <main className="flex-grow p-6">
        {page === "home" && <Home />}
        {page === "task" && <Task />}
        {page === "api" && <ApiList />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
