import { createSlice } from "@reduxjs/toolkit";
import { SelectedBoard } from "../types/BoardsData";

type AppSlice = {
  selectedBoardId: string | null;
  selectedBoardName: string;
  isEditingBoard: boolean;
  openBoardForm: boolean;
  selectedBoard: SelectedBoard | null;
  shouldRefreshBoardData: boolean;
};

const initialState: AppSlice = {
  selectedBoardId: null,
  selectedBoardName: "",
  isEditingBoard: false,
  openBoardForm: false,
  selectedBoard: null,
  shouldRefreshBoardData: false,
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
    setOpenBoardForm: (state, action) => {
      state.openBoardForm = action.payload;
    },
    setSelectedBoard: (state, action) => {
      state.selectedBoard = action.payload;
    },
    setShouldRefreshBoardData: (state, action) => {
      state.shouldRefreshBoardData = action.payload;
    },
  },
});

export const {
  setSelectedBoardId,
  setSelectedBoardName,
  setIsEditingBoard,
  setOpenBoardForm,
  setSelectedBoard,
  setShouldRefreshBoardData,
} = appSlice.actions;

export default appSlice.reducer;
