import { BOARDS_URL, COLUMNS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const columnsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getColumns: builder.query({
      query: (id) => ({
        url: `${BOARDS_URL}/${id}${COLUMNS_URL}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetColumnsQuery } = columnsApiSlice;
