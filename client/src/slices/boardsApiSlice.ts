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
    createBoard: builder.mutation({
      query: (data) => ({
        url: BOARDS_URL,
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useGetBoardsQuery, useCreateBoardMutation } = boardsApiSlice;
