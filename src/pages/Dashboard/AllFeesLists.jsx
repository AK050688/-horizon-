import React, { useState } from 'react';

const AllFeesLists = () => {
  const [feesRecords] = useState([
    { id: 1, studentName: 'Paresh', rollNo: '101', feesType: 'Tuition', paymentType: 'Online', date: '10/23/2024', status: 'Paid' },
    { id: 2, studentName: 'Anjali', rollNo: '102', feesType: 'Library', paymentType: 'Cash', date: '10/22/2024', status: 'Pending' },
    { id: 3, studentName: 'Rahul', rollNo: '103', feesType: 'Lab', paymentType: 'Online', date: '10/20/2024', status: 'Paid' },
    // Add more fees records as needed
  ]);

  const handleAddFees = () => {
    // Logic for adding fees will go here
    console.log('Add Fees button clicked');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">All Fees Lists</h2>

      <button 
        onClick={handleAddFees}
        className="mb-4 p-2 bg-green-500 text-white rounded">
        Add Fees
      </button>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">S.No</th>
            <th className="border border-gray-300 p-2">Student Name</th>
            <th className="border border-gray-300 p-2">Roll No</th>
            <th className="border border-gray-300 p-2">Fees Type</th>
            <th className="border border-gray-300 p-2">Payment Type</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Account</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {feesRecords.length > 0 ? (
            feesRecords.map((record, index) => (
              <tr key={record.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{record.studentName}</td>
                <td className="border border-gray-300 p-2">{record.rollNo}</td>
                <td className="border border-gray-300 p-2">{record.feesType}</td>
                <td className="border border-gray-300 p-2">{record.paymentType}</td>
                <td className="border border-gray-300 p-2">{record.date}</td>
                <td className="border border-gray-300 p-2">Account info here</td>
                <td className="border border-gray-300 p-2">{record.status}</td>
                <td className="border border-gray-300 p-2">
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center p-4">No fees records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllFeesLists;
