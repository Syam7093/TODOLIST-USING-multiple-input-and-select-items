import { createSlice } from "@reduxjs/toolkit";


const initialState={
    data:[]
}

export const todoSlice=createSlice({
    name:"reduxtoolkit",
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload
            
        }
    }
})


export const {setData}=todoSlice.actions