import React from "react";
import "./styles.scss";
import { BoxStatus } from "../BoxStatus/BoxStatus";

export type ICardEvent = {
  titleEvent: string;
  location: string;
  dateEvent: any;
  imageEvent: any;
  children?: React.ReactNode;
  colorStatus: any;
  status: string;
  registrations: any;
  linkDoEvento: string;
};

export const CardEvent: React.FC<ICardEvent> = ({ 
  children, 
  imageEvent, 
  titleEvent, 
  location, 
  dateEvent,
  colorStatus, 
  status, 
  registrations,
  linkDoEvento,
  ...props }) => {
  return (
    <>
      <div className="wrapper">
        <a href={linkDoEvento}>
        <div className="Card">
          <div className="Card__image-event">
            <img src={imageEvent} alt="" />
          </div>
          {/* <div className="Card__status">
          <BoxStatus text={status} className={colorStatus} />
          </div> */}
          <div className="Card__info">   
            <strong>{titleEvent}</strong>         
            <p> {location}</p>
            <p>Data do evento: {dateEvent}</p>
            <p>Inscrições até: {registrations}</p>
          </div>
        </div>
        </a>
        
      </div>
    </>
  );
};
