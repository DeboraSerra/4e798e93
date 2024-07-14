import { useContext } from "react";
import { context, MODAL } from "../../utils/context.jsx";
import Modal from "./modal.jsx";

const CallFailModal = () => {
  const { setState } = useContext(context);
  return (
    <Modal>
      <Modal.Content>
        <p className='main__text'>Sorry...</p>
        <p className='main__text'>This function isn&apos;t available yet :(</p>
        <div className='main__btn--container'>
          <Modal.Button
            onClick={() =>
              setState((prev) => ({ ...prev, showModal: MODAL.none }))
            }
          >
            Ok
          </Modal.Button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default CallFailModal;
