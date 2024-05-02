import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState{
    bottomOpen:boolean
}

const initialState:AppState={
    bottomOpen:false
}

const bottomSlice=createSlice({
    name:'bottomSheet',
    initialState,
    reducers:{
        setBottomVisibility:(state:AppState,action:PayloadAction<boolean>)=>{
            state.bottomOpen=action.payload
        }
        
    }
})

export const { setBottomVisibility}=bottomSlice.actions

export default bottomSlice.reducer