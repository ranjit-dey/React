import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogsData";

export default function BlogDetails() {
  const { blogId } = useParams();

  // Match blog by ID (works for string or number)
  const blog = blogs.find((blog) => String(blog.id) === String(blogId));

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700">Blog not found</h2>
        <Link
          to="/blogs"
          className="mt-4 inline-block text-blue-600 hover:underline text-sm"
        >
          ← Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-[calc(100vh-100px)] flex flex-col justify-between max-w-3xl mx-auto px-4 pt-6">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{blog.date}</p>
      </header>

      {/* Content */}
      <main className="grow text-gray-700 leading-relaxed bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <p className="whitespace-pre-line">{blog.content}</p>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-10 pt-4 flex justify-between items-center text-sm text-gray-600">
        <Link
          to="/blogs"
          className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          ← Back to Blogs
        </Link>
        <span className="text-xs text-gray-400">Blog ID: {blog.id}</span>
      </footer>
    </section>
  );
}
