import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoordType } from "../../types";
import { weatherAPI } from "../../api/weatherAPI";

const initialState: any = {
  loading: false,
  error: null,
  items: [],
  currentItem: null,
};

export const getWeather = createAsyncThunk<
  any,
  GetWeatherType,
  { rejectValue: any }
>(
  "weather/getWeather",
  async ({ coord, id }: GetWeatherType, { rejectWithValue }) => {
    try {
      const res = await weatherAPI.getWeather(coord.lat, coord.lon);
      return { data: res, id: id };
    } catch (error) {
      return rejectWithValue("Failed to load weather data");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    deleteItem: (state, action: PayloadAction<number>) => {
      state = state.items.filter((item: any) => item.id !== action.payload);
    },

    setCurrentItem: (state, action: PayloadAction<number>) => {
      const itemToSet = state.items.find(
        (item: any) => item.id === action.payload
      );
      console.log(itemToSet);
      state.currentItem = itemToSet;
    },
    eraseCurrentItem: (state) => {
      state.currentItem = null;
    },
  },
  extraReducers: (builder) => {
    // pending
    builder.addCase(getWeather.pending, (state) => {
      state.error = null;
      state.loading = true;
    });

    // fulfilled
    builder.addCase(getWeather.fulfilled, (state, action) => {
      // state.items
      state.loading = false;
      let index: number = state.items.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (index === -1) {
        state.items.push(action.payload);
      } else {
        state.items[index] = action.payload;
      }
    });

    // rejected
    builder.addCase(getWeather.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { deleteItem, setCurrentItem, eraseCurrentItem } =
  weatherSlice.actions;

export default weatherSlice.reducer;

type GetWeatherType = {
  coord: CoordType;
  id: number;
};
