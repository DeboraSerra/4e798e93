import dayjs from "dayjs";
import { useContext } from "react";
import { ACTIVE_TYPE, context, MODAL } from "../../utils/context.jsx";
import Loading from "../loading.jsx";
import Modal from "./modal.jsx";

const ArchiveOneModal = () => {
  const { active, call, handleArchiveOneCall, setState, isLoading } =
    useContext(context);

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
        <p className='main__text'>
          Do you want to {active === ACTIVE_TYPE.all ? "archive" : "retrieve"}{" "}
          this call?
        </p>
        <div className='main__desc'>
          <p className='main__desc--text'>
            <strong>Call from:</strong> {call.from}
          </p>
          <p className='main__desc--text'>
            <strong>to:</strong> {call.to}
          </p>
          <p className='main__desc--text'>
            <strong>
              {call.direction === "outbound" ? "Made" : "Received"} at:{" "}
            </strong>
            {dayjs(call.created_at).format("MMMM[, ]DD YYYY[ at ]HH[:]MM")}
          </p>
          <p className='main__desc--text'>
            <strong>Duration:</strong> {call.duration}
          </p>
        </div>
        <div className='main__btn--container'>
          <Modal.Button
            onClick={() =>
              setState((prev) => ({ ...prev, showModal: MODAL.none }))
            }
            className='cancel'
          >
            No
          </Modal.Button>
          <Modal.Button onClick={handleArchiveOneCall} className='confirm'>
            Yes
          </Modal.Button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default ArchiveOneModal;
