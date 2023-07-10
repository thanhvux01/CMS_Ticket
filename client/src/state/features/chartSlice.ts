import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { chart } from "../../type/chart";


const initialState:chart = {
    week1: 0,
    week2: 0,
    week3: 0,
    week4: 0,
    total: 0
}

export const getChart = createAsyncThunk('/chart',async (time:string) => {
    const temp = await axios.post('http://localhost:8000/api/ticket/chart',{time});
    return temp.data as chart;
})


export const chartSlice = createSlice({
    name: "chart",
    initialState,
    reducers: {
   
    },
    extraReducers: (builder) => {
        builder.addCase(getChart.fulfilled,(state,action)=>{
             
            return {...action.payload};

      })
       
    }
    
})

export const {  } = chartSlice.actions;

export default chartSlice.reducer;

