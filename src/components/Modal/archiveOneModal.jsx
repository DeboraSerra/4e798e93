import dayjs from "dayjs";
import { activeType } from "../Header";
import Modal, { modal } from "./modal";

const ArchiveOneModal = ({
  active,
  call,
  handleArchiveOneCall,
  setShowModal,
}) => {
  return (
    <Modal>
      <Modal.Content>
        <p className='main__text'>
          Do you want to {active === activeType.all ? "archive" : "retrieve"}{" "}
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
            onClick={() => setShowModal(modal.none)}
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
