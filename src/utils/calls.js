import dayjs from "dayjs";
import { api } from "./api";

export const getCalls = async (is_archived) => {
  const result = await api.getActivities();
  //const result = mock;
  const obj = [];
  result
    .filter((call) => call.is_archived === is_archived)
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
  return obj;
};

export const archiveCalls = async (calls) => {
  await Promise.all(
    calls.map(async ({ calls }) => {
      return await Promise.all(
        calls.map(async ({ id }) => {
          const call = await api.archiveActivity(id, true);
          return call;
        })
      );
    })
  );
  const newCalls = await getCalls(false);
  return newCalls;
};

export const retrieveCalls = async () => {
  await api.retrieveAllActivities();
  const calls = await getCalls(false);
  return calls;
};
