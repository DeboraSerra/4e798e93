import Modal, { modal } from "./modal";

const CallModal = ({ showModal, phone, setPhone, handleOnCall }) => {
  return (
    <Modal variant='secondary'>
      <Modal.Content className={showModal === modal.call ? "show" : ""}>
        <Modal.Field value={phone} setValue={setPhone} />
        <Modal.NumberBoard
          onClick={(value) => setPhone((prev) => maskPhone(prev + value))}
          onCallClick={handleOnCall}
          onClear={() => setPhone((prev) => prev.slice(0, -1))}
        />
      </Modal.Content>
    </Modal>
  );
};

export default CallModal;
