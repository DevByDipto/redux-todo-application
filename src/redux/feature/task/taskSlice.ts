import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[],
    filter: "low" | "medium" | "high" | "all" // | aitar nam kii ?
}

const initialState: InitialState = {
    tasks: [
        { id: '1', title: 'Task 1', description: 'Description for Task 1', dueDate: new Date('2023-10-01').toISOString(), isCompleted: false, priority: 'high' },
        { id: '2', title: 'Task 2', description: 'Description for Task 2', dueDate: new Date('2023-10-01').toISOString(), isCompleted: false, priority: 'low' },
    ],
    filter: "all"
}

type DraftTask = Pick<ITask, 'title' | "description" | "dueDate" | "priority">
const createTask = (taskData: DraftTask): ITask => {
    return {
        ...taskData,
        id: nanoid(),
        isCompleted: false
    }
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            // console.log(action.payload);
            const taskData = createTask(action.payload)
            // console.log(Object.keys(taskData).length);
            // console.log(Object.keys(initialState.tasks[0]).length);
            state.tasks.push(taskData)
        },
        toggleCompleteStatus: (state, action: PayloadAction<string>) => {
            console.log(state.tasks);
            state.tasks.forEach((task) => {
                if (task.id === action.payload) {
                    task.isCompleted = !task.isCompleted;
                }
            })
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateFilter: (state, action: PayloadAction<"all" | "low" | "medium" | "high">) => {
            
            state.filter = action.payload
            // console.log(state.filter)
            // console.log(initialState.filter)
        },


    },



})
// console.log(taskSlice);
export default taskSlice.reducer;
export const { addTask, toggleCompleteStatus, deleteTask, updateFilter } = taskSlice.actions

export const selectTasks = (state: RootState) => {
    console.log(state.todo.filter);
     if (state.todo.filter == "all") {
        return state.todo.tasks
     }
            return state.todo.tasks.filter((task) => task.priority == state.todo.filter)
        // } else if (state.todo.filter == "medium") {
        //     return task
        // }
        // else if (state.todo.filter == "high") {
        //     return task
        // } else {
        //     return task
        // }
    
       
    // })


}; // RootState keno use korchi ?