import axios from "axios";
import config from "../config";

export async function login({ email, password }) {
  const body = {
    email,
    password,
  };

  const response = await axios.post(`${config.url}/provider/login`, body);
  console.log(response.data);

  return response.data;
}

export async function getProviderDetails() {
  const token = sessionStorage.getItem("token");
  const response = await axios.get(`${config.url}/provider/detail`, {
    headers: {
      token,
    },
  });

  return response.data;
}

export async function updateProviderDetails({ email, mobile, city, pincode }) {
  const token = sessionStorage.getItem("token");
  const user = {
    email,
    mobile,
    city,
    pincode,
  };
  const response = await axios.put(`${config.url}/provider/edit`, user, {
    headers: {
      token,
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

export async function getOrdersById() {
  const token = sessionStorage.getItem("token");

  const response = await axios.get(`${config.url}/provider/orders`, {
    headers: {
      token,
    },
  });

  return response.data;
}
export async function getBookingsById() {
  const token = sessionStorage.getItem("token");

  const response = await axios.get(`${config.url}/provider/bookings`, {
    headers: {
      token,
    },
  });

  return response.data;
}

export async function cancelOrderById({ id }) {
  const token = sessionStorage.getItem("token");

  const response = await axios.put(`${config.url}/provider/remove`, null, {
    params: { id },
    headers: { token },
  });

  return response.data;
}
