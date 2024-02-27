import { createSlice } from "@reduxjs/toolkit";

type AppSlice = {
  selectedBoardId: string | null;
};

const initialState: AppSlice = {
  selectedBoardId: null,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedBoardId: (state, action) => {
      state.selectedBoardId = action.payload;
    },
  },
});

export const { setSelectedBoardId } = appSlice.actions;

export default appSlice.reducer;
