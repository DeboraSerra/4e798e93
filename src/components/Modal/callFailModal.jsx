import Modal, { modal } from "./modal";

const CallFailModal = ({ setShowModal }) => {
  return (
    <Modal>
      <Modal.Content>
        <p className='main__text'>Sorry...</p>
        <p className='main__text'>This function isn&apos;t available yet :(</p>
        <div className='main__btn--container'>
          <Modal.Button onClick={() => setShowModal(modal.none)}>
            Ok
          </Modal.Button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default CallFailModal;
