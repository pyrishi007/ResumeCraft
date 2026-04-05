import { SignIn } from "@clerk/react";

const AuthForm = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* LEFT BRAND PANEL */}
      <div className="hidden md:flex flex-col justify-center items-start px-20 bg-gradient-to-br from-gray-900 to-black text-white space-y-6">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <img src="/logomark.png" alt="resumeCraft logo" className="w-14" />

          <h1 className="text-5xl font-bold tracking-tight">
            resume<span className="text-blue-500">Craft</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-md leading-relaxed">
          Build professional resumes from scratch in minutes. Design smarter,
          format faster, and stand out with modern recruiter-ready templates
          powered by resumeCraft.
        </p>

        {/* Feature bullets */}
        <div className="space-y-3 text-gray-400 text-base">
          <p>✔ AI-ready resume structure</p>
          <p>✔ Clean professional templates</p>
          <p>✔ Export instantly as PDF</p>
        </div>
      </div>

      {/* RIGHT AUTH PANEL */}
      <div className="flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
