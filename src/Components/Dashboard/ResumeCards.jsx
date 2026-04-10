import React from "react";
import { Link } from "react-router-dom";

const ResumeCards = ({ resume }) => {
  console.log(resume);

  return (
    <Link to={`/dashboard/resume/${resume.resumeid}/edit`}>
      <div
        className="group relative h-64 w-full max-w-sm rounded-2xl overflow-hidden
    bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500
    p-[1.5px] transition-all duration-300 hover:cursor-pointer hover:scale-[1.03] hover:shadow-2xl"
      >
        {/* Inner Card */}
        <div
          className="h-full w-full rounded-2xl bg-white/90 backdrop-blur-lg
      px-6 py-5 flex flex-col justify-between"
        >
          {/* Header */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
              {resume?.title || "Untitled Resume"}
            </h2>

            <div className="mt-2 h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>

          {/* User Info */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-800">
              👤 {resume?.username || "Username"}
            </p>

            <p className="text-xs text-gray-500">
              ✉️ {resume?.userEmail || "user@email.com"}
            </p>
          </div>

          {/* Footer Badge */}

          <span
            className="text-xs text-center border px-3 py-1 rounded-full 
          bg-indigo-200 text-black font-medium"
          >
            Open →
          </span>
        </div>

        {/* Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100
      transition duration-500 blur-2xl
      bg-gradient-to-br from-indigo-400/30 via-purple-400/20 to-blue-400/30"
        ></div>
      </div>
    </Link>
  );
};

export default ResumeCards;
