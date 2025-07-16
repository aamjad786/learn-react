import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./apiSlice.ts";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // Add API slice reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(apiSlice.middleware), // Add RTK Query middleware
});