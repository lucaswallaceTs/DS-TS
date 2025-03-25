"use client";
import React, { JSX } from "react";
import "./styles.scss";
import { H3Title } from "../H3Title/H3Title";
import { Button } from "../Button/Button";

interface IModalBox {
  title: string;
  textInfo: string;
  children: any;
  closeModal?: () => void;
}

export const ModalBox = ({
  title,
  textInfo,
  children,
  closeModal,
}: IModalBox): JSX.Element => {
  return (
    <>
      <div className="blocks-wrapper">
        <div className="blocks-wrapper__title">
          <div className="blocks-wrapper__title__info">
            <H3Title text={title} />
            <p>{textInfo}</p>
          </div>
          <div
            className="blocks-wrapper__title__close"
            onClick={closeModal}
          ></div>
        </div>
        <div className="blocks-wrapper__content">{children}</div>
        <div className="blocks-wrapper__btn-save">
          <Button title={"Salvar"} variation={"dark"} size={"medium"} />
        </div>
      </div>
    </>
  );
};
