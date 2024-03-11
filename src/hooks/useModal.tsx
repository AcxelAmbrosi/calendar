import { useState } from "react";

export const useModal = () => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };
  return {
    modal,
    modalHandler,
  };
};
