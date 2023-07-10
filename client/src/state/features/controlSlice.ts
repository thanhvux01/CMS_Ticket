import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import dayjs from "dayjs"
import { sort } from "../../type/sort"
import { forControl } from "../../type/forcontrol"




const initialState:forControl = {
    createdAt: dayjs().format('YYYY-MM-DD'),
    expiredAt: dayjs().format('YYYY-MM-DD'),
    status: "All",
}
   
export const controlSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
          update: (state,action) => {
            
           return {...action.payload}
          }
    },
    
})

export const { update } = controlSlice.actions;

export default controlSlice.reducer;

