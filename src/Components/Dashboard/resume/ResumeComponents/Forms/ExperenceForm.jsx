import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Delete, FilePlusCornerIcon, Trash, Trash2 } from "lucide-react";
import React, { useState } from "react";

const formDetail = {
  title: "Your Job title",
  companyName: "Company name",
  city: "City",
  state: "State",
  startDate: "MM/YYYY",
  endDate: "MM/YYYY",
  currentlyWorking: true,
  workSummery: "Your job experience",
};

const ExperenceForm = ({ data, setData }) => {
  const [experience, setExperience] = useState([formDetail]);

  const addExprerience = () => {
    setExperience([...experience, { formDetail }]);
  };

  const handleDelete = () => {
    experience.length > 1 && setExperience(experience.slice(0, -1));
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    
  };

  return (
    <div className="relative mt-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[7px] bg-gradient-to-r from-[#1F6FEB] via-[#4DAAFF] to-[#1F6FEB]" />

      <div className="px-8 pt-8 pb-9">
        <div className="mb-7">
          <h2 className="text-xl font-semibold text-[#0f0f0f] tracking-tight">
            Professional Experience
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            This information appears on your professional experience
          </p>
        </div>

        <div className="">
          {experience.map((ele, key) => (
            <div key={key}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-3 mt-10">
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input
                    name="title"
                    onChange={handleForm}
                    placeholder={formDetail?.title}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-xs">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={handleForm}
                    placeholder={formDetail?.companyName}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <Input
                    name="city"
                    onChange={handleForm}
                    placeholder={formDetail?.city}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <Input
                    name="state"
                    onChange={handleForm}
                    placeholder={formDetail?.state}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    type="date"
                    onChange={handleForm}
                    name="startDate"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    type="date"
                    onChange={handleForm}
                    name="endDate"
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 flex justify-between">
          <Button onClick={addExprerience} className=" bg-gray-600">
            Add
            <FilePlusCornerIcon />
          </Button>

          <div className="flex gap-5">
            <Button
              onClick={handleDelete}
              className="flex items-center gap-2 px-5 py-2 rounded-lg 
                        bg-red-500 text-white font-semibold shadow-md text-md 
                        hover:bg-[#4DAAFF] transition"
            >
              <Trash2 />
            </Button>
            <Button
              className="flex items-center gap-2 px-5 py-2 rounded-lg 
                        bg-[#1F6FEB] text-white font-semibold shadow-md text-md 
                        hover:bg-[#4DAAFF] transition"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperenceForm;
