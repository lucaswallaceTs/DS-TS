import React, { ComponentProps } from "react";
import "./styles.scss";

interface IButton {
  title: string;
  variation:  'tag'|'primary' | 'dark' | 'ghost' | 'disabled';
  size:'tag' | 'small' | 'medium' |'large' | 'extralarge';
}

export const Button = ({title, variation, size, ...props}:IButton & ComponentProps<"button"> )  => {
  return (
    <button className={`${variation} ${size}`} {...props}>
      {title}
    </button>
  );
};
