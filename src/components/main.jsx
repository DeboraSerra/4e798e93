import React, { useContext } from "react";
import { activeType, context, modal } from "../utils/context.jsx";
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
        title={active === activeType.archive ? "Archived Calls" : "All Calls"}
      />
      {showModal === modal.archive ? <ArchiveModal /> : null}

      {showModal === modal.retrieve ? <RetrieveModal /> : null}

      {showModal === modal.call ? <CallModal /> : null}

      {showModal === modal.callFail ? <CallFailModal /> : null}

      {showModal === modal.archiveOne ? <ArchiveOneModal /> : null}
    </div>
  );
};

export default Main;
