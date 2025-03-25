import React from "react";
import "./styles.scss";
import Image from "next/legacy/image";
import { Button } from "../Button/Button";
import Link from "next/link";

export type IMenuStandard = {
  prevPage: any;
};

export const MenuStandard: React.FC<IMenuStandard> = ({ prevPage }) => {
  return (
    <>
      <nav className="menu-standard">
        <div className="menu-standard__voltar">
          <a href={prevPage}>
            <strong>Voltar</strong>
          </a>
        </div>
        <div className="menu-standard__logo">
          <div className="menu-standard__logo--ts"></div>
        </div>
        <div className="menu-standard__wrapper-login">
          <div className="menu-standard__wrapper-login--idioma">
            <button></button>
            Idioma
          </div>
          <div className="menu-standard__wrapper-login--evento">
            <Button
              title={"Preciso de ajuda"}
              variation={"ghost"}
              size={"small"}
            />
          </div>
        </div>
      </nav>
    </>
  );
};
