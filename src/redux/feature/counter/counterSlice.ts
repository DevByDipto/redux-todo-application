import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        incriment: (state, action) => {
            state.count += action.payload
        },

        dicrement: (state) => {
            state.count -= 1
        }
    } 
}) 

export const { incriment, dicrement } = counterSlice.actions 


export default counterSlice.reducer 