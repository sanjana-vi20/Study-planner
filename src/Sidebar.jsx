import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-48 bg-gray-100 p-4 shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-4">📚 Menu</h2>
      <ul className="space-y-2">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/plan" className="hover:text-blue-600">Plan</Link></li>
        <li><Link to="/progress" className="hover:text-blue-600">Progress</Link></li>
        <li><Link to="/SmartTips" className="hover:text-blue-600">SmartTips</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
