import axios from "axios";

const server = axios.create({
  baseURL: "https://aircall-backend.onrender.com",
});

const getActivities = async () => {
  try {
    const { data } = await server.get("/activities");
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const getActivityById = async (id) => {
  const { data } = await server.get(`/activities/${id}`);
  return data;
};

const archiveActivity = async (id, is_archived) => {
  try {
    const { data } = await server.patch(`/activities/${id}`, {
      is_archived,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const retrieveAllActivities = async () => {
  try {
    const { data } = await server.patch(`/reset`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const api = {
  getActivities,
  getActivityById,
  archiveActivity,
  retrieveAllActivities,
};
