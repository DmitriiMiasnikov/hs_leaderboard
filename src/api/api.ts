import * as axios from "axios";
import * as dotenv from "dotenv";
import { THistoryData } from "./types";

dotenv.config();

const instance = axios.default.create({
  baseURL: process.env.API_URL,
});

export const getUsers = async () => {
  const { data } = await instance.get("/api/users", {
    params: { server: "eu" },
  });
  return data;
};

export const getHistory = async ({ ids }: { ids: number[] }) => {
  const { data } = await instance.get<THistoryData[]>("/api/users/history", {
    params: { ids: ids.join(","), type: 'hour' },
  });
  return data;
};
