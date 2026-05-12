import { Textarea } from "@/Components/ui/textarea";
import { BrainCircuitIcon, CheckCircle2, LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import { main } from "../../../../../../service/Groke";
import { promptTemplate } from "@/utils/PROMPT";
import { Button } from "@/Components/ui/button";
import { setResumeValue } from "../../../../../../service/GlobalAPI";
import { useParams } from "react-router-dom";

const SummaryForm = ({ data, setData }) => {
  const [summery, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [groqResponse, setGroqResponse] = useState([]);
  const param = useParams();

  console.log(summery);

  // useEffect
  const AIsummery = async () => {
    if (!data?.jobTitle) return;
    setLoading(true);

    //Summey from Groq
    const resp = await main(`${data.jobTitle + promptTemplate}`);
    const resData = JSON.parse(resp);

    setGroqResponse(resData);
    setLoading(false);
  };

  const handleSummary = (e) => {
    const { name, value } = e.target;

    //TO change the summary Area in real time
    setSummary({
      ...summery,
      [name]: value,
    });

    // Chamging mock dada
    setData({
      ...data,
      [name]: value,
    });
  };

  const saveForm = () => {
    /*
      data = {
        data : {data}
      }
    */
    const data = {
      data: { summery },
    };

    //Setting  summary to backend
    setResumeValue(param.resumeId, data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="relative mt-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[7px] bg-gradient-to-r from-[#1F6FEB] via-[#4DAAFF] to-[#1F6FEB]" />

      <div className="px-8 pt-8 pb-9">
        <div className="mb-7">
          <h2 className="text-xl font-semibold text-[#0f0f0f] tracking-tight">
            Summary
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Add objective or goal for your summary
          </p>
        </div>

        <div className="flex items-baseline justify-between">
          <label className="text-gray-700 font-medium text-sm tracking-wide">
            Add Summary
          </label>

          <button
            type="button"
            disabled={loading}
            onClick={AIsummery}
            className="flex gap-1 justify-center items-center px-3 py-2 text-sm font-semibold text-white bg-linear-to-r from-indigo-500 to-purple-500 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <div className="flex gap-2 justify-center items-center">
                <BrainCircuitIcon width={19} />
                <h1>AI</h1>
              </div>
            )}
          </button>
        </div>

        <Textarea
          name="summery"
          value={data?.summery}
          onChange={handleSummary}
          className="mt-3 h-30"
        />

        <div className=" w-full mt-7 flex justify-end">
          <Button
            disabled={!summery}
            onClick={saveForm}
            className="flex items-center gap-2 px-5 py-2 rounded-lg 
                                  bg-[#1F6FEB] text-white font-semibold shadow-md text-xl 
                                  hover:bg-[#4DAAFF] transition"
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </div>

      {groqResponse?.length > 0 && (
        <div className="mx-6 mb-6 space-y-4">
          {/* header */}
          <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
            <BrainCircuitIcon size={18} className="text-indigo-600" />
            AI Suggestions
          </div>

          {/* cards */}
          <div className="flex flex-col gap-4">
            {groqResponse.map((item, index) => {
              const isSelected = summery === item.summary;

              return (
                <div
                  key={index}
                  onClick={() => {
                    setSummary(item.summary);
                    setData({
                      ...data,
                      summery: item.summary,
                    });
                  }}
                  className={`relative rounded-xl border p-5 transition-all duration-200 cursor-pointer
              ${
                isSelected
                  ? "border-indigo-500 bg-indigo-50 shadow-sm"
                  : "border-gray-200 bg-white hover:shadow-md hover:border-indigo-300"
              }`}
                >
                  {/* badge */}
                  <div className="absolute top-4 right-4 text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                    Suggestion {index + 1}
                  </div>

                  {/* title row */}
                  <div className="flex items-center gap-2 mb-2 text-indigo-600 font-medium">
                    <BrainCircuitIcon size={16} />
                    AI Generated Summary
                  </div>

                  {/* content */}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* selected indicator */}
                  {isSelected && (
                    <div className="mt-3 flex items-center gap-1 text-xs text-indigo-600 font-medium">
                      <CheckCircle2 size={14} />
                      Applied
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryForm;
