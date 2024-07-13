import Modal, { modal } from "./modal";

const RetrieveModal = ({ setShowModal, handleRetrieveCalls }) => {
  return (
    <Modal>
      <Modal.Content>
        <p className='main__text'>Do you want to retrieve all calls?</p>
        <div className='main__btn--container'>
          <Modal.Button
            onClick={() => setShowModal(modal.none)}
            className='cancel'
          >
            No
          </Modal.Button>
          <Modal.Button onClick={handleRetrieveCalls} className='confirm'>
            Yes
          </Modal.Button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default RetrieveModal;
