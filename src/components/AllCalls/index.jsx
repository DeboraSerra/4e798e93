import React, { useContext } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import colors from "../../utils/colors.js";
import { context } from "../../utils/context.jsx";
import CallCard from "./CallCard.jsx";

const AllCalls = ({ title }) => {
  const { calls, isLoading } = useContext(context);

  if (isLoading)
    return (
      <div className='loading__container'>
        <AiOutlineLoading
          color={colors.accent[800]}
          size={40}
          className='loading'
        />
      </div>
    );

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
