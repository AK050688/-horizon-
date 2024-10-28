import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClipboardCheck, FaBook, FaCalendar, FaClipboardList, FaBell, FaGraduationCap } from 'react-icons/fa';
import '../../pages/TeachersDashbord/cssTeacher/SidebarTeacher.css'; 

function SidebarTeacher() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar bg-white text-gray-800 h-screen p-4">
      <h2 className="text-xl font-bold mb-6 sidebar-title">Teacher Dashboard</h2>
      <ul className="space-y-4">
        <li onClick={() => handleNavigation('/ScheduleTeachers')} className="cursor-pointer flex items-center">
          <FaCalendar className="icon mr-2" />
          <span className="sidebar-text">Schedule</span>
        </li>
        <li onClick={() => handleNavigation('/SyllabusTeachers')} className="cursor-pointer flex items-center">
          <FaBook className="icon mr-2" />
          <span className="sidebar-text">Syllabus</span>
        </li>
        <li onClick={() => handleNavigation('/AssinmentsTeacher')} className="cursor-pointer flex items-center">
          <FaClipboardCheck className="icon mr-2" />
          <span className="sidebar-text">Assignment</span>
        </li>
        <li onClick={() => handleNavigation('/AttendanceTeacher')} className="cursor-pointer flex items-center">
          <FaClipboardList className="icon mr-2" />
          <span className="sidebar-text">Attendance</span>
        </li>
        <li onClick={() => handleNavigation('/NotificationTeacher')} className="cursor-pointer flex items-center">
          <FaBell className="icon mr-2" />
          <span className="sidebar-text">Notification</span>
        </li>
        <li onClick={() => handleNavigation('/calendar')} className="cursor-pointer flex items-center">
          <FaCalendar className="icon mr-2" />
          <span className="sidebar-text">Calendar</span>
        </li>
        <li onClick={() => handleNavigation('/TestTeacher')} className="cursor-pointer flex items-center">
          <FaClipboardList className="icon mr-2" />
          <span className="sidebar-text">Test</span>
        </li>
        <li onClick={() => handleNavigation('/ExamTeachers')} className="cursor-pointer flex items-center">
          <FaGraduationCap className="icon mr-2" />
          <span className="sidebar-text">Exam</span>
        </li>
      </ul>
    </div>
  );
}

export default SidebarTeacher;
