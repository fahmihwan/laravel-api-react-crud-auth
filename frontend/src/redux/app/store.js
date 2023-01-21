import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { categoriesApi } from "../features/categorySlice";
import { postsApi } from "../features/postSlice";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        postsApi.middleware,
        categoriesApi.middleware
    ]),
});
setupListeners(store.dispatch);


