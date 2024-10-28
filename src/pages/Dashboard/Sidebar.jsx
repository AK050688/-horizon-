import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaTachometerAlt, FaUserPlus, FaUsers, FaChalkboardTeacher, FaBook, FaCalendar, FaClipboardList, FaClipboardCheck, FaGraduationCap, FaDollarSign } from 'react-icons/fa';

function Sidebar() {
  const navigate = useNavigate(); 
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false); 

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleRegistrationMenu = () => {
    setIsRegistrationOpen(!isRegistrationOpen); 
  };

  return (
    <>
        <div className="sidebar bg-white text-gray-800 w-64 h-auto p-4 shadow-md">
      <h2 className="text-lg font-bold mb-4">School Management</h2>
      <ul className="space-y-1">
        <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/dashboard')}>
          <FaTachometerAlt className="mr-2" />
          <span>Dashboard</span>
        </li>

        {/* Registration Dropdown */}
        <li className="flex items-center cursor-pointer" onClick={toggleRegistrationMenu}>
          <FaUserPlus className="mr-2" />
          <span>Registration</span>
        </li>
        {isRegistrationOpen && (
          <ul className="ml-6 space-y-2">
            <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/TeacherRegistration')}>
              <span>Teacher Registration</span>
            </li>
            <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/StudentRegistration')}>
              <span>Student Registration</span>
            </li>
          </ul>
        )}

        <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/StudentList')}>
          <FaUsers className="mr-2" />
          <span>Students</span>
        </li>
        <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/TeacherList')}>
          <FaChalkboardTeacher className="mr-2" />
          <span>Teachers</span>
        </li>
        <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/AdmissionDetails')}>
          <FaBook className="mr-2" />
          <span>Admission</span>
        </li>
        <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/schedule')}>
          <FaCalendar className="mr-2" />
          <span>Schedule</span>
        </li>
        <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/StudentAttendance')}>
          <FaClipboardList className="mr-2" />
          <span>Attendance</span>
        </li>
        <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/assignments')}>
          <FaClipboardCheck className="mr-2" />
          <span>Assignment</span>
        </li>
        <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/AllExamLists')}>
          <FaDollarSign className="mr-2" />
          <span>exam</span>
        </li>
        {/* <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/courses')}>
          <FaGraduationCap className="mr-2" />
          <span>Courses</span>
        </li> */}
        <li className="flex items-center cursor-pointer" onClick={() => handleNavigation('/AllFeesLists')}>
          <FaDollarSign className="mr-2" />
          <span>Fees</span>
        </li>
      </ul>
    </div>
    </>

  );
}

export default Sidebar;
