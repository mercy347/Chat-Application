import React from 'react';
import NavBar from './components/NavBar';


function App() {
  return (
    
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex items-center justify-center">
      <div className="max-w-md bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800 hover:text-pink-500">
          Welcome to Chatify
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Connect and chat with friends in real-time.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account? <a href="#" className="text-blue-500">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default App



