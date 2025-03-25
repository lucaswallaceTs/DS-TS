import { H6Title } from "../H6Title/H6Title";
import React from "react";
import "./styles.scss";

export type ICardMobile = {
    image: string;
    titleEvent: string;
    location: string;
    dateEvent: any;
    linkDoEvento: string;
}

export const CardMobile: React.FC<ICardMobile> = ({
    image, 
    titleEvent, 
    location, 
    dateEvent,
    linkDoEvento,
    ...props
}) => {
    return(
        <a href={linkDoEvento}>
            <div className="cardMobile">
                <div className="cardMobile__image">
                    <img src={image} alt="" />
                </div>
                <div className="cardMobile__info">
                    <H6Title text={titleEvent} />
                    <p>{location}</p>
                    <p>Data do evento: {dateEvent}</p>
                </div>
            </div>
        </a>
    );
};