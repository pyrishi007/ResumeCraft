import React from "react";
import { Link } from "react-router-dom";
const FeatureSection = () => {
  return (
    <section>
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-6xl font-bold text-gray-900">
          Wanna know how it <span className=" text-blue-500">Works?</span>
        </h2>

        <p className="text-gray-500 mt-3">
          Create your professional resume in just 3 simple steps
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-linear-to-br from-yellow-50 to-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition p-8 text-center">
          <div className="flex mb-5">
            <img src="./ai.png" alt="" className="w-8" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900">
            Summarize with AI
          </h3>

          <p className="mt-3 text-gray-500">
            Enter your personal information, education, and work experience
            easily.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-linear-to-br from-indigo-50 to-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition p-8 text-center">
          <div className="flex mb-5">
            <img src="./review.png" alt="" className="w-7" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900">
            Customize Resume
          </h3>

          <p className="mt-3 text-gray-500">
            Edit sections, choose layouts, and structure your resume
            professionally.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-linear-to-br from-pink-50 to-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition p-8 text-center">
          <div className="flex mb-5">
            <img src="./download.png" alt="" className="w-7" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900">
            Download & Apply
          </h3>

          <p className="mt-3 text-gray-500">
            Export your resume instantly and start applying with confidence.
          </p>
        </div>
      </div>

      {/* CTA Button */}
    </section>
  );
};

export default FeatureSection;
