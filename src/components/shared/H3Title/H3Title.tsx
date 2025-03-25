import React from "react";
import "./styles.scss";

export type IH3Title = {
  text: string;
};

export const H3Title: React.FC<IH3Title> = ({ text }) => {
  return <h3>{text}</h3>;
};
