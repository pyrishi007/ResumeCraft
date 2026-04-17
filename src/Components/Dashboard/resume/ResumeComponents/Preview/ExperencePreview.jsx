import React from "react";

const ExperencePreview = ({ data }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center primary-font font-bold text-sm mb-2"
        style={{
          color: data?.themeColor,
        }}
      >
        Professional Experience
      </h2>
      <hr
        style={{
          borderColor: data?.themeColor,
        }}
      />

      {data?.experience?.map((experience, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm primary-font font-bold"
            style={{
              color: data?.themeColor,
            }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-xs primary-font flex justify-between">
            {experience?.companyName}, {experience?.city}, {experience?.state}
            <span>
              {experience?.startDate} To{" "}
              {experience?.currentlyWorking
                ? "Present"
                : experience.endDate}{" "}
            </span>
          </h2>
          {/* <p className='text-xs my-2'>
                    {experience.workSummery}
                </p> */}
          <div
            className="text-xs my-2"
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperencePreview;
