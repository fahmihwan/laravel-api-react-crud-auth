import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import httpCommon from "../../http-common";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: httpCommon.baseURL,
        prepareHeaders: httpCommon.setHeader,
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
        }),
        deletePosts: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: "DELETE",
            }),
        }),
        addNewPosts: builder.mutation({
            query: (data) => ({
                url: "posts",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useDeletePostsMutation, useAddNewPostsMutation } = postsApi;
