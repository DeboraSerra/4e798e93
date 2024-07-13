import React, { useState } from "react";

import CallCard from "./CallCard.jsx";

const AllCalls = ({ calls }) => {
  const [moreInfo, setMoreInfo] = useState("");

  return (
    <div className='main'>
      <h1 className='main__title'>All Calls</h1>
      <div className='main__calls'>
        {calls.map((dates) => (
          <div key={dates.date} className='main__dates'>
            <h2 className='main__subtitle'>{dates.date}</h2>
            <div className='main__calls--container'>
              {dates.calls.map((call) => (
                <CallCard
                  key={call.id}
                  call={call}
                  moreInfo={moreInfo}
                  setMoreInfo={setMoreInfo}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCalls;
