import type {ITask} from "@/type";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState{
    tasks: ITask[]
}

const initialState:InitialState = {
    tasks: [
{ id: '1', title: 'Task 1', description: 'Description for Task 1', dueDate: '2023-10-01', isCompleted: false, priority: 'High' },
    ]
}

export const taskSlice = createSlice({
    name: "task",
    initialState,   
    reducers: {}
})
// console.log(taskSlice);
export default taskSlice.reducer;