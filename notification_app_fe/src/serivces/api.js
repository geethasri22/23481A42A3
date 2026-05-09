import axios from "axios";

const API = "http://4.224.186.213/evaluation-service/notifications";

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    let url = `${API}?page=${page}&limit=${limit}`;

    if (type) {
      url += `&notification_type=${type}`;
    }

    const response = await axios.get(url);

    return response.data.notifications;
  } catch (error) {
    console.log(error);
    return [];
  }
};