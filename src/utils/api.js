import axios from "axios";

export const mock = [
  {
    direction: "inbound",
    from: 1,
    to: 2,
    via: 1,
    duration: 0,
    is_archived: false,
    call_type: "answered",
    id: "6685a0df24a7a79ae0c50f8f",
    created_at: "2024-07-03T19:05:03.506Z",
  },
  {
    direction: "outbound",
    from: 2,
    to: 1,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "answered",
    id: "6685b79524326ad725d8041",
    created_at: "2024-07-03T20:41:57.436Z",
  },
  {
    direction: "inbound",
    from: 1,
    to: 2,
    via: 1,
    duration: 0,
    is_archived: false,
    call_type: "answered",
    id: "6685a0df24a7a79aec50f8f",
    created_at: "2024-07-04T19:05:03.506Z",
  },
  {
    direction: "outbound",
    from: 2,
    to: 1,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "answered",
    id: "6685b7954326ad725d48041",
    created_at: "2024-07-04T20:41:57.436Z",
  },
  {
    direction: "inbound",
    from: 1,
    to: 2,
    via: 1,
    duration: 0,
    is_archived: false,
    call_type: "answered",
    id: "6685a0df24a7a79ae0c50f8",
    created_at: "2024-07-05T19:05:03.506Z",
  },
  {
    direction: "outbound",
    from: 2,
    to: 1,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "answered",
    id: "665b79524326ad725d48041",
    created_at: "2024-07-05T20:41:57.436Z",
  },
  {
    direction: "inbound",
    from: 1,
    to: 2,
    via: 1,
    duration: 0,
    is_archived: false,
    call_type: "answered",
    id: "6685a0df24a7a79ae0c508f",
    created_at: "2024-07-05T19:05:03.506Z",
  },
  {
    direction: "outbound",
    from: 2,
    to: 1,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "answered",
    id: "6685b9524326ad725d48041",
    created_at: "2024-07-06T20:41:57.436Z",
  },
  {
    direction: "inbound",
    from: 1,
    to: 2,
    via: 1,
    duration: 0,
    is_archived: false,
    call_type: "answered",
    id: "685a0df24a7a79ae0c50f8f",
    created_at: "2024-07-07T19:05:03.506Z",
  },
  {
    direction: "outbound",
    from: 2,
    to: 1,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "answered",
    id: "6685b79524326ad725d8041",
    created_at: "2024-07-07T20:41:57.436Z",
  },
  {
    direction: "inbound",
    from: 1,
    to: 2,
    via: 1,
    duration: 0,
    is_archived: false,
    call_type: "answered",
    id: "6685a0df24aa79ae0c50f8f",
    created_at: "2024-07-08T19:05:03.506Z",
  },
  {
    direction: "outbound",
    from: 2,
    to: 1,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "answered",
    id: "6685b79524326ad72548041",
    created_at: "2024-07-08T20:41:57.436Z",
  },
  {
    direction: "inbound",
    from: 1,
    to: 2,
    via: 1,
    duration: 0,
    is_archived: false,
    call_type: "answered",
    id: "6685a0df24a7a79ae0c0f8f",
    created_at: "2024-07-08T19:05:03.506Z",
  },
  {
    direction: "outbound",
    from: 2,
    to: 1,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "voicemail",
    id: "6685b7952436ad725d48041",
    created_at: "2024-07-08T20:41:57.436Z",
  },
  {
    direction: "inbound",
    from: 1,
    to: 2,
    via: 1,
    duration: 0,
    is_archived: false,
    call_type: "missed",
    id: "6685a0df24a7a79ae0c5f8f",
    created_at: "2024-07-09T19:05:03.506Z",
  },
  {
    direction: "outbound",
    from: 2,
    to: 1,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "answered",
    id: "6685b79524326d725d48041",
    created_at: "2024-07-09T20:41:57.436Z",
  },
  {
    direction: "inbound",
    from: 1,
    to: 2,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "missed",
    id: "66850df24a7a79ae0c50f8f",
    created_at: "2024-07-09T19:05:03.506Z",
  },
  {
    direction: "outbound",
    from: 2,
    to: 1,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "voicemail",
    id: "665b79524326ad725d48041",
    created_at: "2024-07-10T20:41:57.436Z",
  },
  {
    direction: "inbound",
    from: 1,
    to: 2,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "voicemail",
    id: "6685a0df24a7a79ae0c50ff",
    created_at: "2024-07-10T19:05:03.506Z",
  },
  {
    direction: "outbound",
    from: 2,
    to: 1,
    via: 1,
    duration: 0,
    is_archived: true,
    call_type: "missed",
    id: "685b79524326ad725d48041",
    created_at: "2024-07-10T20:41:57.436Z",
  },
];

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

const archiveActivity = async (id) => {
  try {
    const { data } = await server.patch(`/activities/${id}`, {
      is_archived: true,
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
