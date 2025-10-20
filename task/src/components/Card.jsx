import React from "react";

export default function Card({ title, content, active = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`p-4 border rounded shadow cursor-pointer transition-colors
        ${active
          ? "bg-blue-500 text-white dark:bg-blue-700"
          : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        }`}
    >
      <h2 className="font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
