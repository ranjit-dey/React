// src/layouts/BlogLayout.jsx
import { Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Outlet />
    </div>
  );
}
