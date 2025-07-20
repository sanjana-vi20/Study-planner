import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Welcome to Study Planner 🎓</h1>

      <p className="text-gray-700 mb-6">
        Plan smart. Track progress. Stay ahead in your studies!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feature Cards */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600">📝 Create Study Plans</h2>
          <p className="text-gray-600 mt-2">
            Add subjects, set deadlines, and let the app help organize your study time.
          </p>
        </div>

        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold text-green-600">📊 Track Progress</h2>
          <p className="text-gray-600 mt-2">
            See completed tasks and pending work with visual indicators.
          </p>
        </div>

        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold text-red-600">⏰ Smart Reminders</h2>
          <p className="text-gray-600 mt-2">
            Get alerts for deadlines and overdue tasks to stay on track.
          </p>
        </div>

        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold text-purple-600">💡 Study Suggestions</h2>
          <p className="text-gray-600 mt-2">
            AI suggests what to study next based on urgency and pending tasks.
          </p>
        </div>
      </div>

      {/* Quick Start Button */}
      <div className="mt-8">
        <Link
        to="/plan"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded text-lg transition duration-300"
      >
        ➕ Start Planning Now
      </Link>
      </div>
    </div>
  );
};

export default Home;
