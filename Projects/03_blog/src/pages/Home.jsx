import { Link } from "react-router-dom";
import { blogs } from "../data/blogsData";

export default function Home() {
  // Show only first 6 blogs
  const latestBlogs = blogs.slice(0, 6);

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Welcome to <span className="text-blue-600">Ranjit’s Blog</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on React, Web Development, and
          technology — written with clarity and simplicity.
        </p>
      </div>

      {/* Featured Blogs Section */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-12">
        {latestBlogs.map((blog) => (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.id}
            className="block border border-gray-200 rounded-2xl bg-white p-6 hover:shadow-md transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
              {blog.description}
            </p>
            <span className="text-xs text-gray-400">{blog.date}</span>
          </Link>
        ))}
      </div>

      {/* View All Blogs Button */}
      <div className="text-center">
        <Link
          to="/blogs"
          className="inline-block rounded-lg bg-blue-600 text-white px-6 py-2.5 font-medium hover:bg-blue-700 transition-colors"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
}
