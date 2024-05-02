import { store } from "../reduxStore"
import { setBottomVisibility } from "./bottomSlice"


export const changeBottomVisibility=(val:boolean)=>{
    store.dispatch(setBottomVisibility(val))
}