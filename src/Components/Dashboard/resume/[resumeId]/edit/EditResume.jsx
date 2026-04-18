import React from "react";
import FormSection from "../../FormSection";
import ResumePreview from "../../ResumePreview";
import ResmeContextProvider from "@/context/ResmeContextProvider";
import { useParams } from "react-router-dom";

const EditResume = () => {


  return (
    <div className=" min-h-screen">
      <div className=" grid grid-cols-2 gap-10 p-10">
        <ResmeContextProvider>
          {/* Form Section */}
          <FormSection />

          {/* Resume Section */}
          <ResumePreview />
        </ResmeContextProvider>
      </div>
    </div>
  );
};

export default EditResume;
