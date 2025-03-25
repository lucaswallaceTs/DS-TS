import React, { useState } from "react";
import "./styles.scss";
import { Button } from "../Button/Button";
import { Avatar } from "../Avatar";

export type IMenuLoggedOut = {
  isLoggedIn: boolean;
  imagePerfil: string;
  nomePerfil: string;
  pageLogin: string;
  sigla: string;
  linkCalendario: string;
  linkAtendimento: string;
  filterModality: () => void;
  idioma: () => void;
  openMenuModal: () => void;
  linkHome?: string;
};

export const MenuLoggedOut: React.FC<IMenuLoggedOut> = ({
  isLoggedIn,
  imagePerfil,
  nomePerfil,
  pageLogin,
  sigla,
  filterModality,
  idioma,
  linkCalendario,
  linkAtendimento,
  linkHome,
  openMenuModal,
  ...props
}) => {
  return (
    <>
      <nav className="menu-deslogado">
        <div className="menu-deslogado__wrapper-logo">
          <a href={linkHome}>
            <div className="menu-deslogado__wrapper-logo--logo"></div>
          </a>
          <div
            onClick={filterModality}
            className="menu-deslogado__wrapper-logo--item1"
          >
            Modalidade
          </div>
          <a href={linkCalendario}>
            <div className="menu-deslogado__wrapper-logo--item2">
              Calendário de eventos
            </div>
          </a>
          <a href={linkAtendimento}>
            <div className="menu-deslogado__wrapper-logo--item3">
              Atendimento
            </div>
          </a>
          <a href="#">
            <div className="menu-deslogado__wrapper-logo--item3">
              Crie seu evento
            </div>
          </a>
        </div>

        <div className="menu-deslogado__wrapper-login">
          <div
            onClick={idioma}
            {...props}
            className="menu-deslogado__wrapper-login--idioma"
          >
            <p>Idioma</p>
            <button>{sigla}</button>
          </div>
          {isLoggedIn ? (
            <>
              <a href={pageLogin}>
                <div className="menu-deslogado__wrapper-login--perfil">
                  <Avatar
                    linkImage={
                      "https://criticalhits.com.br/wp-content/uploads/2021/08/mestre-kame.jpg"
                    }
                    width={32}
                    height={32}
                    alt={""}
                  />
                  {nomePerfil}
                </div>
              </a>
              <div className="menu-deslogado__wrapper-login--icon-menu"></div>
            </>
          ) : (
            <>
              <a href={pageLogin}>
                <div className="menu-deslogado__wrapper-login--perfil">
                  <button></button>
                  Login
                </div>
              </a>
            </>
          )}

          <div className="menu-deslogado__wrapper-login--icon-menu">
            <button onClick={openMenuModal}></button>
          </div>
        </div>
      </nav>
    </>
  );
};
