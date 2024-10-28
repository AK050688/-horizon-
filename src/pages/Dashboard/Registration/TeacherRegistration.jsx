import React, { useState } from 'react';

function TeacherRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    guardianName: '',
    email: '',
    mobile: '',
    address: '',
    pin: '',
    cityOrVillage: '',
    state: '',
    gender: '',
    bloodGroup: '',
    department: '',
    joiningDate: ''
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
 <>
 
 <div className='flex items-center justify-center'>
 <div className="max-w-4xl w-full p-6 bg-white shadow-md rounded-md border border-gray-300 ">
        <h2 className="text-2xl font-bold mb-4 text-center">Teacher Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

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

            {/* Guardian Name */}
            <div>
              <label className="block text-gray-700">Guardian Name</label>
              <input
                type="text"
                name="guardianName"
                value={formData.guardianName}
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

            {/* Pin */}
            <div>
              <label className="block text-gray-700">Pin</label>
              <input
                type="text"
                name="pin"
                value={formData.pin}
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

            {/* Department */}
            <div>
              <label className="block text-gray-700">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Joining Date */}
            <div>
              <label className="block text-gray-700">Joining Date</label>
              <input
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button type="submit" className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
              Submit
            </button>
          </div>
        </form>
      </div>
 </div>
    

 </>
  );
}

export default TeacherRegistration;
