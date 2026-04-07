import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className=" max-w-7xl mx-auto px-6 pt-24 pb-32 grid md:grid-cols-2 gap-12 items-center">

      <div>
        <div className="border inline-block bg-linear-to-r from-blue-200 rounded-full px-4 py-1 text-blue-600 font-medium text-sm">
          🚀 Build resumes smarter, not harder
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
          Craft a Resume that
          <span className="text-blue-600"> Gets You Hired</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-lg">
          resumeCraft helps you create clean, ATS-friendly resumes in minutes
          using modern templates, smart formatting, and instant export.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link to="/auth/sign-in">
            <button className="px-7 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg">
              Start Building Free
            </button>
          </Link>

          <button className="px-7 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
            View Templates
          </button>
        </div>

        <div className="mt-10">
          <p className="text-sm text-gray-400 mb-3">Connect with resumeCraft</p>

          <div className="flex gap-6 text-2xl text-gray-400">
            <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
            <FaTwitter className="hover:text-blue-500 transition cursor-pointer" />
            <FaLinkedin className="hover:text-blue-700 transition cursor-pointer" />
            <FaGithub className="hover:text-black transition cursor-pointer" />
          </div>
        </div>
      </div>

      {/* animation with design */}
      <div className="relative flex justify-center">
        <div className="bg-white shadow-2xl rounded-2xl p-6 w-80 rotate-3 hover:rotate-0 transition duration-500">
          <div className="space-y-3">
            <div className="h-4 bg-orange-300 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="h-3 bg-gray-100 rounded"></div>
            <div className="h-3 bg-gray-100 rounded"></div>
            <div className="h-3 bg-gray-100 rounded"></div>
          </div>
        </div>

        <div className=" absolute bg-white left-2 shadow-xl -rotate-5 hover:rotate-0 top-10 p-6 rounded-lg transition duration-500">
          <div className=" space-y-2">
            <div className="h-3 bg-blue-200 w-15"></div>
            <div className="h-3 bg-gray-200 w-40"></div>
            <div className="h-3 bg-gray-100"></div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 bg-white shadow-lg rounded-xl p-5 w-52 rotate-6 hover:rotate-0 transition duration-500">
          <div className="space-y-2">
            <div className="h-3 bg-pink-200 rounded w-16"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
