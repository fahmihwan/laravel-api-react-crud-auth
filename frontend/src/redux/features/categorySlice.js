import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import httpCommon from "../../http-common";

export const categoriesApi = createApi({
    reducerPath: "categoriesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: httpCommon.baseURL,
        prepareHeaders: httpCommon.setHeader,
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "/categories",
        }),
        getSelectCategories: builder.query({
            query: () => "/categories/list/select",
        }),
        addNewCategory: builder.mutation({
            query: (data) => ({
                url: "/categories",
                method: "POST",
                body: data,
            }),
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `categories/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useDeleteCategoryMutation,
    useAddNewCategoryMutation,
    useGetSelectCategoriesQuery,
} = categoriesApi;
