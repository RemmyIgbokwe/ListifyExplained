import { store } from "../reduxStore"
import { MyTask, addTask, completeTask, deleteTask, editTask, setTask } from "./taskSlice"


export const addNewTask=(val:MyTask)=>{
    store.dispatch(addTask(val))
}
export const setTaskFunction=(val:MyTask[])=>{
    store.dispatch(setTask(val))
}


export const completeTaskFunction = (taskId: string) => {
    store.dispatch(completeTask(taskId));
};

export const deleteTaskFunction = (taskId: string) => {
    store.dispatch(deleteTask(taskId));
};

export const editTaskFunction = (taskId: string, updatedTask: Partial<MyTask>) => {
    store.dispatch(editTask({ taskId, updatedTask }));
};