import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div>
  
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>


      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-64 h-screen bg-gray-900 text-gray-300 flex flex-col p-5 md:block`}
      >
        <h2 className="text-lg font-bold mb-5">TECNO BLOCKS</h2>
        <ul className="space-y-9">
          <li className="font-bold text-lg text-purple-500">Dashboard</li>
          <li>Users</li>
          <li>Orders</li>
          <li>Services</li>
          <li>Themes</li>
          <li>Jobs</li>
          <li className="mt-auto">Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
