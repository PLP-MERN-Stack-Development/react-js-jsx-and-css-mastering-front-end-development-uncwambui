import React from "react";
import TaskManager from "../components/TaskManager";

export default function Task() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Task Manager </h1>
      <p className="text-gray-600 mb-4">
        Add, view, or manage your tasks below.
      </p>
      <TaskManager />
    </div>
  );
}
