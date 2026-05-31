import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation?.() || { pathname: "/" };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-14">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 group-hover:bg-indigo-700 transition-colors">
            <span className="text-sm font-black">S</span>
          </div>
          <span className="font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
            Study<span className="text-indigo-600 font-medium">Planner</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link 
            to="/" 
            className={`text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
              location.pathname === "/" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            Dashboard
          </Link>
          <Link 
            to="/plan" 
            className={`text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
              location.pathname === "/plan" ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            My Plans
          </Link>
          <Link 
            to="/analytics" 
            className="text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 px-3 py-2 rounded-lg transition-colors"
          >
            Analytics
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">
            Sign In
          </button>
          <Link
            to="/plan"
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-sm transition-all"
          >
            New Plan
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1.5 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 py-3 flex flex-col gap-1 bg-white absolute left-0 right-0 px-4 shadow-xl">
          <Link to="/" className="text-sm font-medium text-slate-700 hover:bg-slate-50 p-2.5 rounded-lg">Dashboard</Link>
          <Link to="/plan" className="text-sm font-medium text-slate-700 hover:bg-slate-50 p-2.5 rounded-lg">My Plans</Link>
          <Link to="/analytics" className="text-sm font-medium text-slate-700 hover:bg-slate-50 p-2.5 rounded-lg">Analytics</Link>
          <hr className="border-slate-100 my-1" />
          <div className="flex items-center justify-between pt-2 px-2">
            <button className="text-sm font-medium text-slate-600">Sign In</button>
            <Link to="/plan" className="bg-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-lg">New Plan</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;