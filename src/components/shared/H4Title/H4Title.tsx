import React from "react";
import "./styles.scss";

export type IH4Title = {
  text: string;
};

export const H4Title: React.FC<IH4Title> = ({ text }) => {
  return <h4>{text}</h4>;
};
