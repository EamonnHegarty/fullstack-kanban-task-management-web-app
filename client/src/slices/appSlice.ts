import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AppSlice = {
  selectedBoardId: string | null;
  selectedBoardName: string;
  isEditingBoard: boolean;
  openBoardForm: boolean;
};

const initialState: AppSlice = {
  selectedBoardId: null,
  selectedBoardName: "",
  isEditingBoard: false,
  openBoardForm: false,
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
    setIsEditingBoard: (state, action) => {
      state.isEditingBoard = action.payload;
    },
    setOpenBoardForm: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.openBoardForm = action.payload;
    },
  },
});

export const {
  setSelectedBoardId,
  setSelectedBoardName,
  setIsEditingBoard,
  setOpenBoardForm,
} = appSlice.actions;

export default appSlice.reducer;
