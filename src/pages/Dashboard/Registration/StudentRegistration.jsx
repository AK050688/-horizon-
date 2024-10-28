import React, { useState } from 'react';

function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    email: '',
    mobile: '',
    address: '',
    cityOrVillage: '',
    state: '',
    country: '',
    gender: '',
    bloodGroup: '',
    rollNo: '',
    courseTaken: '',
    branchName: '',
    admissionYear: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Name */}
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Father's Name */}
          <div>
            <label className="block text-gray-700">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Mother's Name */}
          <div>
            <label className="block text-gray-700">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-gray-700">Mobile No</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* City or Village */}
          <div>
            <label className="block text-gray-700">City or Village</label>
            <input
              type="text"
              name="cityOrVillage"
              value={formData.cityOrVillage}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-gray-700">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Roll No */}
          <div>
            <label className="block text-gray-700">Roll No</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Course Taken */}
          <div>
            <label className="block text-gray-700">Course Taken</label>
            <input
              type="text"
              name="courseTaken"
              value={formData.courseTaken}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Branch Name */}
          <div>
            <label className="block text-gray-700">Branch Name</label>
            <input
              type="text"
              name="branchName"
              value={formData.branchName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Admission Year */}
          <div>
            <label className="block text-gray-700">Admission Year</label>
            <input
              type="text"
              name="admissionYear"
              value={formData.admissionYear}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentRegistration;
