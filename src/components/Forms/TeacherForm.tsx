import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { FormItem } from "../ui/form";

const TeacherForm = () => {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg">
            Invite teacher via email
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <form action="" className="flex gap-2">
            <Input
              className="rounded-lg h-10"
              placeholder="Email"
              type="email"
            />
            <Button size="lg">Send</Button>
          </form>

          <p className="flex gap-2 items-center justify-center text p-4 text-center">
            <p className="border-t w-20" />
            <span>OR</span>
            <p className="border-t w-20" />
          </p>

          {/* teacher signup form */}
          <form className="space-y-4">
            <FormItem>
              <Label htmlFor="name">Teacher name</Label>
              <Input
                type="text"
                className="rounded-lg"
                id="name"
                name="name"
                required
                placeholder="Full Name"
              />
            </FormItem>

            <FormItem>
              <Label htmlFor="email">Teacher Email</Label>

              <Input
                type="email"
                className="rounded-lg"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
            </FormItem>

            <FormItem>
              <Label htmlFor="phone">Teacher Contact</Label>

              <Input
                type="tel"
                className="rounded-lg"
                id="phone"
                name="phone"
                required
                placeholder="Contact No."
              />
            </FormItem>

            <FormItem>
              <Label htmlFor="name">Subjects</Label>
              <Input
                type="text"
                className="rounded-lg"
                id="subjects"
                name="subjects"
                required
                placeholder="Subjects"
              />
              <p className="text-muted-foreground">
                Separate subjects with commas.
              </p>
            </FormItem>

            <FormItem>
              <Label htmlFor="classes">Enter Classes</Label>

              <Input
                type="text"
                className="rounded-lg"
                id="classes"
                name="classes"
                required
                placeholder="Classes"
              />
              <p className="text-muted-foreground">
                Separate classes with commas.
              </p>
            </FormItem>

            <FormItem>
              <Label htmlFor="address">Teacher address</Label>
              <Input
                type="text"
                className="rounded-lg"
                id="address"
                name="address"
                required
                placeholder="Address"
              />
            </FormItem>

            <Button type="submit">Add new Teacher</Button>
          </form>
        </DialogDescription>
      </DialogContent>
    </>
  );
};

export default TeacherForm;
