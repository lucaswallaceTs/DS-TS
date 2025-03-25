import React from "react";
import "./styles.scss";

export type IH5Title = {
  text: string;
};

export const H5Title: React.FC<IH5Title> = ({ text }) => {
  return <h5>{text}</h5>;
};
