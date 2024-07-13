import React, { useEffect, useState } from "react";
import { modal } from "../App.jsx";
import { getCalls } from "../utils/calls.js";
import ArchivedCalls from "./AllCalls/ArchivedCalls.jsx";
import AllCalls from "./AllCalls/index.jsx";
import { activeType } from "./Header/index.jsx";
import Modal from "./modal.jsx";

const Main = ({ active, showModal, setShowModal }) => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    getCalls(active === activeType.all ? false : true).then(setCalls);
  }, [active]);

  return (
    <div className='container-view'>
      {active === activeType.archive ? <ArchivedCalls calls={calls} /> : null}
      {active === activeType.all ? <AllCalls calls={calls} /> : null}
      {showModal === modal.archive ? (
        <Modal>
          <Modal.Content>
            <p>Do you want to archive all calls?</p>
            <Modal.Button onClick={() => setShowModal(modal.none)}>
              No
            </Modal.Button>
            <Modal.Button
              onClick={() => {
                setShowModal(modal.none);
              }}
            >
              Yes
            </Modal.Button>
          </Modal.Content>
        </Modal>
      ) : null}
    </div>
  );
};

export default Main;
