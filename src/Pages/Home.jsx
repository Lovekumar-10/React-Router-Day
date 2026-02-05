import React from "react";
import { FaUsers, FaProjectDiagram, FaBriefcase } from "react-icons/fa";

const Home = () => {
  return (
    <div className="p-6 space-y-8">

      {/* ===== Welcome Section ===== */}
      <div className="bg-white shadow rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-2">Welcome Back 👋</h1>
        <p className="text-gray-600">
          Here is a quick overview of your company performance and activities.
        </p>
      </div>

      {/* ===== Stats Section ===== */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
          <FaUsers size={28} />
          <h2 className="text-2xl font-semibold mt-3">1,240</h2>
          <p>Total Employees</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow">
          <FaProjectDiagram size={28} />
          <h2 className="text-2xl font-semibold mt-3">85</h2>
          <p>Active Projects</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl shadow">
          <FaBriefcase size={28} />
          <h2 className="text-2xl font-semibold mt-3">12</h2>
          <p>Open Positions</p>
        </div>

      </div>

      {/* ===== Recent Activities ===== */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>

        <ul className="space-y-3 text-gray-600">
          <li>✅ New project "AI Dashboard" started</li>
          <li>👨‍💻 5 Developers joined Frontend Team</li>
          <li>🚀 Product version 2.1 launched</li>
          <li>📊 Monthly performance report generated</li>
        </ul>
      </div>

      {/* ===== Quick Info Cards ===== */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Company Mission</h3>
          <p className="text-gray-600">
            To build scalable and modern web applications that improve user
            productivity and digital transformation.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Upcoming Goals</h3>
          <p className="text-gray-600">
            Expanding our AI integration, improving cloud infrastructure, and
            increasing global client reach.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Home;

