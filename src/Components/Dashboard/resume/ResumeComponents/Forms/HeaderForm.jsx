import { Input } from "@/Components/ui/input";
import React, { useState } from "react";
import { setResumeValue } from "../../../../../../service/GlobalAPI";
import { useParams } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import { ArrowRight, Circle, LoaderCircle } from "lucide-react";

const HeaderForm = ({ data, setData }) => {
  // state
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  // doucment ID
  const params = useParams();

  //Handle Form data
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Current Form value
    setFormData({
      ...formData,
      [name]: value,
    });

    setData({
      ...data,
      [name]: value,
    });
  };

  const saveForm = () => {
    setLoading(true);

    const data = {
      data: formData,
    };

    setResumeValue(params.resumeId, data).then((resp) => {
      console.log(resp);
      setLoading(false);
    });
  };

  return (
    <div className="relative mt-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[7px] bg-gradient-to-r from-[#1F6FEB] via-[#4DAAFF] to-[#1F6FEB]" />

      <div className="px-8 pt-8 pb-9">
        <div className="mb-7">
          <h2 className="text-xl font-semibold text-[#0f0f0f] tracking-tight">
            Personal Details
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            This information appears on your resume header
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="First Name">
            <Input
              placeholder="John"
              name="firstName"
              defaultValue={data?.firstName}
              className="form-input"
              onChange={handleChange}
            />
          </FormField>

          <FormField label="Last Name">
            <Input
              placeholder="Doe"
              name="lastName"
              defaultValue={data?.lastName}
              className="form-input"
              onChange={handleChange}
            />
          </FormField>

          <FormField label="Job Title" span>
            <Input
              placeholder="Frontend Developer"
              name="jobTitle"
              defaultValue={data?.jobTitle}
              className="form-input"
              onChange={handleChange}
            />
          </FormField>

          <FormField label="Address" span>
            <Input
              placeholder="Bangalore, India"
              name="address"
              defaultValue={data?.address}
              className="form-input"
              onChange={handleChange}
            />
          </FormField>

          <FormField label="Mobile Number">
            <Input
              placeholder="+91 98765 43210"
              name="phone"
              defaultValue={data?.phone}
              className="form-input"
              onChange={handleChange}
            />
          </FormField>

          <FormField label="Email Address">
            <Input
              placeholder="john.doe@email.com"
              name="email"
              defaultValue={data?.email}
              className="form-input"
              onChange={handleChange}
            />
          </FormField>
        </div>
        <div className=" w-full mt-7 flex justify-end">
          <button
            onClick={saveForm}
            className="flex items-center gap-2 px-5 py-2 rounded-lg 
                        bg-[#1F6FEB] text-white font-semibold shadow-md text-xl 
                        hover:bg-[#4DAAFF] transition"
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

/* Reusable Field Wrapper */

const FormField = ({ label, children, span }) => {
  return (
    <div className={`space-y-1.5 ${span ? "md:col-span-2" : ""}`}>
      <label className="text-sm font-medium text-gray-600">{label}</label>
      {children}
    </div>
  );
};

export default HeaderForm;
