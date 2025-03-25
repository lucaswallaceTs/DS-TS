import React from "react";
import "./styles.scss";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export const AppBanner = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <>
    <div className="warning-text">
      <p className="warning-text--desktop">
        Baixe nosso aplicativo! Disponível para <Link href="#">Android</Link> e{" "}
        <Link href="#">iOS</Link>
      </p>
      <p className="warning-text--mobile">
        APP disponível para <Link href="#">Android</Link> e{" "}
        <Link href="#">iOS</Link>
      </p>
      <button className="warning-text__close" onClick={handleClose} aria-label="Fechar aviso">
      </button>
    </div>
    </>
  );
};
