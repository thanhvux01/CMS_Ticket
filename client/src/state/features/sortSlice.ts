import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import dayjs from "dayjs"
import { sort } from "../../type/sort"




const initialState:sort = {
    createdAt: dayjs().format('YYYY-MM-DD'),
    expiredAt: dayjs().format('YYYY-MM-DD'),
    status: "All",
    checkin: "Cổng 1"
}
   
export const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
          update: (state,action) => {
            
           return {...action.payload}
          }
    },
    
})

export const { update } = sortSlice.actions;

export default sortSlice.reducer;

