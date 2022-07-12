import { instance } from "./instance";

export const searchAPI = {
  getItems: async (cityName: string, limit: number) => {
    const res = await instance.get(
      `geo/1.0/direct?q=${cityName}&limit=${limit}&appid=c95bd997f720de95dfc717a5eb46fa33`
    );
    return res.data;
  },
};
