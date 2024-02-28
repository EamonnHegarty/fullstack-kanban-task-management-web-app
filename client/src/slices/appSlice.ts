import { createSlice } from "@reduxjs/toolkit";

type AppSlice = {
  selectedBoardId: string | null;
  selectedBoardName: string;
};

const initialState: AppSlice = {
  selectedBoardId: null,
  selectedBoardName: "",
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedBoardId: (state, action) => {
      state.selectedBoardId = action.payload;
    },
    setSelectedBoardName: (state, action) => {
      state.selectedBoardName = action.payload;
    },
  },
});

export const { setSelectedBoardId, setSelectedBoardName } = appSlice.actions;

export default appSlice.reducer;
