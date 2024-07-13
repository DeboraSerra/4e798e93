import React, { useContext } from "react";
import { context } from "../../utils/context.jsx";
import CallCard from "./CallCard.jsx";

const AllCalls = ({ title }) => {
  const { calls, isLoading } = useContext(context);
  if (isLoading) return <p>Loading</p>

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
                  <CallCard key={call.id} call={call} />
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
