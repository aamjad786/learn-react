import {
    type BaseQueryFn,
    createApi,
    fetchBaseQuery,
    type FetchBaseQueryError,
    type FetchBaseQueryMeta
} from '@reduxjs/toolkit/query/react';

// const constructUrl = (urlTemplate, pathParams) => {
//     let url = urlTemplate;
//     if (pathParams) {
//         Object.keys(pathParams).forEach((key) => {
//             url = url.replace(`:${key}`, pathParams[key]);
//         });
//     }
//     return url;
// };

// type baseQueryType = BaseQueryFn<
//     string | { url: string; method: string; body?: any; params?: any },
//     unknown,
//     FetchBaseQueryError,
//     FetchBaseQueryMeta
// >

// const baseQuery: baseQueryType = async (args: any, api: any, extraOptions: any) => {
//
//     const baseQueryFn = fetchBaseQuery({
//         baseUrl: "http://192.168.11.14:6007/",
//     })
//
//     try {
//         const response = await baseQueryFn(args, api, extraOptions)
//         console.log('response from server in the interceptor: ', response)
//     } catch (error: any) {
//         console.log(error)
//     }
//
// }

export const apiSlice = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.11.14:6007/' }),

    endpoints: (builder) => ({

        getApi: builder.query({
            query: (url) => ({
                url, // Dynamic URL passed as a parameter
                method: 'GET',
            })
        }),

        getApiWithQueryParam: builder.query({
            query: ({url, params, headers}) => ({
                url,
                method: 'GET',
                params, // Query parameters
                headers, // Optional custom headers
            })
        }),

        // getApiWithPathParam: builder.query({
        //     query: ({url, params, headers}) => ({
        //         url,
        //         method: 'GET',
        //         params, // Query parameters
        //         headers, // Optional custom headers
        //     })
        // })

        // POST request with dynamic body
        postApi: builder.mutation({
            query: ({ url, body, headers }) => ({
                url,
                method: 'POST',
                body,
                headers,
            })
        }),

        // PUT request for updates
        putApi: builder.mutation({
            query: ({ url, body, headers }) => ({
                url,
                method: 'PUT',
                body,
                headers,
            })
        }),

        deleteApi: builder.mutation({
            query: ({ url, headers }) => ({
                url,
                method: 'DELETE',
                headers,
            })
        })

    })
});

// Export auto-generated hooks
export const {useLazyGetApiQuery, usePostApiMutation} = apiSlice;