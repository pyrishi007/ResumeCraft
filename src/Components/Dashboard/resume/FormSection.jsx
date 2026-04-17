import React, { useContext, useState } from "react";
import HeaderForm from "./ResumeComponents/Forms/HeaderForm";
import SummaryForm from "./ResumeComponents/Forms/SummaryForm";
import ExperenceForm from "./ResumeComponents/Forms/ExperenceForm";
import StudyForm from "./ResumeComponents/Forms/StudyForm";
import CertificateForm from "./ResumeComponents/Forms/CertificateForm";
import { ArrowLeft, ArrowRight, Palette } from "lucide-react";
import SkillsForm from "./ResumeComponents/Forms/SkillsForm";
import resumeContext from "@/context/resumeContext";

const FormSection = () => {
  const { data, setData } = useContext(resumeContext);

  const [nextCountForm, setNextCountForm] = useState(0);

  const changeForm = () => {
    if (nextCountForm <= 4) return setNextCountForm(nextCountForm + 1);
  };

  return (
    <div>
      {/* Buttons */}
      <div className="flex justify-between items-center px-6 py-4 bg-whiteshadow-sm">
        {/* Theme Button */}
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-lg border 
                    border-[#1F6FEB]/30 text-[#1F6FEB] font-medium 
                    hover:bg-[#4DAAFF]/10 hover:border-[#1F6FEB] transition"
        >
          <Palette width={16} />
          Theme
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-6">
          {/* Back Button */}
          {nextCountForm > 0 && (
            <button
              onClick={() => {
                setNextCountForm(nextCountForm - 1);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg 
                        border border-gray-400 text-[#0f0f0f] font-medium 
                      hover:bg-gray-200 transition"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          )}

          {/* Next Button */}
          <button
            onClick={changeForm}
            className="flex items-center gap-2 px-5 py-2 rounded-lg 
                        bg-[#1F6FEB] text-white font-semibold shadow-md 
                        hover:bg-[#4DAAFF] transition"
          >
            Next
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Header Form */}
      {nextCountForm === 0 && <HeaderForm data={data} setData={setData} />}

      {/* Summary Form */}
      {nextCountForm === 1 && <SummaryForm data={data} setData={setData} />}

      {/* Experence Form */}
      {nextCountForm === 2 && <ExperenceForm data={data} setData={setData} />}

      {/* Study Form */}
      {nextCountForm === 3 && <StudyForm data={data} setData={setData} />}

      {/* Experence Form */}
      {nextCountForm === 4 && <SkillsForm data={data} setData={setData} />}

      {/* Experence Form */}
      {nextCountForm === 5 && <CertificateForm data={data} setData={setData} />}
    </div>
  );
};

export default FormSection;
