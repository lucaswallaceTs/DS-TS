import React from "react";
import "./styles.scss";

export type IH6Title = {
  text: string;
};

export const H6Title: React.FC<IH6Title> = ({ text }) => {
  return <h6>{text}</h6>;
};
