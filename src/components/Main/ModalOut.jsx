import React from "react";
import "./modal.css";

function ModalOut(props) {
  const showHideModal = props.showHideModal;
  const handleClose = props.handleClose;
  return (
    <div className={showHideModal}>
      <div className="gry-bg" onClick={handleClose} />
      <div className="modal">{props.children}</div>
    </div>
  );
}

export default ModalOut;
