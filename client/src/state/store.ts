import {configureStore} from '@reduxjs/toolkit';
import ticketReducer from './features/ticketSlice';
import sortReducer from './features/sortSlice'
import controlSlice from './features/controlSlice';
import packageSlice from './features/packageSlice';
import chartSlice from './features/chartSlice';
export const store = configureStore({
    reducer: {
       ticket:ticketReducer,
       sort:sortReducer,
       control:controlSlice,
       package:packageSlice,
       chart:chartSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;