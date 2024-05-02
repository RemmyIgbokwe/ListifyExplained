import { combineReducers } from "redux";

import bottomReducer from './bottomSheetSlice/bottomSlice'
import taskReducer from "./taskSlice/taskSlice";
const rootReducer=combineReducers({
    bottomVisible:bottomReducer,
    taskReducer:taskReducer
})

export type RootState=ReturnType<typeof rootReducer>
export default rootReducer