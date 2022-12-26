const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";

const defaultState = { showHideModal: "hideModal" };

export const showModal = () => ({
  type: "SHOW_MODAL",
});
export const hideModal = () => ({
  type: "HIDE_MODAL",
});

export const ModalList = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showHideModal: "showModal" };
    case HIDE_MODAL:
      return { ...state, showHideModal: "hideModal" };
    default:
      return state;
  }
};
export default ModalList;
