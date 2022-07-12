import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchAPI } from "../../api/searchAPI";

type SearchItem = any;

type SearchStateType = {
  items: SearchItem[];
  loading: boolean;
  error: string | null;
};

const initialState: SearchStateType = {
  items: [],
  loading: false,
  error: null,
};

export const getResults = createAsyncThunk<
  any[],
  GetResultsType,
  { rejectValue: string }
>(
  "search/getResults",
  async ({ phrase, limit }: GetResultsType, { rejectWithValue }) => {
    try {
      const res = await searchAPI.getItems(phrase, limit);
      return res;
    } catch (error: any) {
      return rejectWithValue("An error occured");
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    emptier: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    // get results pending
    builder.addCase(getResults.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // get results fulfilled
    builder.addCase(getResults.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    });

    //get results rejected
    // builder.addCase(getResults.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export const { emptier } = searchSlice.actions;

export default searchSlice.reducer;

type GetResultsType = {
  phrase: string;
  limit: number;
};
