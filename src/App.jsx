import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Plan from "./Plan";
import Progress from "./Progress";
import Profile from "./SmartTips";
import Header from "./Header";

function App() {
  return (
    
    <Router>
      <Header/>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/SmartTips" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;