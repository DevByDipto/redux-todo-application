import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const beseApi = createApi({ //createApi() → এটা API slice create করে 
//     API slice কী?

// API slice হলো Redux Toolkit Query (RTK Query) এর একটি অংশ, যা ব্যবহার করা হয় API calls manage করার জন্য।

// RTK Query ব্যবহার করলে তুমি যেকোনো REST বা GraphQL endpoint কে একটা slice এর মধ্যে সংজ্ঞায়িত করতে পারো।

// Slice = API related logic, state, caching সব এক জায়গায়।
    reducerPath: "baseApi", // reducerPath: "baseApi" kii ?
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes:["task"], // tagTypes ta kar kar jonno use hocche bujbo kivabe?
    endpoints: (build) => ({// endpoint kii ? // build kii ?
        getTask: build.query({ // build.query kii ?
            query: () => `/tasks`,
            providesTags:["task"] // providesTags mane kii ? keno use kori ?
        }),
        createTask: build.mutation({
            query: (taskData) => ({
                url: `/tasks`,
                method: 'POST',
                body: taskData,
            }),
            invalidatesTags:["task"]
        })
    })
})

export const { useGetTaskQuery, useCreateTaskMutation } = beseApi // aita kii korlam keno korlam ?

