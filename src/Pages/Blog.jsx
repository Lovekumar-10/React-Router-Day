import React from "react";
import { FaUserCircle, FaClock } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "React Router Basics",
    author: "Love Kumar",
    date: "12 Feb 2026",
    time: "5 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    desc:
      "Learn how React Router helps create smooth navigation in single page applications."
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    author: "John Developer",
    date: "10 Feb 2026",
    time: "6 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    desc:
      "Hooks allow functional components to manage state and lifecycle efficiently."
  },
  {
    id: 3,
    title: "Tailwind CSS Guide",
    author: "UI Expert",
    date: "5 Feb 2026",
    time: "4 min read",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166",
    desc:
      "Build beautiful modern UI faster using Tailwind utility classes."
  }
];

const Blog = () => {
  return (
    <div className="p-6 space-y-8">

      {/* ===== Page Heading ===== */}
      <div>
        <h1 className="text-3xl font-bold">Latest Blogs ✍️</h1>
        <p className="text-gray-500">
          Read our latest articles and tech updates.
        </p>
      </div>

      {/* ===== Blog Cards ===== */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden 
            hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >

            {/* Blog Image */}
            <img
              src={blog.image}
              alt="blog"
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-5">

              {/* Author + Date */}
              <div className="flex justify-between text-sm text-gray-500 mb-2">

                <div className="flex items-center gap-2">
                  <FaUserCircle />
                  {blog.author}
                </div>

                <div className="flex items-center gap-2">
                  <FaClock />
                  {blog.time}
                </div>

              </div>

              <p className="text-xs text-gray-400 mb-3">
                {blog.date}
              </p>

              {/* Title */}
              <h2 className="text-lg font-semibold mb-2">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {blog.desc}
              </p>

              {/* Read More Button */}
              <button
                className="mt-4 text-blue-500 font-semibold hover:underline"
              >
                Read More →
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Blog;
