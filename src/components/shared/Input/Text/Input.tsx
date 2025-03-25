import React, { ComponentProps } from "react";

interface IInput {
  errors?: any | null;
  register?: unknown;
  name?: string;
  label?: string;
}

export const Input = ({
  errors,
  register,
  label,
  ...props
}: IInput & ComponentProps<"input">) => {
  return (
    <div className="mt-5 mb-2 w-full">
      <label
        htmlFor={label}
        className={`mb-2 block w-full text-sm ${
          props.disabled ? "text-gray-400" : ""
        }`}
      >
        {label}
      </label>
      <input
        id={label}
        {...errors}
        {...(register && typeof register === "object" ? register : {})}
        {...props}
        className={`${
          props.name && errors[props.name] != null && !props?.disabled
            ? "border-[#FF4949] text-[#FF4949] placeholder-[#FF4949] focus:outline-1 focus:outline-[#FF4949]"
            : "border-[#d7d7d7] focus:placeholder-black"
        } h-12 w-full rounded-lg border bg-white px-3.5 py-3.5 focus:outline-1 disabled:border-[#c6c6c6] disabled:bg-[#ebebeb] disabled:text-[#8f8f8f]`}
      />
      {errors &&
        props.name &&
        errors[props.name] != null &&
        !props?.disabled && (
          <span className="mt-1 block w-full text-xs text-[#FF4949]">
            {errors?.[props.name]?.message}
          </span>
        )}
    </div>
  );
};
