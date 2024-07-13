import Modal, { modal } from "./modal";

const ArchiveModal = ({ handleArchiveCalls, setShowModal }) => {
  return (
    <Modal>
      <Modal.Content>
        <p className='main__text'>Do you want to archive all calls?</p>
        <div className='main__btn--container'>
          <Modal.Button
            onClick={() => setShowModal(modal.none)}
            className='cancel'
          >
            No
          </Modal.Button>
          <Modal.Button onClick={handleArchiveCalls} className='confirm'>
            Yes
          </Modal.Button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default ArchiveModal;
