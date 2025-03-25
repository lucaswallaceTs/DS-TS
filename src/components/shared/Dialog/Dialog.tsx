import React, { ComponentProps, useEffect, useRef } from "react";
import "./styles.scss";

interface IDialog {
  children: React.ReactNode;
  open: Boolean;
}

export const Dialog = ({
  open,
  children,
}: IDialog & ComponentProps<"dialog">) => {
  return (
    <div
      style={{
        backgroundImage: `url("/modal-background.png")`,
        backgroundAttachment: "fixed",
        position: "fixed",
        width: "100vw",
        zIndex: "1000",
        top: "0px",
        left: "0px",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="dialogStyle">
        <dialog open={open}>
          <div className="dialog-content">{children}</div>
        </dialog>
      </div>
    </div>
  );
};
