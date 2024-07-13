import React from "react";
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
