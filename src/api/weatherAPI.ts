import { instance } from "./instance";

export const weatherAPI = {
  getWeather: async (lat: number, lon: number) => {
    const res = await instance.get(
      `data/2.5/weather?lat=${lat}&lon=${lon}&appid=c95bd997f720de95dfc717a5eb46fa33&units=metric`
    );
    return res.data;
  },
};
