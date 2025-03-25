import React from "react";
import "./styles.scss";
import { H2Title } from "../H2Title/H2Title";
import { H5Title } from "../H5Title/H5Title";

export type ITitlePage = {
  title: string;
  subtitle: string;
};

export const TitlePage: React.FC<ITitlePage> = ({ title, subtitle }) => {
  return (
    <>
      <H2Title text={title} />
      <H5Title text={subtitle} />
    </>
  );
};
