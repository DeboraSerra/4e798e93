import React from "react";
import PropTypes from "prop-types";
import CallCard from "./CallCard.jsx";

const AllCalls = ({ calls, moreInfo, setMoreInfo, title, setShowModal, setPhone }) => {
  return (
    <div className='main'>
      <h1 className='main__title'>{title}</h1>
      <div className='main__calls'>
        {calls.length > 0 ? (
          calls.map((dates) => (
            <div key={dates.date} className='main__dates'>
              <h2 className='main__subtitle'>{dates.date}</h2>
              <div className='main__calls--container'>
                {dates.calls.map((call) => (
                  <CallCard
                    key={call.id}
                    call={call}
                    moreInfo={moreInfo}
                    setMoreInfo={setMoreInfo}
                    setShowModal={setShowModal}
                    setPhone={setPhone}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className='main__text'>
            You don&apos;t have any calls on your inbox.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllCalls;

AllCalls.propTypes = {
  calls: PropTypes.arrayOf(PropTypes.exact({
    date: PropTypes.string,
    calls: PropTypes.arrayOf(PropTypes.exact({
      direction: PropTypes.oneOf(["inbound", "outbound"]),
      from: PropTypes.number,
      to: PropTypes.number,
      via: PropTypes.number,
      duration: PropTypes.number,
      is_archived: PropTypes.bool,
      call_type: PropTypes.oneOf(["missed", "answered", "voicemail"]),
      id: PropTypes.string,
      created_at: PropTypes.string,
    }))
  })).isRequired,
  moreInfo: PropTypes.string.isRequired,
  setMoreInfo: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
};
