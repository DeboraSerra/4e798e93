import { createContext, useEffect, useMemo, useState } from "react";
import { api } from "./api";
import { archiveCalls, getCalls, retrieveCalls } from "./calls";

export const ACTIVE_TYPE = {
  all: 0,
  archive: 1,
};

export const MODAL = {
  none: 0,
  archive: 1,
  retrieve: 2,
  call: 3,
  callFail: 4,
  archiveOne: 5,
};

const DEFAULT_STATE = {
  calls: [],
  phone: "",
  call: {},
  moreInfo: "",
  active: ACTIVE_TYPE.all,
  showModal: MODAL.none,
  isLoading: true,
};

export const context = createContext({
  ...DEFAULT_STATE,
  handleArchiveCalls: () => {},
  handleArchiveOneCall: () => {},
  handleOnCall: () => {},
  handleRetrieveCalls: () => {},
  setState: ({}) => {},
});

const Provider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_STATE);
  const { active, calls, moreInfo, phone } = state;

  useEffect(() => {
    getCalls(active === ACTIVE_TYPE.all ? false : true).then((result) =>
      setState((prev) => ({ ...prev, calls: result, isLoading: false }))
    );
  }, [active]);

  useEffect(() => {
    if (!moreInfo) setState((prev) => ({ ...prev, call: {} }));
    else {
      api
        .getActivityById(moreInfo)
        .then((result) => setState((prev) => ({ ...prev, call: result })));
    }
  }, [moreInfo]);

  const handleArchiveCalls = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const newCalls = await archiveCalls(calls);
    setState((prev) => ({
      ...prev,
      calls: newCalls,
      active: ACTIVE_TYPE.all,
      showModal: MODAL.none,
      isLoading: false,
    }));
  };

  const handleArchiveOneCall = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    await api.archiveActivity(moreInfo, active === ACTIVE_TYPE.all);
    const newCalls = await getCalls(false);
    setState((prev) => ({
      ...prev,
      calls: newCalls,
      moreInfo: "",
      active: ACTIVE_TYPE.all,
      showModal: MODAL.none,
      isLoading: false,
    }));
  };

  const handleRetrieveCalls = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const newCalls = await retrieveCalls(calls);
    setState((prev) => ({
      ...prev,
      calls: newCalls,
      active: ACTIVE_TYPE.all,
      showModal: MODAL.none,
      isLoading: false,
    }));
  };

  const handleOnCall = () => {
    if (!phone.trim()) return;
    setState((prev) => ({ ...prev, phone: "", showModal: MODAL.callFail }));
  };

  const value = useMemo(
    () => ({
      ...state,
      handleArchiveCalls,
      handleArchiveOneCall,
      handleOnCall,
      handleRetrieveCalls,
      setState,
    }),
    [state]
  );

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default Provider;
