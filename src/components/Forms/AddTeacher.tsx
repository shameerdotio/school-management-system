"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Subjects from "../SubjectList/Subjects";
import { Dialog, DialogTrigger } from "../ui/dialog";
import TeacherForm from "./TeacherForm";
import { Button } from "../ui/button";

const AddTeacher = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Card className="flex flex-col items-center w-full h-max gap-4">
      <CardHeader className="items-center pb-0">
        <CardTitle> Add new Teacher</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 w-full">
        <Subjects value={value} setValue={setValue} />

        <Dialog>
          <div className="text-center">
            {value !== "" ? (
              <DialogTrigger className="font-normal px-4 h-9 text-sm rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90">
                Add teacher
              </DialogTrigger>
            ) : (
              <Button>Add teacher</Button>
            )}
            <TeacherForm />
          </div>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default AddTeacher;
