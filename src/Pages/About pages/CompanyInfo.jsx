import React from "react";
import { FaLaptopCode, FaUsers, FaRocket } from "react-icons/fa";

const CompanyInfo = () => {
  return (
    <div className="space-y-8">

      {/* Header Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          About Our Company
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          We are a fast-growing tech company focused on building modern,
          scalable, and user-friendly web applications. Our goal is to deliver
          high-quality software solutions that help businesses grow in the
          digital world.
        </p>
      </div>

      {/* Mission / Vision / Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Mission */}
        <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition">
          <FaRocket className="text-blue-500 text-2xl mb-3" />
          <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
          <p className="text-gray-600 text-sm">
            To create innovative digital products that simplify complex
            problems and deliver value to users worldwide.
          </p>
        </div>

        {/* Team */}
        <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition">
          <FaUsers className="text-green-500 text-2xl mb-3" />
          <h3 className="font-semibold text-lg mb-2">Our Team</h3>
          <p className="text-gray-600 text-sm">
            Our team consists of passionate developers, designers, and product
            managers working together to build powerful applications.
          </p>
        </div>

        {/* Technology */}
        <div className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition">
          <FaLaptopCode className="text-purple-500 text-2xl mb-3" />
          <h3 className="font-semibold text-lg mb-2">Our Technology</h3>
          <p className="text-gray-600 text-sm">
            We use modern technologies like React, Node.js, Tailwind CSS, and
            cloud platforms to build scalable web solutions.
          </p>
        </div>

      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 rounded-xl p-6">

        <h3 className="text-xl font-semibold mb-5 text-center">
          Company Growth
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h4 className="text-2xl font-bold text-blue-600">5+</h4>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-blue-600">50+</h4>
            <p className="text-gray-600 text-sm">Projects Completed</p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-blue-600">30+</h4>
            <p className="text-gray-600 text-sm">Team Members</p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-blue-600">20+</h4>
            <p className="text-gray-600 text-sm">Global Clients</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CompanyInfo;
