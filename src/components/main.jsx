import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { modal } from "../App.jsx";
import { api } from "../utils/api.js";
import { archiveCalls, getCalls, retrieveCalls } from "../utils/calls.js";
import { maskPhone } from "../utils/maskPhone.js";
import AllCalls from "./AllCalls/index.jsx";
import { activeType } from "./Header/index.jsx";
import Modal from "./modal.jsx";

const Main = ({ active, showModal, setShowModal, setActive }) => {
  const [calls, setCalls] = useState([]);
  const [phone, setPhone] = useState("");
  const [call, setCall] = useState({});
  const [moreInfo, setMoreInfo] = useState("");

  useEffect(() => {
    getCalls(active === activeType.all ? false : true).then(setCalls);
  }, [active]);

  useEffect(() => {
    if (!moreInfo) setCall({});
    else {
      api.getActivityById(moreInfo).then(setCall);
    }
  }, [moreInfo]);

  const handleArchiveCalls = async () => {
    setActive(activeType.all);
    setShowModal(modal.none);
    const newCalls = await archiveCalls(calls);
    setCalls(newCalls);
  };

  const handleArchiveOneCall = async () => {
    setActive(activeType.all);
    setShowModal(modal.none);
    setMoreInfo("");
    await api.archiveActivity(moreInfo);
    const newCalls = await getCalls(false);
    setCalls(newCalls);
  };

  const handleRetrieveCalls = async () => {
    setActive(activeType.all);
    setShowModal(modal.none);
    const newCalls = await retrieveCalls(calls);
    setCalls(newCalls);
  };

  const handleOnCall = () => {
    if (!phone.trim()) return;
    setShowModal(modal.callFail);
    setPhone("");
  };

  return (
    <div className='main__container'>
      <AllCalls
        calls={calls}
        moreInfo={moreInfo}
        setMoreInfo={setMoreInfo}
        title={active === activeType.archive ? "Archived Calls" : "All Calls"}
        setShowModal={setShowModal}
        setPhone={setPhone}
      />
      {showModal === modal.archive ? (
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
      ) : null}

      {showModal === modal.retrieve ? (
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
      ) : null}

      {showModal === modal.call ? (
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
      ) : null}

      {showModal === modal.callFail ? (
        <Modal>
          <Modal.Content>
            <p className='main__text'>Sorry...</p>
            <p className='main__text'>
              This function isn&apos;t available yet :(
            </p>
            <div className='main__btn--container'>
              <Modal.Button onClick={() => setShowModal(modal.none)}>
                Ok
              </Modal.Button>
            </div>
          </Modal.Content>
        </Modal>
      ) : null}

      {showModal === modal.archiveOne ? (
        <Modal>
          <Modal.Content>
            <p className='main__text'>Do you want to archive this call?</p>
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
      ) : null}
    </div>
  );
};

export default Main;
