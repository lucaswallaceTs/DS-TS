import React from "react";
import "./styles.scss";

export type IH1Title = {
  text: string;
};

export const H1Title: React.FC<IH1Title> = ({ text }) => {
  return <h1>{text}</h1>;
};
