import React from "react";

const StudyPreview = ({ data }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center primary-font  font-bold text-sm mb-2"
        style={{
          color: data?.themeColor,
        }}
      >
        Education
      </h2>
      <hr
        style={{
          borderColor: data?.themeColor,
        }}
      />

      {data?.education.map((education, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm primary-font font-bold"
            style={{
              color: data?.themeColor,
            }}
          >
            {education.universityName}
          </h2>
          <h2 className="text-xs primary-font flex justify-between">
            {education?.degree} in {education?.major}
            <span>
              {education?.startDate} - {education?.endDate}
            </span>
          </h2>
          <p className="text-xs my-2">{education?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StudyPreview;
