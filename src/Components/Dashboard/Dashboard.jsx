import React, { useEffect, useState } from "react";
import ResumeItems from "./ResumeItems";
import { getUserData } from "../../../service/GlobalAPI";
import { useUser } from "@clerk/react";
import ResumeCards from "./ResumeCards";

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const user = useUser();

  //userEmail ->  useUser
  const emailAddress = user?.user?.externalAccounts?.[0]?.emailAddress;

  //runs userAllResume if user is there
  useEffect(() => {
    if (user) return userAllResume();
  }, []);

  //get user resume
  const userAllResume = () => {
    getUserData({ emailAddress }).then((res) => {
      const userResumes = res?.data?.data || [];

      //set resume
      setResumes(userResumes);
    });
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-50">
      <div className="w-full max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900">My Resumes</h1>

        <span className="mt-2 text-gray-500 text-sm font-medium">
          Manage your resumes with ResumeCraft 🚀
        </span>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
          <ResumeItems />

          {resumes.length > 0 &&
            resumes.map((resume) => <ResumeCards resume={resume} />)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
``;
