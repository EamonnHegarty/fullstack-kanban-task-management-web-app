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
    getBoardById: builder.query({
      query: (id) => ({
        url: `${BOARDS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateBoard: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${BOARDS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteBoardById: builder.mutation({
      query: (id) => ({
        url: `${BOARDS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useCreateBoardMutation,
  useGetBoardByIdQuery,
  useUpdateBoardMutation,
  useDeleteBoardByIdMutation,
} = boardsApiSlice;
