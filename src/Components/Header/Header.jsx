import { useUser } from "@clerk/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignOutButton } from "@clerk/react";
import { UserButton } from "@clerk/react";

const Header = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  console.log(isSignedIn);

  return (
    <header className="flex sticky items-center justify-between px-6 py-3 shadow bg-linear-to-r from-white to-blue-50">
      <div className="flex items-center">
        <img
          className="w-12 h-12 object-contain"
          src="/logomark.png"
          alt="resumeCraft logo"
        />

        <h1 className="text-2xl font-semibold tracking-tight">
          <span className="text-gray-900 font-mono">resume</span>
          <span className="text-blue-600 font-bold">Craft</span>
        </h1>
      </div>

      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <Link to={"/dashboard"}>
            <button className="text-gray-600 outline px-5 py-2 rounded-lg outline-gray-400 hover:text-gray-800 hover:outline-gray-500 hover:bg-blue-100 transition hover:cursor-pointer font-medium">
              Dashboard
            </button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <div>
          <Link to={"/auth/sign-in"}>
            <button className="text-gray-200 px-8 py-2 rounded-lg bg-black hover:bg-gray-800 font-medium transition">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
