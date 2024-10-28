import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginToggle from './LoginPage';


function PrincipalLogin() {
  const [formData, setFormData] = useState({ uid: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Principal login data:', formData);
   
    navigate('/dashboard');
  };

  return (
 <>
 <div className="main-container min-h-screen flex flex-col items-center justify-center bg-orange-50"> {/* Added background to main container */}
  <LoginToggle />
  
  <div className="w-full max-w-md bg-white shadow-2xl border border-gray-300 p-8 rounded-lg mt-6">
    <h3 className="text-2xl font-bold mb-4 text-center text-orange-600">Principal Login</h3>
    
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-4">
        <label htmlFor="uid" className="block text-gray-700 font-medium mb-2">UID</label>
        <input 
          type="text" 
          id="uid" 
          name="uid" 
          value={formData.uid} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" 
          required 
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" 
          required 
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>
</div>

 </>
  );
}

export default PrincipalLogin;
