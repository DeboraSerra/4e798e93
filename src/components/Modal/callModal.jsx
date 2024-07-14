import { useContext } from "react";
import { context, MODAL } from "../../utils/context.jsx";
import { maskPhone } from "../../utils/maskPhone.js";
import Modal from "./modal.jsx";

const CallModal = () => {
  const { showModal, phone, setState, handleOnCall } = useContext(context);

  return (
    <Modal variant='secondary'>
      <Modal.Content className={showModal === MODAL.call ? "show" : ""}>
        <Modal.Field
          value={phone}
          setValue={(value) => setState((prev) => ({ ...prev, phone: value }))}
        />
        <Modal.NumberBoard
          onClick={(value) =>
            setState((prev) => ({
              ...prev,
              phone: maskPhone(prev.phone + value),
            }))
          }
          onCallClick={handleOnCall}
          onClear={() =>
            setState((prev) => ({ ...prev, phone: prev.phone.slice(0, -1) }))
          }
        />
      </Modal.Content>
    </Modal>
  );
};

export default CallModal;
