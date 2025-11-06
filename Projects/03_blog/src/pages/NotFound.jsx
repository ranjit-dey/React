import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Back Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-block px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            ⬅ Go Home
          </Link>

          <Link
            to="/blogs"
            className="inline-block px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Browse Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
