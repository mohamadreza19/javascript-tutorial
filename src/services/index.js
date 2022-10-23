import axios from "axios";
const address = "http://localhost:3030";

export const findContect = async () => {
  const url = `${address}/content`;
  return axios(url);
};
