import React from "react";
import { FaLaptopCode, FaUsers, FaRocket, FaHeart } from "react-icons/fa";

const CareerInfo = () => {
  return (
    <div className="space-y-10">

      {/* ===== PAGE HEADER ===== */}
      <div>
        <h2 className="text-3xl font-bold mb-2">Careers at Our Company</h2>
        <p className="text-gray-600 max-w-2xl">
          We build impactful digital products and believe great teams build
          great companies. Join us to work on exciting projects and grow your
          career.
        </p>
      </div>

      {/* ===== WHY JOIN US ===== */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Why Join Us?</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white shadow rounded-xl p-5">
            <FaLaptopCode className="text-blue-500 text-2xl mb-3" />
            <h4 className="font-semibold">Latest Technologies</h4>
            <p className="text-sm text-gray-500">
              Work with modern tech stacks and real-world scalable systems.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <FaUsers className="text-green-500 text-2xl mb-3" />
            <h4 className="font-semibold">Collaborative Culture</h4>
            <p className="text-sm text-gray-500">
              Work with passionate teammates and supportive mentors.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <FaRocket className="text-purple-500 text-2xl mb-3" />
            <h4 className="font-semibold">Career Growth</h4>
            <p className="text-sm text-gray-500">
              Continuous learning and strong growth opportunities.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <FaHeart className="text-red-500 text-2xl mb-3" />
            <h4 className="font-semibold">Work-Life Balance</h4>
            <p className="text-sm text-gray-500">
              Flexible working and employee wellness programs.
            </p>
          </div>

        </div>
      </div>

      {/* ===== OPEN POSITIONS ===== */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Open Positions</h3>

        <div className="space-y-4">

          {[
            { role: "Frontend Developer", exp: "1-3 Years", type: "Full Time" },
            { role: "Backend Developer", exp: "1-4 Years", type: "Full Time" },
            { role: "UI/UX Designer", exp: "0-2 Years", type: "Internship" },
          ].map((job, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-5 flex justify-between items-center"
            >
              <div>
                <h4 className="font-semibold">{job.role}</h4>
                <p className="text-sm text-gray-500">
                  Experience: {job.exp} • {job.type}
                </p>
              </div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Apply
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* ===== HIRING PROCESS ===== */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Hiring Process</h3>

        <div className="grid md:grid-cols-4 gap-4">

          {[
            "Apply Online",
            "Technical Interview",
            "HR Discussion",
            "Final Offer"
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-4 text-center"
            >
              <div className="text-lg font-bold text-blue-600">
                Step {index + 1}
              </div>
              <p className="text-gray-600 text-sm mt-2">{step}</p>
            </div>
          ))}

        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-semibold mb-2">
          Ready to Start Your Journey?
        </h3>
        <p className="mb-4 text-blue-100">
          Send us your resume and let's build something amazing together.
        </p>

        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
          Contact HR
        </button>
      </div>

    </div>
  );
};

export default CareerInfo;
