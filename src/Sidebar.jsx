import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation?.() || { pathname: "/" };

  // Helper function to check if a route is active
  const isActive = (path) => location.pathname === path;

  // Reusable styling logic for sidebar links
  const linkStyles = (path) => `
    flex items-center gap-3 px-3 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 group relative
    ${isActive(path) 
      ? "bg-indigo-50 text-indigo-600 shadow-sm" 
      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }
  `;

  return (
    <div className="w-56 bg-white h-screen border-r border-slate-200/80 p-4 flex flex-col justify-between sticky top-0">
      
      <div>
        {/* Sidebar Header / Brand Logo */}
        <div className="flex items-center gap-2.5 px-2 mb-6 h-10">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-xs shadow-md shadow-indigo-600/20">
            S
          </div>
          <span className="font-bold text-sm tracking-tight text-slate-900">
            Study<span className="text-indigo-600 font-medium">Planner</span>
          </span>
        </div>

        {/* Navigation List */}
        <div className="space-y-1">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
            Main Menu
          </span>
          <nav className="space-y-1">
            
            {/* Dashboard Link */}
            <Link to="/" className={linkStyles("/")}>
              <svg className={`w-4 h-4 transition-colors ${isActive("/") ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Dashboard
              {isActive("/") && <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-indigo-600" />}
            </Link>

            {/* Plans Link */}
            <Link to="/plan" className={linkStyles("/plan")}>
              <svg className={`w-4 h-4 transition-colors ${isActive("/plan") ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Study Plans
              {isActive("/plan") && <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-indigo-600" />}
            </Link>

            {/* Progress Link */}
            <Link to="/progress" className={linkStyles("/progress")}>
              <svg className={`w-4 h-4 transition-colors ${isActive("/progress") ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
              Track Progress
              {isActive("/progress") && <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-indigo-600" />}
            </Link>

            {/* Smart Tips Link */}
            <Link to="/SmartTips" className={linkStyles("/SmartTips")}>
              <svg className={`w-4 h-4 transition-colors ${isActive("/SmartTips") ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Smart Insights
              {isActive("/SmartTips") && <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-indigo-600" />}
            </Link>

          </nav>
        </div>
      </div>

      {/* Sidebar Footer Component */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center gap-3 px-2">
          <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[11px] font-bold text-slate-600">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-800 truncate">John Doe</p>
            <p className="text-[10px] text-slate-400 truncate">Student Account</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;