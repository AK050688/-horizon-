import React, { useState } from 'react';

const AdmissionDetails = () => {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [admissions] = useState([
    { id: 1, name: 'Amarjeet Dalai', email: 'Amar123@gmail.com', mobile: '8260545169', gender: 'Male', state: 'Odisha', teacher: 'Mechanical', course: 'B.tech' },
    { id: 2, name: 'Amarjeet Dalai', email: 'Amar1@gmail.com', mobile: '8260545169', gender: 'Male', state: 'Odisha', teacher: 'Mechanical', course: 'B.tech' },
    { id: 3, name: 'Amarjeet Dalai', email: 'Amar10@gmail.com', mobile: '8260545169', gender: 'Male', state: 'Odisha', teacher: 'Mechanical', course: 'B.tech' },
    { id: 4, name: 'AYUSHI VASHISTH', email: 'ayushivashisth22@gmail.com', mobile: '08219187422', gender: 'Female', state: 'DELHI', teacher: 'CS', course: 'B.Tech' },
    { id: 5, name: 'AYUSHI VASHISTH', email: 'ayushivashisth21@gmail.com', mobile: '08219187422', gender: 'Female', state: 'DELHI', teacher: 'CS', course: 'B.Tech' },
  ]);

  const branches = ['Select Branch', 'Mechanical', 'CS', 'Electrical', 'Civil'];

  const filteredAdmissions = selectedBranch === 'Select Branch' ? admissions : admissions.filter(admission => admission.teacher === selectedBranch);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Admission List</h2>

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

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">SNo.</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Mobile No</th>
            <th className="border border-gray-300 p-2">Gender</th>
            <th className="border border-gray-300 p-2">State</th>
            <th className="border border-gray-300 p-2">Teacher</th>
            <th className="border border-gray-300 p-2">Branch Name</th>
            <th className="border border-gray-300 p-2">Course Taken</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdmissions.length > 0 ? (
            filteredAdmissions.map((admission, index) => (
              <tr key={admission.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{admission.name}</td>
                <td className="border border-gray-300 p-2">{admission.email}</td>
                <td className="border border-gray-300 p-2">{admission.mobile}</td>
                <td className="border border-gray-300 p-2">{admission.gender}</td>
                <td className="border border-gray-300 p-2">{admission.state}</td>
                <td className="border border-gray-300 p-2">{admission.teacher}</td>
                <td className="border border-gray-300 p-2">{admission.teacher}</td>
                <td className="border border-gray-300 p-2">{admission.course}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center p-4">No admissions found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdmissionDetails;
