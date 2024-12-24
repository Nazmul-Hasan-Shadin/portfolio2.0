import { Input } from "@nextui-org/react";
import React from "react";
import { useFormContext } from "react-hook-form";

const PInput = ({ label, name }: { label: string; name: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log(errors, "iam error");

  return (
    <div>
      <Input
        {...register(name, { required: true, maxLength: 60 })}
        label={label}
        aria-invalid={errors.name ? "true" : "false"}
        labelPlacement="outside"
        type="email"
      />
      {errors[name] && errors[name].type === "required" && (
        <span className="text-red-400" role="alert">
          This field is required
        </span>
      )}
    </div>
  );
};

export default PInput;
