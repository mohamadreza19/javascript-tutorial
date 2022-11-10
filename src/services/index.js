import axios from "axios";
const address = "http://localhost:3030";

export const findContect = async () => {
  const url = `${address}/content`;
  return axios(url);
};
export const registeAuthor = async (feilds) => {
  const url = `${address}/register`;
  return axios.post(url, feilds);
};
export const LoginAuthor = async (feilds) => {
  const url = `${address}/login`;
  return axios.post(url, feilds);
};
export const CreateContent = async (feilds) => {
  const url = `${address}/content/create-content`;

  return axios.post(url, feilds);
};
