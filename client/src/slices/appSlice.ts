import { createSlice } from "@reduxjs/toolkit";
import { ColumnsForTaskForm, SelectedBoard } from "../types/BoardsData";
import { columnsApiSlice } from "./columnsApiSlice";

type AppSlice = {
  selectedBoardId: string | null;
  selectedBoardName: string;
  isEditingBoard: boolean;
  openBoardForm: boolean;
  selectedBoard: SelectedBoard | null;
  // for now copy board but when adding editing update this
  selectedTask: SelectedBoard | null;
  shouldRefreshBoardData: boolean;
  shouldRefreshBoardsListOnly: boolean;
  openTaskForm: boolean;
  optionsForStatus: Array<ColumnsForTaskForm> | null;
  selectedOption: ColumnsForTaskForm | null;
};

const initialState: AppSlice = {
  selectedBoardId: null,
  selectedBoardName: "",
  isEditingBoard: false,
  openBoardForm: false,
  selectedBoard: null,
  selectedTask: null,
  shouldRefreshBoardData: false,
  shouldRefreshBoardsListOnly: false,
  openTaskForm: false,
  optionsForStatus: null,
  selectedOption: null,
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
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    setShouldRefreshBoardData: (state, action) => {
      state.shouldRefreshBoardData = action.payload;
    },
    setShouldRefreshBoardsListOnly: (state, action) => {
      state.shouldRefreshBoardsListOnly = action.payload;
    },
    setOpenTaskForm: (state, action) => {
      state.openTaskForm = action.payload;
    },
    setOptionsForStatus: (state, action) => {
      state.optionsForStatus = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      columnsApiSlice.endpoints.getColumns.matchFulfilled,
      (state, action) => {
        state.optionsForStatus = action.payload;
      }
    );
  },
});

export const {
  setSelectedBoardId,
  setSelectedBoardName,
  setIsEditingBoard,
  setOpenBoardForm,
  setSelectedBoard,
  setSelectedTask,
  setShouldRefreshBoardData,
  setShouldRefreshBoardsListOnly,
  setOpenTaskForm,
  setOptionsForStatus,
  setSelectedOption,
} = appSlice.actions;

export default appSlice.reducer;
