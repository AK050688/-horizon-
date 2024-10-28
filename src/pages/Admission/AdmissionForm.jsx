import React from 'react';
import "../../Css/Admission.css";

const AdmissionForm = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Left Side Image */}
      <div className="flex justify-center mb-6 md:mb-0 md:w-1/2">
        <img
          src="https://t4.ftcdn.net/jpg/01/44/98/33/240_F_144983353_ohsuwZNlvtKCzqADz0Rac0weNUDlP524.jpg"
          alt="Admission"
          className="admission-image w-full max-w-xs md:max-w-lg lg:max-w-xl"
        />
      </div>

      {/* Right Side Admission Form */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md md:max-w-2xl w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-center mb-6 fade-in">Admission Enquiry</h1>

        {/* Form with slide-in animation */}
        <form className="custom-form shadow-lg fade-in-form">
          {/* Grouped Fields: Name and Mobile Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter mobile number"
                required
              />
            </div>
          </div>

          {/* Grouped Fields: Email and Year of 10th Passout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="yearOf10thPassout">
                Year of 10th Passout
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="number"
                id="yearOf10thPassout"
                name="yearOf10thPassout"
                placeholder="Enter year of 10th passout"
                required
              />
            </div>
          </div>

          {/* Grouped Fields: Father's Name and Mother's Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="fathersName">
                Father's Name
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="text"
                id="fathersName"
                name="fathersName"
                placeholder="Enter father's name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="mothersName">
                Mother's Name
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="text"
                id="mothersName"
                name="mothersName"
                placeholder="Enter mother's name"
                required
              />
            </div>
          </div>

          {/* Grouped Fields: Aadhar Number and Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="aadharNumber">
                Aadhar Number
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="text"
                id="aadharNumber"
                name="aadharNumber"
                placeholder="Enter Aadhar number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="address">
                Address
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="text"
                id="address"
                name="address"
                placeholder="Enter address"
                required
              />
            </div>
          </div>

          {/* Grouped Fields: State and Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="state">
                State
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="text"
                id="state"
                name="state"
                placeholder="Enter state"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="country">
                Country
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="text"
                id="country"
                name="country"
                placeholder="Enter country"
                required
              />
            </div>
          </div>

          {/* Grouped Fields: City or Village and Pin Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="cityOrVillage">
                City or Village
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="text"
                id="cityOrVillage"
                name="cityOrVillage"
                placeholder="Enter city or village"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="pin">
                Pin Code
              </label>
              <input
                className="custom-input border border-gray-300 p-2 rounded w-full"
                type="text"
                id="pin"
                name="pin"
                placeholder="Enter pin code"
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              className="custom-input border border-gray-300 p-2 rounded w-full"
              id="gender"
              name="gender"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              className="custom-input border border-gray-300 p-2 rounded w-full"
              type="date"
              id="dob"
              name="dob"
              required
            />
          </div>

          {/* Bus Service */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="busService"
              name="busService"
              className="mr-2"
            />
            <label htmlFor="busService" className="text-sm font-medium">
              Require Bus Service
            </label>
          </div>

          {/* Hostel Service */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="hostelService"
              name="hostelService"
              className="mr-2"
            />
            <label htmlFor="hostelService" className="text-sm font-medium">
              Require Hostel Service
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdmissionForm;
