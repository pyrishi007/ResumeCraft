import React from "react";
import { Link } from "react-router-dom";

const CTAsection = () => {
  return (
    <section className="text-center mt-24 pb-28">
      <h2 className="text-4xl font-bold text-gray-900">
        Ready to build your resume?
      </h2>

      <p className="mt-4 text-gray-600">
        Join thousands already using resumeCraft ✨
      </p>

      <Link to="/auth/sign-in">
        <button className="mt-8 px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
          Get Started Now
        </button>
      </Link>
    </section>
  );
};

export default CTAsection;
