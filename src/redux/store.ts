import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterSlice";    
import taskReducer from "./feature/task/taskSlice";    
import logger from "./middlewares/looger";

const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: taskReducer
    }, 
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
console.log({store});

export default store;

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch

