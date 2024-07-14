import { useContext } from "react";
import { context, MODAL } from "../../utils/context.jsx";
import Loading from "../loading.jsx";
import Modal from "./modal.jsx";

const ArchiveModal = () => {
  const { handleArchiveCalls, setState, isLoading } = useContext(context);

  if (isLoading) {
    return (
      <Modal>
        <Modal.Content>
          <Loading />
        </Modal.Content>
      </Modal>
    );
  }

  return (
    <Modal>
      <Modal.Content>
        <p className='main__text'>Do you want to archive all calls?</p>
        <div className='main__btn--container'>
          <Modal.Button
            onClick={() =>
              setState((prev) => ({ ...prev, showModal: MODAL.none }))
            }
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
