import React from "react";
import ModalOut from "./ModalOut";
import { connect } from "react-redux";
import Input from "./Input";
import { showModal, hideModal } from "../../redux/modules/ModalList";

function Modal(props) {
  return (
    <div>
      <button onClick={() => props.handleOpen()}>Open</button>
      <ModalOut
        showHideModal={props.data.ModalList.showHideModal}
        handleClose={() => props.handleClose()}
      >
        <Input />
        <div className="Exit" onClick={props.handleClose}>
          X
        </div>
      </ModalOut>
    </div>
  );
}
const mapStateToProps = (state) => ({ data: state });

const mapDispatchToProps = (dispatch) => ({
  handleOpen: () => {
    dispatch(showModal());
  },
  handleClose: () => {
    dispatch(hideModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
