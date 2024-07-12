import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { api } from "../../utils/api.js";
import CallCard from "./CallCard.jsx";

const ArchivedCalls = () => {
  const [calls, setCalls] = useState([]);
  const [moreInfo, setMoreInfo] = useState("");

  const getCalls = async () => {
    const result = await api.getActivities();
    const obj = [];
    result
      .filter((call) => call.is_archived)
      .forEach((call) => {
        if (!obj.some((o) => dayjs(o.date).isSame(call.created_at, "day"))) {
          const date = dayjs(call.created_at).format("MMMM[, ]DD YYYY");
          const newCall = {
            date,
            calls: [call],
          };
          obj.push(newCall);
        } else {
          const index = obj.findIndex((o) =>
            dayjs(o.date).isSame(call.created_at, "day")
          );
          obj[index].calls.push(call);
        }
      });
    setCalls(obj);
  };

  useEffect(() => {
    getCalls();
  }, []);

  return (
    <div>
      <h1>Archived Calls</h1>
      <div>
        {calls.map((dates) => (
          <div key={dates.date}>
            <div>
              <h2>{dates.date}</h2>
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

export default ArchivedCalls;
