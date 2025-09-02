import { configureStore } from "@reduxjs/toolkit";
import { beseApi } from "./api/baseapi";
// import logger from "./middlewares/looger";

const store = configureStore({
    reducer:{
        [beseApi.reducerPath]: beseApi.reducer, // aita kii korlam keno korlam ?[beseApi.reducerPath]: beseApi.reducer, aii reducer ta kotha theke pacche ? rtk query te reducer bolte kii bujai ?
//     ১️⃣ RTK Query তে reducer কী?

// সাধারণ Redux slice-এ আমরা createSlice দিয়ে state এবং reducers বানাই।

// RTK Query তে createApi দিয়ে বানানো API slice এরও state থাকে, কিন্তু আমরা আলাদাভাবে reducer লিখি না।

// RTK Query internally একটি reducer তৈরি করে যা handle করে:

// query caching

// fetching status

// errors

// data storage

// অর্থাৎ, RTK Query slice এর reducer হলো state management logic যা automatically তৈরি হয়।
// baseApi.reducerPath = "baseApi" → key হিসেবে store এ state রাখার জন্য

// baseApi.reducer = RTK Query slice এর auto-generated reducer
// API slice এর state kothai thake ?
// ChatGPT said:

// ঠিক আছে, step by step বুঝাই। 🙂

// ১️⃣ RTK Query API slice এর state কোথায় থাকে?

// RTK Query slice যখন তৈরি হয়, তখন internally একটি reducer তৈরি হয়।

// সেই reducer Redux store এর মধ্যে যুক্ত হয়।

// Store তে এটি reducerPath এর key এর নিচে রাখা হয়।

// ২️⃣ উদাহরণ
// import { configureStore } from "@reduxjs/toolkit";
// import { baseApi } from "./baseApi";

// export const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//   },
// });


// যদি baseApi.reducerPath = "baseApi" হয়, তাহলে store এ দেখা যাবে:

// store = {
//   baseApi: {          // এখানে API slice এর state
//     queries: { ... },   // cached query results
//     mutations: { ... }, // cached mutation results
//     provided: { ... }   // automatically provided cache info
//   },
//   user: { ... },       // অন্য slice
//   task: { ... }        // অন্য slice
// }


// অর্থাৎ, API slice এর state tree এর মধ্যে baseApi key এর নিচে থাকে।

// ৩️⃣ API slice state এর মধ্যে কি থাকে?
// অংশ	মানে
// queries	সমস্ত query এর cached data এবং status
// mutations	সমস্ত mutation এর cached data এবং status
// provided	cache/invalidations সম্পর্কিত তথ্য

// 💡 সংক্ষেপে:

// RTK Query slice এর state থাকে Redux store এর মধ্যে, এবং reducerPath key এর নিচে সব query ও mutation data cache হয়ে থাকে।
    }, 
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beseApi.middleware),// beseApi.middleware keno add korlam ate kii shubidha holo.
})



export default store;

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch

