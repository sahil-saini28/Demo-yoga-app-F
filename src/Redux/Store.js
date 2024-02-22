import {configureStore} from '@reduxjs/toolkit';
import SessionSlice from '../feature/SessionSlice';

export const store = configureStore({
    reducer:  SessionSlice 
})