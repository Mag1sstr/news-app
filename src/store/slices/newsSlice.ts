import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INews } from "../../interfaces";

interface State {
  news: INews[];
}

const initialState: State = {
  news: [],
};

export const newsSlice = createSlice({
  name: "news",

  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;
