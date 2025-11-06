import { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogsData";

export default function Blogs() {
  const [query, setQuery] = useState("");

  // Filter blogs by title match (case-insensitive)
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">All Blogs</h1>
        <p className="text-gray-600 mt-2 text-base">
          Explore tutorials, insights, and stories from Ranjit’s tech journey.
        </p>
      </header>

      {/* Search Input */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search blogs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
        />
      </div>

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {filteredBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.id}`}
              className="block p-6 border border-gray-200 rounded-2xl bg-white hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                {blog.description}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>{blog.date}</span>
                <span className="text-blue-600 font-medium hover:underline">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No blogs found for “{query}”.
        </p>
      )}
    </section>
  );
}
