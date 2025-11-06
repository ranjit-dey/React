// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://api.github.com/users/ranjit-dey")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((userData) => {
//         setData(userData);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

    const data = useLoaderData();

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[80vh]">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-gray-700"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-red-600 font-semibold mt-20">
//         ⚠️ Error: {error}
//       </div>
//     );
//   }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-800">
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-sm text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
        <img
          src={data.avatar_url}
          alt={data.name}
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300 shadow-md mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{data.name}</h1>
        <p className="text-gray-600">@{data.login}</p>

        <div className="flex justify-around mt-6">
          <div className="bg-gray-200 w-20 py-3 rounded-lg">
            <p className="text-xl font-semibold">{data.followers}</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div className="bg-gray-200 w-20 py-3 rounded-lg">
            <p className="text-xl font-semibold">{data.following}</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
          <div className="bg-gray-200 w-20 py-3 rounded-lg">
            <p className="text-xl font-semibold">{data.public_repos}</p>
            <p className="text-sm text-gray-500">Repos</p>
          </div>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-5 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Github;
