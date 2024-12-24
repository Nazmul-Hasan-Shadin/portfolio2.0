import { Form } from "@nextui-org/react";
import React, { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const PForm = ({
  children,
  onSubmit,
  defaultValues,
}: {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
  defaultValues?: any;
}) => {
  let defautlValue: Record<string, any> = {};
  if (defaultValues) {
    defautlValue["defaultValues"] = defaultValues;
  }
  const method = useForm(defautlValue);

  const hanldeOnSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    onSubmit(data);
    method.reset();
  };

  return (
    <FormProvider {...method}>
      <Form onSubmit={method.handleSubmit(hanldeOnSubmit)}>{children} </Form>;
    </FormProvider>
  );
};

export default PForm;
