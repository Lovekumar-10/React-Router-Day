import React from "react";
import {
  FaUsers,
  FaProjectDiagram,
  FaGlobe,
  FaAward
} from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


// Fake growth data (you can later replace with API)
const growthData = [
  { year: "2021", users: 500 },
  { year: "2022", users: 1200 },
  { year: "2023", users: 2500 },
  { year: "2024", users: 4000 },
  { year: "2025", users: 6500 }
];

const Overview = () => {
  return (
    <div className="space-y-10">

      {/* ===== INTRO SECTION ===== */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Company Overview
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Our company focuses on delivering high-quality digital solutions
          using modern technologies. We aim to build scalable, secure and
          performance-driven applications that help businesses grow in the
          competitive market.
        </p>
      </section>



      {/* ===== STATS CARDS ===== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaUsers className="text-blue-500 text-3xl" />
          <div>
            <h3 className="text-xl font-bold">6500+</h3>
            <p className="text-gray-500 text-sm">Active Users</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaProjectDiagram className="text-green-500 text-3xl" />
          <div>
            <h3 className="text-xl font-bold">120+</h3>
            <p className="text-gray-500 text-sm">Projects Completed</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaGlobe className="text-purple-500 text-3xl" />
          <div>
            <h3 className="text-xl font-bold">25+</h3>
            <p className="text-gray-500 text-sm">Countries Served</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaAward className="text-yellow-500 text-3xl" />
          <div>
            <h3 className="text-xl font-bold">15+</h3>
            <p className="text-gray-500 text-sm">Industry Awards</p>
          </div>
        </div>

      </section>



      {/* ===== COMPANY GROWTH GRAPH ===== */}
      <section className="bg-white p-6 rounded-xl shadow">

        <h3 className="text-xl font-semibold mb-5">
          Company Growth (User Expansion)
        </h3>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={growthData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#3B82F6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </section>



      {/* ===== ACHIEVEMENTS SECTION ===== */}
      <section className="bg-white p-6 rounded-xl shadow">

        <h3 className="text-xl font-semibold mb-4">
          Key Achievements
        </h3>

        <ul className="space-y-3 text-gray-600 list-disc list-inside">
          <li>Successfully delivered enterprise-level SaaS platforms</li>
          <li>Maintained 98% client satisfaction rate</li>
          <li>Expanded services globally across multiple industries</li>
          <li>Adopted modern cloud-native architecture</li>
        </ul>

      </section>



      {/* ===== FUTURE VISION ===== */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow">

        <h3 className="text-xl font-semibold mb-3">
          Our Future Vision
        </h3>

        <p className="opacity-90">
          We aim to innovate continuously and build AI-powered and scalable
          applications that improve productivity and transform business
          operations worldwide.
        </p>

      </section>

    </div>
  );
};

export default Overview;
