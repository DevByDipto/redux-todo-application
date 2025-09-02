import type { RootState } from "@/redux/store";
import type { Iuser } from "@/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    users: Iuser[]
}


const initialState: InitialState = {
    users: [
        {
            id: "1",
            name: "dipto"
        }
    ]
}
type DraftTask = Pick<Iuser, 'name'>
const createTask = (userData: DraftTask) => { // DarftUser keno nam dewa hoise ?
    return {
        ...userData,
        id: nanoid(),
    }
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<DraftTask>) => {
            const userData = createTask(action.payload)
            state.users.push(userData)
            // console.log(action.payload);
        },
        
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        }
    }
})

export const selectUsers = (state: RootState) => { return state.user.users } // selectUsers keno nam dewa hoise ?RootState keno use kora hoise ?

export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions