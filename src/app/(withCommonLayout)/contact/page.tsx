"use client";
import PForm from "@/src/components/ui/Form/PForm";
import PInput from "@/src/components/ui/Form/PInput";
import PTextArea from "@/src/components/ui/Form/PTextArea";
import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ContactPage = () => {
  const onSubmit: SubmitHandler<any> = (data) => {};
  return (
    <div className="grid justify-items-center content-center h-screen">
      <h2 className="text-primaryColor">Lets Send Email </h2>
      <PForm onSubmit={onSubmit}>
        <div className="grid grid-cols-2  gap-4 ">
          <PInput label="First Name" name="firstName" />

          <PInput label="Last Name" name="lastName" />

          <div className="col-span-2">
            <PInput label="Email" name="email" />
          </div>

          <div className="col-span-2">
            <PTextArea label="Message" name="message" />
          </div>
        </div>

        <Button
          type="submit"
          className="bg-primaryColor mt-8 text-black w-full"
        >
          Send Mail
        </Button>
      </PForm>
    </div>
  );
};

export default ContactPage;
