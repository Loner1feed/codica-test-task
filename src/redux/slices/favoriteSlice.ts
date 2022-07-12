// import { ActionTypes } from "@mui/base";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavItemType } from "../../types";

const initialState: FavItemType[] = [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavItemType>) => {
      state.push(action.payload);
    },

    overrideFavorite: (state, action) => {
      state = action.payload;
      return state;
    },

    deleteFavorite: (state, action: PayloadAction<number>) => {
      state = state.filter((item) => item.id !== action.payload);
      return state;
    },
  },
});

export default favoriteSlice.reducer;
export const { addFavorite, deleteFavorite, overrideFavorite } =
  favoriteSlice.actions;
