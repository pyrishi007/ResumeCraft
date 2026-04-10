import React, { useState } from "react";
import { LoaderCircle, PlusSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/react";
import { setUserValue } from "../../../service/GlobalAPI";
import { useNavigate } from "react-router-dom";

const ResumeItems = () => {
  //state
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const [loading, setLoading] = useState();
  const user = useUser();
  const uid = uuidv4();
  const navigate = useNavigate();

  //clerk - useUser
  const fullName = user?.user?.fullName;
  const emailAddress = user?.user?.externalAccounts?.[0]?.emailAddress;

  const onCreate = async () => {
    const data = {
      resumeid: uid,
      title: resumeTitle,
      username: fullName,
      userEmail: emailAddress,
    };

    try {
      //post
      setLoading(true);
      setUserValue({ data }).then((res) => {
        if (res) {
          // response arrives
          setLoading(false);
          const documentId = res.data.data.documentId;
          navigate("/dashboard/resume/" + documentId + "/edit");
        }
      });
    } catch (error) {
      //in-case any e rror
      throw new error("This is a bad request");
    }
  };

  return (
    <>
      <div
        onClick={() => setOpenDialog(true)}
        className="group h-64 flex flex-col items-center justify-center
        border-2 border-dashed border-gray-300 rounded-xl
        bg-white cursor-pointer transition-all duration-300
        hover:border-blue-500 hover:shadow-md"
      >
        <PlusSquare
          size={40}
          className="text-gray-400 group-hover:text-blue-600 transition"
        />

        <span className="mt-3 text-sm text-gray-500 group-hover:text-blue-600 font-medium">
          Create New Resume
        </span>
      </div>

      <Dialog open={openDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            {/* Header */}
            <DialogTitle className="text-xl font-bold text-blue-600">
              Add new Resume
            </DialogTitle>

            {/* Description */}
            <DialogDescription>
              <span>Build a professional resume with resumeCraft</span>
            </DialogDescription>

            {/* Fields */}
            <Field>
              <Input
                onChange={(e) => setResumeTitle(e.target.value)}
                value={resumeTitle}
                id="input-demo-api-key"
                type="text"
                placeholder="Ex- Full Stack Resume"
              />
            </Field>
          </DialogHeader>

          {/* cancel * continue */}
          <DialogFooter className="flex gap-2 justify-end">
            <Button variant="ghost" onClick={() => setOpenDialog(!openDialog)}>
              Cancel
            </Button>

            <Button
              disabled={!resumeTitle}
              onClick={onCreate}
              className="bg-blue-600"
            >
              {loading ? (
                <LoaderCircle className=" animate-spin" />
              ) : (
                "continue"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ResumeItems;
