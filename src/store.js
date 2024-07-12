import  {configureStore,combineReducers} from "@reduxjs/toolkit"
import { todoSlice } from "./slices/todoSlice"


const reducer=combineReducers({
    single:todoSlice.reducer

})

export const store=configureStore({
    reducer:reducer
})