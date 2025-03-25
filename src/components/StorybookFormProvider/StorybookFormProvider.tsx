import { action } from "@storybook/addon-actions";
import React from "react";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const StorybookFormProvider = ({ children }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(action("[React Hooks Form] Submit"))}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export const withRHF = (showSubmitButton: boolean) => (
  Story: FC
) => (
  <StorybookFormProvider>
    <Story />
    {showSubmitButton && <button type="submit">Submit</button>}
  </StorybookFormProvider>
);