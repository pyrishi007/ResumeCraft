import axios from "axios";

// api key
const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

// creating instance
const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

// methods - Update resume ddetails
export const setUserValue = (data) => axiosClient.post("/user-resumes", data);

//method - get data
export const getUserData = (userEmail) =>
  axiosClient.get(`/user-resumes?filters[userEmail][$eq]=${userEmail}`);


//Method - post Updated 
export const setResumeValue = (data) => axiosClient.post(`/user-resume`)