import { createPortal } from "react-dom";
import {
  CrossIcon,
  ModalBackdrop,
  ModalCloseBtn,
  ModalConteiner,
} from "./ModalUniversal.styled";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

const ModalUniversal = ({ toggleModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const onOverlayClick = (e) => {
    toggleModal();
    if (e.target === e.currentTarget) {
    }
  };

  const onKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };
  return createPortal(
    <ModalBackdrop onClick={onOverlayClick}>
      <ModalConteiner>
        <ModalCloseBtn onClick={toggleModal}>
          <CrossIcon />
        </ModalCloseBtn>
        {children}
      </ModalConteiner>
    </ModalBackdrop>,
    modalRoot
  );
};

export default ModalUniversal;
