import React from "react";

const SkillPreview = ({ data }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center primary-font font-bold text-sm mb-2"
        style={{
          color: data?.themeColor,
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: data?.themeColor,
        }}
      />

      <div className="grid grid-cols-2 gap-3 my-4">
        {data?.skills.map((skill, index) => (
          <div key={index} className="flex primary-font items-center justify-between">
            <h2 className="text-xs">{skill.name}</h2>
            <div className="h-2 bg-gray-200 w-30">
              <div
                className="h-2"
                style={{
                  backgroundColor: data?.themeColor,
                  width: skill?.rating + "%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPreview;
