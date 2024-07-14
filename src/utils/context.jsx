import { createContext, useEffect, useMemo, useState } from "react";
import { api } from "./api";
import { archiveCalls, getCalls, retrieveCalls } from "./calls";

export const activeType = {
  all: 0,
  archive: 1,
};

export const modal = {
  none: 0,
  archive: 1,
  retrieve: 2,
  call: 3,
  callFail: 4,
  archiveOne: 5,
};

const defaultState = {
  calls: [],
  phone: "",
  call: {},
  moreInfo: "",
  active: activeType.all,
  showModal: modal.none,
  isLoading: true,
};

export const context = createContext({
  ...defaultState,
  handleArchiveCalls: () => {},
  handleArchiveOneCall: () => {},
  handleOnCall: () => {},
  handleRetrieveCalls: () => {},
  setState: ({}) => {},
});

const Provider = ({ children }) => {
  const [state, setState] = useState(defaultState);
  const { active, calls, moreInfo, phone } = state;

  useEffect(() => {
    getCalls(active === activeType.all ? false : true).then((result) =>
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
      active: activeType.all,
      showModal: modal.none,
      isLoading: false,
    }));
  };

  const handleArchiveOneCall = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    await api.archiveActivity(moreInfo, active === activeType.all);
    const newCalls = await getCalls(false);
    setState((prev) => ({
      ...prev,
      calls: newCalls,
      moreInfo: "",
      active: activeType.all,
      showModal: modal.none,
      isLoading: false,
    }));
  };

  const handleRetrieveCalls = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const newCalls = await retrieveCalls(calls);
    setState((prev) => ({
      ...prev,
      calls: newCalls,
      active: activeType.all,
      showModal: modal.none,
      isLoading: false,
    }));
  };

  const handleOnCall = () => {
    if (!phone.trim()) return;
    setState((prev) => ({ ...prev, phone: "", showModal: modal.callFail }));
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
