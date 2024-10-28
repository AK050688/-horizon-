import React, { useState } from 'react';

function TeacherList() {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'John Doe', guardianName: 'Jane Doe', email: 'john@example.com', mobile: '1234567890', state: 'California', department: 'Mathematics', joiningDate: '2022-01-10' },
    { id: 2, name: 'Alice Smith', guardianName: 'Bob Smith', email: 'alice@example.com', mobile: '0987654321', state: 'Texas', department: 'Science', joiningDate: '2021-08-15' },
    // Add more sample data as needed
  ]);
  
  const rowsPerPage = 5; // You can adjust this value as needed
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (id) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id));
  };

  const handleEnable = (id) => {
    console.log(`Enabled teacher with id: ${id}`);
  };

  const handleDisable = (id) => {
    console.log(`Disabled teacher with id: ${id}`);
  };

  const totalPages = Math.ceil(teachers.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const selectedTeachers = teachers.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">All Teacher Lists</h2>
      
      <div className="mb-4 flex justify-between items-center">
        <div>
          <label className="mr-2">Rows per page:</label>
          <select className="border rounded p-1">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <input 
          type="text" 
          placeholder="Search here" 
          className="border rounded p-1" 
        />
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">#</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Guardian Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Mobile</th>
            <th className="border border-gray-300 p-2">State</th>
            <th className="border border-gray-300 p-2">Department</th>
            <th className="border border-gray-300 p-2">Joining Date</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectedTeachers.length > 0 ? (
            selectedTeachers.map((teacher, index) => (
              <tr key={teacher.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{startIndex + index + 1}</td>
                <td className="border border-gray-300 p-2">{teacher.name}</td>
                <td className="border border-gray-300 p-2">{teacher.guardianName}</td>
                <td className="border border-gray-300 p-2">{teacher.email}</td>
                <td className="border border-gray-300 p-2">{teacher.mobile}</td>
                <td className="border border-gray-300 p-2">{teacher.state}</td>
                <td className="border border-gray-300 p-2">{teacher.department}</td>
                <td className="border border-gray-300 p-2">{teacher.joiningDate}</td>
                <td className="border border-gray-300 p-2">
                  <button 
                    onClick={() => handleDelete(teacher.id)} 
                    className="bg-red-500 text-white rounded px-2 py-1 mr-1"
                  >
                    Delete
                  </button>
                  <button 
                    onClick={() => handleEnable(teacher.id)} 
                    className="bg-green-500 text-white rounded px-2 py-1 mr-1"
                  >
                    Enable
                  </button>
                  <button 
                    onClick={() => handleDisable(teacher.id)} 
                    className="bg-yellow-500 text-white rounded px-2 py-1"
                  >
                    Disable
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center p-4">No teachers found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TeacherList;
