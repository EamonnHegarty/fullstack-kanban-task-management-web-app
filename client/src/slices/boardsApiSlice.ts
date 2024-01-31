import { BOARDS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const boardsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBoards: builder.query({
      query: () => ({
        url: BOARDS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetBoardsQuery } = boardsApiSlice;
