import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import { archiveCalls, getCalls, retrieveCalls } from "../utils/calls.js";
import AllCalls from "./AllCalls/index.jsx";
import { activeType } from "./Header/index.jsx";
import ArchiveModal from "./Modal/archiveModal.jsx";
import ArchiveOneModal from "./Modal/archiveOneModal.jsx";
import CallFailModal from "./Modal/callFailModal.jsx";
import CallModal from "./Modal/callModal.jsx";
import { modal } from "./Modal/modal.jsx";
import RetrieveModal from "./Modal/retrieveModal.jsx";

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
    await api.archiveActivity(moreInfo, active === activeType.all);
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
        active={active}
      />
      {showModal === modal.archive ? (
        <ArchiveModal
          handleArchiveCalls={handleArchiveCalls}
          setShowModal={setShowModal}
        />
      ) : null}

      {showModal === modal.retrieve ? (
        <RetrieveModal
          handleRetrieveCalls={handleRetrieveCalls}
          setShowModal={setShowModal}
        />
      ) : null}

      {showModal === modal.call ? (
        <CallModal
          handleOnCall={handleOnCall}
          phone={phone}
          setPhone={setPhone}
          showModal={showModal}
        />
      ) : null}

      {showModal === modal.callFail ? (
        <CallFailModal setShowModal={setShowModal} />
      ) : null}

      {showModal === modal.archiveOne ? (
        <ArchiveOneModal
          active={active}
          call={call}
          handleArchiveOneCall={handleArchiveOneCall}
          setShowModal={setShowModal}
        />
      ) : null}
    </div>
  );
};

export default Main;

Main.propTypes = {
  active: PropTypes.oneOf(Object.values(activeType)),
  showModal: PropTypes.oneOf(Object.values(modal)),
  setActive: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
