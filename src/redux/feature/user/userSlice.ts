import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName:''
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
console.log(action.payload);

        }
    }
})

export default userSlice.reducer;
export const { addUser} = userSlice.actions