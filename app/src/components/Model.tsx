//final
import React from "react";
import { DeleteDialogProps } from "../type";



const Model: React.FC<DeleteDialogProps> = ({ isOpen, onClose,children }) => {
  return (
    isOpen && (
      <dialog open>
        <article>
          <header>
            <a aria-label="Close" className="close" onClick={onClose}></a>
          </header>
          {children}
        </article>
      </dialog>
    )
  );
};

export default Model;