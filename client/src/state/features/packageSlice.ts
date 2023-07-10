import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ticket } from "../../type/ticket"
import axios from "axios"
import { packageTicket } from "../../type/package"
import { newpkg } from "../../type/newpackage"


const initialState: packageTicket[] = []

type res = {
    status: string,
    packages: packageTicket[],
}

export const getPackage = createAsyncThunk('/package/get', async () => {
    const temp = await axios.get('http://localhost:8000/api/package');
    return temp.data as res;
})

type resnew = {
    status: string,
    package: packageTicket,
}


export const createNewPackage = createAsyncThunk('/package/create', async (pkg: newpkg) => {

    const temp = await axios.post('http://localhost:8000/api/package', { ...pkg });
    return temp.data as resnew;
})

export const updatePackage = createAsyncThunk('/package/update', async (pkg: newpkg) => {

    const temp = await axios.put('http://localhost:8000/api/package', { ...pkg });
    return temp.data as resnew;
})



export const packageSlice = createSlice({
    name: "package",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPackage.fulfilled, (state, action) => {

            return [...action.payload.packages];

        })
        builder.addCase(createNewPackage.fulfilled, (state, action) => {

            state.push(action.payload.package);

        })
        builder.addCase(updatePackage.fulfilled, (state, action) => {
       
           return state.map((item) => {
                if (item.id == action.payload.package.id) {
                    item = action.payload.package
                }
                return item
            })
            

        })
        builder.addCase(createNewPackage.rejected, (state, action) => {



        })


    }

})

export const { } = packageSlice.actions;

export default packageSlice.reducer;

