import type { RootState } from "@/redux/store";
import type {ITask} from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    tasks: ITask[]
}

const initialState:InitialState = {
    tasks: [
{ id: '1', title: 'Task 1', description: 'Description for Task 1', dueDate: new Date('2023-10-01'), isCompleted: false, priority: 'High' },
{ id: '2', title: 'Task 2', description: 'Description for Task 2', dueDate: new Date('2023-10-01'), isCompleted: false, priority: 'Low' },
    ]
}

export const taskSlice = createSlice({
    name: "task",
    initialState,   
    reducers: {}
})
// console.log(taskSlice);
export default taskSlice.reducer;

export const selectTasks = (state:RootState) => state.todo.tasks; // RootState keno use korchi ?