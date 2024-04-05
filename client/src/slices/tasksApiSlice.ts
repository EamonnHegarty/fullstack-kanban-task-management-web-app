import { BOARDS_URL, COLUMNS_URL, TASKS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const tasksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTaskWithSubTasks: builder.mutation({
      query: ({ id, columnId, ...data }) => ({
        url: `${BOARDS_URL}/${id}${COLUMNS_URL}/${columnId}/${TASKS_URL}`,
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useCreateTaskWithSubTasksMutation } = tasksApiSlice;
