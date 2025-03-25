import React from "react";
import "./styles.scss";
import Image from "next/legacy/image";

export type IAvatar = {
  linkImage: string;
  width: '56' | '48' | '40' | '32' | number;
  height: '56' | '48' | '40' | '32' | number;
  alt: string;
};

export const Avatar: React.FC<IAvatar> = ({ linkImage, width, height, alt }) => {
  return (
    <>
      <div className="icon-avatar">
        <Image 
        src={linkImage} 
        alt={alt} 
        width={width}
        height={height}
        />
      </div>
    </>
  );
};
