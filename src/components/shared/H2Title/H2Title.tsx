import React from "react";
import "./styles.scss";

export type IH2Title = {
  text: string;
};

export const H2Title: React.FC<IH2Title> = ({ text }) => {
  return <h2>{text}</h2>;
};
