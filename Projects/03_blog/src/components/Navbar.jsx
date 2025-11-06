import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeClass = "text-white bg-blue-600";
  const inactiveClass = "text-gray-700 hover:text-blue-600 hover:bg-gray-100";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-14">
        {/* Brand */}
        <h1 className="text-lg font-semibold text-blue-700 select-none">
          Ranjit’s Blog
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Create
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col p-2 space-y-1">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/blogs"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/create"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Create
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
