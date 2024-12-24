import { Textarea } from "@nextui-org/react";
import React from "react";
import { useFormContext } from "react-hook-form";

const PTextArea = ({ name, label }: { name: string; label: string }) => {
  const { register } = useFormContext();
  return (
    <Textarea
      key={"bordered"}
      className="col-span-12 md:col-span-6 mb-6 md:mb-0"
      label={label}
      {...register(name)}
      labelPlacement="outside"
      placeholder="Enter your Message"
      variant={"bordered"}
    />
  );
};

export default PTextArea;
