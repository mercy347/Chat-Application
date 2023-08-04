import logo from "../../assets/logo.png"

const NavBar = () => {
  return (
    <nav className="bg-blue-500 shadow-4xl shadow-lg shadow-pink ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-black hover:text-pink-500 font-bold text-4xl">Chatify</div>
             {/* <img src={logo} alt="Logo"/> */}
        </div>
        <div className="space-x-4">
          <a href="#" className="text-black hover:text-pink-500">Home</a>
          <a href="#" className="text-black hover:text-pink-500">Chatrooms</a>
          <a href="#" className="text-black hover:text-pink-500">Friends</a>
          <a href="#" className="text-black hover:text-pink-500">Profile</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

