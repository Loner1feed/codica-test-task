import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favoriteSlice";
import searchSlice from "./slices/searchSlice";
import weatherSlice from "./slices/weatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    search: searchSlice,
    favorite: favoriteSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
