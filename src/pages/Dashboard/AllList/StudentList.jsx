import React, { useState } from 'react';

function StudentList() {
  // Mock student data
  const [students, setStudents] = useState([
    { sno: 1, rollNo: '101', name: 'John Doe', email: 'john@example.com', state: 'Maharashtra', course: 'B.Tech', branch: 'Computer Science', year: 2022, fees: 'Paid' },
    { sno: 2, rollNo: '102', name: 'Jane Smith', email: 'jane@example.com', state: 'Delhi', course: 'B.Sc', branch: 'Physics', year: 2021, fees: 'Unpaid' },
    // Add more students here
  ]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Search
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered students based on search
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredStudents.slice(indexOfFirstRow, indexOfLastRow);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=" bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold mb-4">All Students List</h2>

        {/* Rows per page and search input */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <span>Rows per page:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="p-2 border rounded"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded w-full md:w-1/3"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">SNo.</th>
                <th className="p-2">Roll No.</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">State</th>
                <th className="p-2">Course Taken</th>
                <th className="p-2">Branch Name</th>
                <th className="p-2">Admission Year</th>
                <th className="p-2">Fees</th>
                <th className="p-2">Delete</th>
                <th className="p-2">Enable</th>
                <th className="p-2">Disable</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length === 0 ? (
                <tr>
                  <td colSpan="12" className="text-center p-4">No results found</td>
                </tr>
              ) : (
                currentRows.map((student, index) => (
                  <tr key={student.rollNo} className="text-center border-b">
                    <td className="p-2">{student.sno}</td>
                    <td className="p-2">{student.rollNo}</td>
                    <td className="p-2">{student.name}</td>
                    <td className="p-2">{student.email}</td>
                    <td className="p-2">{student.state}</td>
                    <td className="p-2">{student.course}</td>
                    <td className="p-2">{student.branch}</td>
                    <td className="p-2">{student.year}</td>
                    <td className="p-2">{student.fees}</td>
                    <td className="p-2 text-red-500 cursor-pointer">Delete</td>
                    <td className="p-2 text-green-500 cursor-pointer">Enable</td>
                    <td className="p-2 text-yellow-500 cursor-pointer">Disable</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span>
            Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, filteredStudents.length)} of {filteredStudents.length} entries
          </span>
          <div className="flex space-x-2">
            {[...Array(Math.ceil(filteredStudents.length / rowsPerPage)).keys()].map((page) => (
              <button
                key={page + 1}
                onClick={() => paginate(page + 1)}
                className={`p-2 border rounded ${currentPage === page + 1 ? 'bg-blue-500 text-white' : ''}`}
              >
                {page + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
