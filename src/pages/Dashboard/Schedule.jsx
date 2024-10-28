import React, { useState } from 'react';

const Schedule = () => {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [schedules] = useState([
    { id: 1, day: 'Monday', time: '9:00 AM - 10:00 AM', subject: 'Math', teacher: 'Mr. Smith', branch: 'Mechanical', section: 'A' },
    { id: 2, day: 'Monday', time: '10:00 AM - 11:00 AM', subject: 'Physics', teacher: 'Mrs. Johnson', branch: 'Mechanical', section: 'A' },
    { id: 3, day: 'Tuesday', time: '9:00 AM - 10:00 AM', subject: 'Chemistry', teacher: 'Dr. Brown', branch: 'CS', section: 'A' },
    { id: 4, day: 'Tuesday', time: '10:00 AM - 11:00 AM', subject: 'Computer Science', teacher: 'Mr. White', branch: 'CS', section: 'A' },
    { id: 5, day: 'Wednesday', time: '9:00 AM - 10:00 AM', subject: 'Biology', teacher: 'Ms. Green', branch: 'Biology', section: 'B' },
    // Add more schedule items as needed
  ]);

  const branches = ['Select Branch', 'Mechanical', 'CS', 'Electrical', 'Civil'];
  const sections = ['Select Section', 'A', 'B', 'C'];

  const filteredSchedules = schedules.filter(schedule => {
    return (
      (selectedBranch === '' || schedule.branch === selectedBranch) &&
      (selectedSection === '' || schedule.section === selectedSection)
    );
  });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Schedule</h2>

      <div className="mb-4">
        <label className="mr-2">Branch:</label>
        <select
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
          className="border rounded p-1"
        >
          {branches.map(branch => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-2">Section:</label>
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          className="border rounded p-1"
        >
          {sections.map(section => (
            <option key={section} value={section}>
              {section}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">SNo.</th>
            <th className="border border-gray-300 p-2">Day</th>
            <th className="border border-gray-300 p-2">Time</th>
            <th className="border border-gray-300 p-2">Subject</th>
            <th className="border border-gray-300 p-2">Subject Teacher</th>
            <th className="border border-gray-300 p-2">Branch Name</th>
            <th className="border border-gray-300 p-2">Section</th>
          </tr>
        </thead>
        <tbody>
          {filteredSchedules.length > 0 ? (
            filteredSchedules.map((schedule, index) => (
              <tr key={schedule.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{schedule.day}</td>
                <td className="border border-gray-300 p-2">{schedule.time}</td>
                <td className="border border-gray-300 p-2">{schedule.subject}</td>
                <td className="border border-gray-300 p-2">{schedule.teacher}</td>
                <td className="border border-gray-300 p-2">{schedule.branch}</td>
                <td className="border border-gray-300 p-2">{schedule.section}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center p-4">No schedules found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
