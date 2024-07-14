import React, { useContext } from "react";
import { ACTIVE_TYPE, context, MODAL } from "../utils/context.jsx";
import AllCalls from "./AllCalls/index.jsx";
import ArchiveModal from "./Modal/archiveModal.jsx";
import ArchiveOneModal from "./Modal/archiveOneModal.jsx";
import CallFailModal from "./Modal/callFailModal.jsx";
import CallModal from "./Modal/callModal.jsx";
import RetrieveModal from "./Modal/retrieveModal.jsx";

const Main = () => {
  const { active, showModal } = useContext(context);

  return (
    <div className='main__container'>
      <AllCalls
        title={active === ACTIVE_TYPE.archive ? "Archived Calls" : "All Calls"}
      />
      {showModal === MODAL.archive ? <ArchiveModal /> : null}

      {showModal === MODAL.retrieve ? <RetrieveModal /> : null}

      {showModal === MODAL.call ? <CallModal /> : null}

      {showModal === MODAL.callFail ? <CallFailModal /> : null}

      {showModal === MODAL.archiveOne ? <ArchiveOneModal /> : null}
    </div>
  );
};

export default Main;
