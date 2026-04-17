import React from "react";

const HeaderPreview = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h2
        className="primary-font font-bold tracking-wide text-2xl text-center"
        style={{
          color: data?.themeColor,
        }}
      >
        {data?.firstName} {data?.lastName}
      </h2>
      <h2 className="primary-font text-center text-xl mb-2 font-medium">{data?.jobTitle}</h2>
      <h2
        className="primary-font text-center font-bold tracking-wider text-xs"
        style={{
          color: data?.themeColor,
        }}
      >
        {data?.address}
      </h2>

      <div className="primary-font flex justify-between">
        <h2
          className="font-bold text-xs"
          style={{
            color: data?.themeColor,
          }}
        >
          {data?.phone}
        </h2>
        <h2
          className="primary-font font-bold text-xs"
          style={{
            color: data?.themeColor,
          }}
        >
          {data?.email}
        </h2>
      </div>
      <hr
        className=" my-2"
        style={{
          borderColor: data?.themeColor,
        }}
      />
    </div>
  );
};

export default HeaderPreview;
