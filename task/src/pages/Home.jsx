import React from "react";

export default function Home() {
  return (
    <section className="p-6 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Welcome to PLP Task Manager
        </h2>
        <p className="mb-6 text-lg leading-relaxed">
          This project is designed to help you organize and manage your daily
          tasks effectively while exploring modern front-end development with
          <span className="font-semibold"> React, JSX, and Tailwind CSS</span>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-blue-600 dark:text-blue-400">Simple Interface</h3>
            <p>Navigate easily through pages using the clean and responsive UI built with React.</p>
          </div>

          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-blue-600 dark:text-blue-400">Task Management</h3>
            <p>Add, view, and manage your tasks efficiently with an interactive task section.</p>
          </div>

          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-blue-600 dark:text-blue-400">API Integration</h3>
            <p>View live API data integrated into the app — perfect for understanding API fetching in React.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
