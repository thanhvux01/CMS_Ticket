import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ticket } from "../../type/ticket"
import axios from "axios"
const initialState : ticket[] = []

type res = {
    status:string,
    tickets:ticket[],
}

export const getTickets = createAsyncThunk('/ticket/get',async () => {
       const temp = await axios.get('http://localhost:8000/api/ticket');
       return temp.data as res;
})

   
export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
   
    },
    extraReducers: (builder) => {
         builder.addCase(getTickets.fulfilled,(state,action)=>{
             
               return [...action.payload.tickets];

         })
       
    }
    
})

export const {  } = ticketSlice.actions;

export default ticketSlice.reducer;

