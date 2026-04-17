import React, { useEffect, useState } from "react";
import resumeContext from "./resumeContext";
import mockData from "@/utils/constansts/mockData";

const ResmeContextProvider = ({ children }) => {
  const [data, setData] = useState(mockData);

  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <resumeContext.Provider value={{ data, setData }}>
      {children}
    </resumeContext.Provider>
  );
};

export default ResmeContextProvider;
