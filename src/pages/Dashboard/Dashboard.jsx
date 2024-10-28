import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Dashbord.css"; // Ensure this is spelled correctly

const Dashboard = () => {
  // Example counts (you can fetch these dynamically)
  const counts = {
    studentCount: 120,
    teacherCount: 30,
    admissionCount: 50,
  };

  // Example notifications (you can fetch these dynamically)
  const notifications = [
    "New student has been enrolled!",
    "Teacher John Doe has submitted their report.",
    "New admission details available.",
    "Reminder: Parent-teacher meeting next week.",
  ];

  // Example news headlines (You can fetch these dynamically)
  const newsHeadlines = [
    "School renovation plans approved.",
    "New extracurricular activities added to the curriculum.",
    "Sports day scheduled for next month.",
    "Parent-teacher meeting on November 10.",
  ];

  return (
    <div className="dashboard-layout flex ">
      <Sidebar />

      <div className="content-area flex-grow p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        {/* Grid Container for Counts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto"> {/* Adjusted max width */}
          <div className="bg-blue-500 text-white rounded shadow p-4 flex items-center h-40 transition-transform transform hover:scale-105">
            <div className="flex-shrink-0">
              {/* Student Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A4.002 4.002 0 0116 13H8a4.002 4.002 0 01-3.595 2.595L3 17h5m0 0v4a1 1 0 001 1h8a1 1 0 001-1v-4m-10 0a4 4 0 11-4-4 4 4 0 014 4z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl">Student List</h3>
              <p className="text-2xl font-bold">{counts.studentCount}</p>
            </div>
          </div>
          <div className="bg-green-500 text-white rounded shadow p-4 flex items-center h-40 transition-transform transform hover:scale-105">
            <div className="flex-shrink-0">
              {/* Teacher Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-6 6m6-6l6 6"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl">Teacher List</h3>
              <p className="text-2xl font-bold">{counts.teacherCount}</p>
            </div>
          </div>
          <div className="bg-orange-500 text-white rounded shadow p-4 flex items-center h-40 transition-transform transform hover:scale-105">
            <div className="flex-shrink-0">
              {/* Admission Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 4v16m-8-16v16m-4-8h16"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl">Admission Details</h3>
              <p className="text-2xl font-bold">{counts.admissionCount}</p>
            </div>
          </div>
        </div>

        {/* Notification Section */}
        <div className="bg-gray-100 p-4 mt-6 rounded shadow transition-transform transform hover:scale-105 max-w-6xl mx-auto"> {/* Adjusted max width */}
          <h3 className="text-xl font-semibold mb-2">Notifications</h3>
          <div className="overflow-hidden">
            <div className="whitespace-nowrap animate-scroll">
              {notifications.map((notification, index) => (
                <span key={index} className="text-green-700 mr-10">
                  {notification}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* News Headlines Section */}
        <div className="bg-gray-200 p-9 mt-6 rounded shadow transition-transform transform hover:scale-105 max-w-6xl mx-auto "> {/* Adjusted max width */}
          <h3 className="text-xl font-semibold mb-2">News Headlines</h3>
          <div className="overflow-hidden">
            <div className="whitespace-nowrap animate-scroll">
              {newsHeadlines.map((headline, index) => (
                <span key={index} className="text-green-700 mr-10">
                  {headline}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
