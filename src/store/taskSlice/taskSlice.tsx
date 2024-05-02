import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MyTask {
    id:string,
    category: string;
    date: string;
    description: string;
    priority: string;
    stage: string;
    title: string;
    time:string;
}


interface AppState{
    bottomOpen:boolean,
    reduxTaskDetails:MyTask[]
}

const initialState:AppState={
    bottomOpen:false,
    reduxTaskDetails:[]
}

const taskSlice=createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask: (state: AppState, action: PayloadAction<MyTask>) => {
            state.reduxTaskDetails.push(action.payload);
        },
        setTask: (state: AppState, action: PayloadAction<MyTask[]>) => {
            state.reduxTaskDetails = action.payload;
        },
        deleteTask: (state: AppState, action: PayloadAction<string>) => {
            state.reduxTaskDetails = state.reduxTaskDetails.filter(task => task.id !== action.payload);
        },
        completeTask: (state: AppState, action: PayloadAction<string>) => {
            const taskId = action.payload;
            const taskIndex = state.reduxTaskDetails.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                state.reduxTaskDetails[taskIndex].stage = 'COMPLETED';
            }
        },
        editTask: (state: AppState, action: PayloadAction<{ taskId: string; updatedTask: Partial<MyTask> }>) => {
            const { taskId, updatedTask } = action.payload;
            const taskIndex = state.reduxTaskDetails.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                state.reduxTaskDetails[taskIndex] = { ...state.reduxTaskDetails[taskIndex], ...updatedTask };
            }
        }
        // completeTask
        //deleteTask
        
    }
})

export const { addTask,setTask,deleteTask,completeTask,editTask}=taskSlice.actions

export default taskSlice.reducer