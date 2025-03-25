"use client";
import React, {ComponentProps}  from "react";
import "./styles.scss";

interface ISelect {
  arrayValues: any;
  name?: any;
  title: string;
  register: any;
}

export const Select = ({
  arrayValues,
  name,
  title,
  register,
}: ISelect & ComponentProps<"select">) => {
  return (
    <>
      <label htmlFor={title}>{title}</label>

      <select {...register(name)}>
        {arrayValues?.map((opt: any) => {
          return (
            <option key={opt?.value} value={opt?.value}>
              {opt?.text}
            </option>
          );
        })}
      </select>
    </>
  );
};
