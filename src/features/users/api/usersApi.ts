import * as axios from "axios";

const instance = axios.default.create({
  baseURL: process.env.API_URL,
});

export const getUsers = async () =>  {
    const { data } = await instance.get("/api/users", { params: { server: 'eu' } });
    return data;
  }