import { useContext } from "react";
import { context, modal } from "../../utils/context.jsx";
import Loading from "../loading.jsx";
import Modal from "./modal.jsx";

const RetrieveModal = () => {
  const { handleRetrieveCalls, setState, isLoading } = useContext(context);

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
        <p className='main__text'>Do you want to retrieve all calls?</p>
        <div className='main__btn--container'>
          <Modal.Button
            onClick={() =>
              setState((prev) => ({ ...prev, showModal: modal.none }))
            }
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
