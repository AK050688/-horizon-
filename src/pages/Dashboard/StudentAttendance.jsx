import React, { useState } from 'react';

const StudentAttendance = () => {
  const [date, setDate] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchRollNo, setSearchRollNo] = useState('');
  const [attendanceRecords] = useState([
    { id: 1, name: 'Paresh', rollNo: '101', date: '10/23/2024', attendance: 'Present' },
    { id: 2, name: 'Anjali', rollNo: '102', date: '10/23/2024', attendance: 'Absent' },
    { id: 3, name: 'Rahul', rollNo: '103', date: '10/22/2024', attendance: 'Present' },
    { id: 4, name: 'Sneha', rollNo: '104', date: '10/22/2024', attendance: 'Present' },
    { id: 5, name: 'Neha', rollNo: '105', date: '10/23/2024', attendance: 'Absent' },
    // Add more attendance records as needed
  ]);

  const filteredRecords = attendanceRecords.filter(record => {
    const matchesName = searchName === '' || record.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesRollNo = searchRollNo === '' || record.rollNo.includes(searchRollNo);
    const matchesDate = date === '' || record.date === date;

    return matchesName && matchesRollNo && matchesDate;
  });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Student Attendance</h2>

      <div className="mb-4">
        <label className="mr-2">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded p-1"
        />
      </div>

      <div className="mb-4">
        <label className="mr-2">Search by Name:</label>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Enter Name"
          className="border rounded p-1"
        />
      </div>

      <div className="mb-4">
        <label className="mr-2">Search by Roll No:</label>
        <input
          type="text"
          value={searchRollNo}
          onChange={(e) => setSearchRollNo(e.target.value)}
          placeholder="Enter Roll No"
          className="border rounded p-1"
        />
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">SNo.</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Roll No.</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record, index) => (
              <tr key={record.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{record.name}</td>
                <td className="border border-gray-300 p-2">{record.rollNo}</td>
                <td className="border border-gray-300 p-2">{record.date}</td>
                <td className="border border-gray-300 p-2">{record.attendance}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">No attendance records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentAttendance;
