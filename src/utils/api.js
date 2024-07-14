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
  try {
    const { data } = await server.get(`/activities/${id}`);
    return data;
  } catch (e) {
    console.log(e);
    return {};
  }
};

const archiveActivity = async (id, is_archived) => {
  try {
    const { data } = await server.patch(`/activities/${id}`, {
      is_archived,
    });
    return data;
  } catch (e) {
    console.log(e);
    return "Something went wrong";
  }
};

const retrieveAllActivities = async () => {
  try {
    await server.patch(`/reset`);
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
