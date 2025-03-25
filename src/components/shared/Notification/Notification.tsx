import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Image from "next/legacy/image";

interface INotification {
  type: 'erro' | 'orientation' | 'alert' | 'validation';
  title: string;
  info: string;
}

export const Notification = ({ type,title,info }: INotification) => {

  return (
    <div className={`notification ${type}`}>
      <div className={`notification__icon ${type}__icon`}>
      </div>
      <div className="notification__title">
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
    </div>
  );
};
