"use client";
import React, { JSX } from "react";
import "./styles.scss";
import { H3Title } from "../H3Title/H3Title";

interface ModalStandardProps {
  icon?: "approved" | "error" | "warning" | "alert";
  title: string;
  textInfo: string;
  children: any;
}

export const Blocks = ({
  icon,
  title,
  textInfo,
  children,
}: ModalStandardProps): JSX.Element => {
  return (
    <>
      <div className="blocks-wrapper">
        {icon && (
          <div
            className={`blocks-wrapper__icon blocks-wrapper__icon--${icon}`}
          ></div>
        )}

        <H3Title text={title} />
        <p className="blocks-wrapper__text">{textInfo}</p>
        <div className="blocks-wrapper__content">{children}</div>
      </div>
    </>
  );
};
