import React, { useState } from 'react';

const AllExamLists = () => {
  const [examRecords] = useState([
    { id: 1, examBranch: 'Mechanical', examType: 'Midterm', subject: 'Thermodynamics', year: '2024', timing: '10:00 AM', marks: '100', date: '10/15/2024' },
    { id: 2, examBranch: 'Computer Science', examType: 'Final', subject: 'Data Structures', year: '2024', timing: '02:00 PM', marks: '100', date: '10/20/2024' },
    { id: 3, examBranch: 'Electrical', examType: 'Quiz', subject: 'Circuit Theory', year: '2024', timing: '11:00 AM', marks: '50', date: '10/25/2024' },
    // Add more exam records as needed
  ]);

  const handleAddExam = () => {
    // Logic for adding an exam will go here
    console.log('Add Exam button clicked');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">All Exam Lists</h2>

      <button 
        onClick={handleAddExam}
        className="mb-4 p-2 bg-green-500 text-white rounded">
        Add Exam
      </button>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">S.No</th>
            <th className="border border-gray-300 p-2">Exam Branch</th>
            <th className="border border-gray-300 p-2">Exam Type</th>
            <th className="border border-gray-300 p-2">Subject</th>
            <th className="border border-gray-300 p-2">Year</th>
            <th className="border border-gray-300 p-2">Timing</th>
            <th className="border border-gray-300 p-2">Marks</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Edit</th>
            <th className="border border-gray-300 p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {examRecords.length > 0 ? (
            examRecords.map((record, index) => (
              <tr key={record.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{record.examBranch}</td>
                <td className="border border-gray-300 p-2">{record.examType}</td>
                <td className="border border-gray-300 p-2">{record.subject}</td>
                <td className="border border-gray-300 p-2">{record.year}</td>
                <td className="border border-gray-300 p-2">{record.timing}</td>
                <td className="border border-gray-300 p-2">{record.marks}</td>
                <td className="border border-gray-300 p-2">{record.date}</td>
                <td className="border border-gray-300 p-2">
                  <button className="text-blue-500">Edit</button>
                </td>
                <td className="border border-gray-300 p-2">
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center p-4">No exam records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllExamLists;
