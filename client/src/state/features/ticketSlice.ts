import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ticket } from "../../type/ticket"
import axios from "axios"
import dayjs from "dayjs"
import { sort } from "../../type/sort"
import { forControl } from "../../type/forcontrol"
const initialState : ticket[] = []

type res = {
    status:string,
    tickets:ticket[],
}



export const getTickets = createAsyncThunk('/ticket/get',async () => {
       const temp = await axios.get('http://localhost:8000/api/ticket');
       return temp.data as res;
})

export const searchTickets = createAsyncThunk('/ticket/search',async (id:string) => {
    const temp = await axios.get('http://localhost:8000/api/ticket/'+id);
    return temp.data as res;
})

export const sortTickets = createAsyncThunk('/ticket/sort',async ({createdAt,expiredAt,status,checkin}:sort) => {
    const temp = await axios.post('http://localhost:8000/api/ticket',{createdAt,expiredAt,status,checkin});
    return temp.data as res;
})

export const controlTicket = createAsyncThunk('/ticket/for-control',async ({createdAt=dayjs().format('YYYY-MM-DD'),expiredAt=dayjs().format('YYYY-MM-DD'),status}:forControl) => {
    const temp = await axios.post('http://localhost:8000/api/ticket/for-control',{createdAt,expiredAt,status});
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
         builder.addCase(sortTickets.fulfilled,(state,action)=>{
             
            return [...action.payload.tickets];

      })
      builder.addCase(searchTickets.fulfilled,(state,action)=>{
             
        return [...action.payload.tickets];

  })
      builder.addCase(controlTicket.fulfilled,(state,action)=>{
             
        return [...action.payload.tickets];

  })
       
    }
    
})

export const {  } = ticketSlice.actions;

export default ticketSlice.reducer;

