import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const defaultData: DefaultDataType = {
  host: "https://api.openweathermap.org/",
  token: "c95bd997f720de95dfc717a5eb46fa33",
};

const config: AxiosRequestConfig = {
  baseURL: defaultData.host,
};

export const instance: AxiosInstance = axios.create(config);

type DefaultDataType = {
  host: string;
  token: string;
};
