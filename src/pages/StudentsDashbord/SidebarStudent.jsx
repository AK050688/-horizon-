import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClipboardList, FaBell, FaCalendar, FaClipboardCheck, FaBook, FaGraduationCap } from 'react-icons/fa'; // Import relevant icons
import "../StudentsDashbord/Studentcss/SliderStudents.css"

function SidebarStudent() {
  const navigate = useNavigate(); // Initialize navigate

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar bg-white-800 text-gray h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Student Dashboard</h2>
      <ul className="space-y-4">
        <li onClick={() => handleNavigation('/attendance')} className="cursor-pointer">
          <FaClipboardList className="icon mr-2" />
          <span>Attendance</span>
        </li>
        <li onClick={() => handleNavigation('/notification')} className="cursor-pointer">
          <FaBell className="icon mr-2" />
          <span>Notification</span>
        </li>
        <li onClick={() => handleNavigation('/calendar')} className="cursor-pointer">
          <FaCalendar className="icon mr-2" />
          <span>Calendar</span>
        </li>
        <li onClick={() => handleNavigation('/schedule')} className="cursor-pointer">
          <FaCalendar className="icon mr-2" />
          <span>Schedule</span>
        </li>
        <li onClick={() => handleNavigation('/syllabus')} className="cursor-pointer">
          <FaBook className="icon mr-2" />
          <span>Syllabus</span>
        </li>
        <li onClick={() => handleNavigation('/assignments')} className="cursor-pointer">
          <FaClipboardCheck className="icon mr-2" />
          <span>Assignment</span>
        </li>
        <li onClick={() => handleNavigation('/test')} className="cursor-pointer">
          <FaClipboardList className="icon mr-2" />
          <span>Test</span>
        </li>
        <li onClick={() => handleNavigation('/exam')} className="cursor-pointer">
          <FaGraduationCap className="icon mr-2" />
          <span>Exam</span>
        </li>
      </ul>
    </div>
  );
}

export default SidebarStudent;
