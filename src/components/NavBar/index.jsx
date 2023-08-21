
import { SignInContext } from '../../context/signInContext';
import { useContext } from "react";
import { Link } from 'react-router-dom';


const NavBar = () => {
  const {handleClick, currentUser } = useContext(SignInContext)
 
  return (
 
    
    <nav className="bg-blue-500 shadow-4xl shadow-lg shadow-pink ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-black hover:text-pink-500 font-bold text-4xl">Chatify</div>
             
        </div>
        {
          currentUser ?
          <div className="space-x-4">
            <a href="#" className="text-black hover:text-pink-500">Home</a>
            <Link to='/Chatroom' className="text-black hover:text-pink-500">Chatroom</Link>
            <a href='#' className="text-black hover:text-pink-500">Friends</a>
            <a href="#" className="text-black hover:text-pink-500">Profile</a>
            
          </div>
          :
          <button onClick={handleClick}className="hover:text-pink-500">Sign In</button>
        }
      </div>
    </nav>
  )
}

export default NavBar

