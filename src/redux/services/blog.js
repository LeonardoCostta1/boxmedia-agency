import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: (page = 1) => `?page=${page}`
    }),
    getArticlebyId: builder.query({
      query: (id) => `/${id}`
    }),
    createArticle: builder.mutation({
      query: (body) => ({
        headers: {
          "Content-type": "application/json"
        },
        url: "/",
        method: "POST",
        body
      }),
      invalidatesTags: ["Posts"]
    }),
    createComment: builder.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `comment/${id}`,
          method: 'PUT',
          body,
        }
      },
    })
  })
});

export const { useGetAllArticlesQuery, useGetArticlebyId, useCreateArticleMutation,useCreateCommentMutation  } = blogApi;
