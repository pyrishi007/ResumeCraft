import React, { useContext } from "react";
import resumeContext from "@/context/resumeContext";
import HeaderPreview from "./ResumeComponents/Preview/HeaderPreview";
import SummaryPreview from "./ResumeComponents/Preview/SummaryPreview";
import ExperencePreview from "./ResumeComponents/Preview/ExperencePreview";
import StudyPreview from "./ResumeComponents/Preview/StudyPreview";
import SkillPreview from "./ResumeComponents/Preview/SkillPreview";
import CertificatePreview from "./ResumeComponents/Preview/CertificatePreview";

const ResumePreview = () => {
  const { data, setData } = useContext(resumeContext);

  console.log(data);

  return (
    <div className=" p-10 border shadow-md">
      {/* Header section */}
      <HeaderPreview data={data} />

      {/* Summary section */}
      <SummaryPreview data={data} />

      {/* Expernce section */}
      <ExperencePreview data={data} />

      {/* Eduction section */}
      <StudyPreview data={data} />

      {/* Certificate section */}
      <SkillPreview data={data} />

      {/* Achivement  */}
      <CertificatePreview data={data} />
    </div>
  );
};

export default ResumePreview;
