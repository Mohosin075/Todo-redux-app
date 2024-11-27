import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        console.log("inside priority", priority);

        if (priority) {
          params.append("priority", priority);
        }

        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        console.log("inside base api ==>", data);
        return { url: "/task", method: "POST", body: data };
      },
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return { url: `/task/${id}`, method: "delete" };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (options) => {
        return { url: `/task/${options.id}`, method: "PUT" , body : options.data};
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation , useUpdateTodoMutation} =
  baseApi;