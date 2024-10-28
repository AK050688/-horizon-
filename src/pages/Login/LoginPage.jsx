import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginToggle() {
  const navigate = useNavigate();

  return (
    <div className="flex space-x-4 mb-6">
      <button
        onClick={() => navigate('/studentLogin')} 
        className="py-2 px-4 rounded bg-blue-500 text-white"
      >
        Student Login
      </button>
      <button
        onClick={() => navigate('/teacherLogin')} 
        className="py-2 px-4 rounded bg-green-500 text-white"
      >
        Teacher Login
      </button>
      <button
        onClick={() => navigate('/principalLogin')} 
        className="py-2 px-4 rounded bg-orange-500 text-white"
      >
        Principal Login
      </button>
    </div>
  );
}

export default LoginToggle;
