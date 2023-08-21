import React from 'react';
import NavBar from './components/NavBar';
import { useContext } from 'react';
import { SignInContext } from './context/signInContext';
import {Link} from 'react-router-dom'
import Chatroom from './pages/Chatroom';




function App() {

  const { handleClick, currentUser, userName } = useContext(SignInContext)
  const handleLogout = ()=> {
    localStorage.clear()
    window.location.reload()
}

  return (
    
  <div className='bg-gradient-to-r from-blue-600 to-pink-600 h-screen flex items-center justify-center '>
      <div className="max-w-md bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800 hover:text-pink-500 ">
          Welcome to Chatify
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Connect and chat with friends in real-time.
        </p>
        {
          currentUser ?

          <div>
            <Link>Get started</Link>
          </div>

          :
          <button onClick={handleClick}>Get Started</button>


        }
     
        {
          currentUser ? 
          
          <div>
            <h1>Hello {userName} </h1>
            <button onClick={handleLogout} className='text-blue-500 hover:text-pink-500'>Logout</button>
          </div>
          
          : 
          <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account? <button onClick={handleClick} className="text-blue-500 hover:text-pink-500">Log in</button>
          </p>
        }

      </div>
    </div>
  );
}

export default App



