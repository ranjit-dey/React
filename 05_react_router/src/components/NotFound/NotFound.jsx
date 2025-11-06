export default function NotFound() {
  return (
    <div className="py-20 w-full flex items-center justify-center  relative overflow-hidden">

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 rounded-2xl shadow-2xl border border-black/30 z-10">

        {/* 404 Text */}
        <div className="flex flex-col items-center justify-center text-center ">
          <span className="text-[120px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-orange-700">
            404
          </span>
          <span className="text-3xl mt-3 font-bold text-gray-700 tracking-widest uppercase">
            Not Found
          </span>
        </div>

        {/* Message and Button */}
        <div className="text-center md:text-left max-w-sm">
          <h3 className="text-2xl font-semibold mb-3">This page doesn't exist.</h3>
          <p className="text-gray-700 mb-6">
            The page you're looking for might have been moved or deleted.
            Don't worry — you can go back to safety.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-gradient-to-br from-gray-500 to-orange-700 rounded-full font-semibold text-white shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Go to Main Website
          </button>
        </div>
      </div>
    </div>
  );
}
