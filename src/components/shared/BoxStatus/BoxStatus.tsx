import React from "react";
import "./styles.scss";

export type IBoxStatus = {
  text: string;
  className: 'positivo' |'negativo' | 'alerta' ;
};

export const BoxStatus: React.FC<IBoxStatus> = ({ text,className }) => {
  return (
    <>
      <div className={`${className}`}>
          {text}
      </div>
    </>
  )
};
